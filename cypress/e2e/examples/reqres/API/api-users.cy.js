import "cypress-localstorage-commands";
import reqres from '../../../../fixtures/reqres.json';

/// <reference types="cypress" />

context('/users endpoint, methods GET LIST, POST', () => {
  before(() => {
    cy.fixture('reqres').then((reqresFixture) => {
      expect(reqres, 'the same data').to.deep.equal(reqresFixture)
    })
  })

  describe('Test /users endpoint response and validate', () => {

    it('POST /users request and response validation', () => {
      let dateNow = new Date
      let flavour = Date.now().toString();
      const yearNow = dateNow.getFullYear().toString()
      cy.fixture('reqres').then(reqres => {
        const fullName = reqres.nameUnicorn + flavour
        const jobName = reqres.job
        cy.request("POST", `${Cypress.env('api_url_reqres')}/users?`, {
          name: fullName,
          jobName,
        }).should((response) => {
          expect(response.status).to.eq(201)
          expect(response.duration).to.not.be.greaterThan(Cypress.env('response_time_reqres'));
        }).then(({ body }) => {
          expect(body.id).to.exist
          expect(body.createdAt.split('-', 1)).to.contain(yearNow)
        })

      })
    })

    it('GET LIST /users request and response validation', () => {
      // WHY does it have to be a call to page 2?
      cy.request("GET", `${Cypress.env('api_url_reqres')}/users?page=2`).should((response) => {
        expect(response.status).to.eq(200);

      }).then(({ body }) => {
        // TODO change validation to DB vs API comparison in future
        expect(body.total).to.exist
        expect(body.data[0].last_name).to.exist
        expect(body.data[1].last_name).to.exist
        // INFO returns only dataset for one page, not all of them, needs to be multiplied by total of pages 
        expect((body.data.length) * (body.total_pages)).to.be.equal((body.total))
      })
    })


  })
})
