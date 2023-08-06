import "cypress-localstorage-commands";
/// <reference types="cypress" />

context('Actions', () => {
  before('alias dump here', () => {
    let flavour = Date.now().toString();
    const articleName = `${Cypress.env('article_name_conduit')}` + flavour;
    const articleNameURL = articleName.replace(/ /g, '-');
    cy.wrap(articleNameURL).as('articleNameURL')
    cy.wrap(articleName).as('articleName')
  });

  beforeEach('Creates session. Clears session before each test.', () => {
    cy.window().then(win => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.APIlogin();
  });

  describe('Test Post Interaction Process', () => {
    it('should be able to log in and create post', function () {
      cy.visit(`${Cypress.env('base_url_conduit')}`);

      cy.CreateNewPost();
    })

    it('should be able to log in and delete created post', function () {
      cy.visit(`${Cypress.env('base_url_conduit')}`);
      cy.NavigateToPost();
    })
  })
})