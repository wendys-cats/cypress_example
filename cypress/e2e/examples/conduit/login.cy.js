import "cypress-localstorage-commands";
/// <reference types="cypress" />

context('Actions', () => {
  before(() => {

  });
  
  beforeEach(() => {
    cy.APIlogin();
  });

  describe('Test Post Interaction Process', () => {
  it('should be able to log in and create post', () => {  
    cy.visit(`${Cypress.env('base_url')}`);


    cy.CreateNewPost();
  })

  it('should be able to log in and delete created post', () => {  
    cy.visit(`${Cypress.env('base_url')}`);

    cy.get('[class="nav-link"]').contains('Global Feed').click();


  })


})
afterEach(() => {
  cy.window().then(win => win.sessionStorage.clear());
  cy.clearCookies();
  cy.clearLocalStorage();
  });
})