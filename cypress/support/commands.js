import "cypress-localstorage-commands";

Cypress.Commands.add('APIlogin', () => {
  cy.session([`${Cypress.env('user_email')}`,
  `${Cypress.env('user_password_conduit')}`], () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('api_url_conduit')}${Cypress.env('login_url_conduit')}`,
      body: {
        user: {
          email: `${Cypress.env('user_email_conduit')}`,
          password: `${Cypress.env('user_password_conduit')}`,
        }
      },
    }).then(({ body }) => {
      window.localStorage.setItem('jwt', body.user.token)
    })
    cy.visit(`${Cypress.env('base_url_conduit')}`);
    // TODO validation for request or check local storage for existing token
  })
}),

  Cypress.Commands.add('CreateNewPost', function () {
    // INFO setting a random element into Article Name to ensure entered name is unique
    cy.get('[class="ion-compose"]').click();

    cy.get('[placeholder="Article Title"]').click().type(this.articleName);
    cy.get(`[placeholder="What's this article about?"]`).click().type('Unicorns United');
    cy.get(`[placeholder="Write your article (in markdown)"]`).click().type(`${Cypress.env('article_text_conduit')}`);
    cy.get(`[placeholder="Enter tags"]`).click().type('@unicornsunited');
    cy.get(`[type="button"]`).contains('Publish Article').click();

    // INFO validation for URL redirect - should contain article name
    cy.url().should('include', '/article/' + this.articleNameURL)
    // INFO validation for each visible part of article - why is summary not visible?
    cy.get('h1').should('contain', this.articleName);
    cy.get('p').should('contain', `${Cypress.env('article_text_conduit')}`)
  }),

  Cypress.Commands.add('NavigateToPost', function () {
    // INFO getting into existing post
    cy.get('[class="nav-link"]').contains('Global Feed').click();
    cy.get('[class="preview-link"]').should('contain', this.articleName).first().click();
    // INFO validation for URL redirect - should contain article name
    cy.url().should('include', '/article/' + this.articleNameURL)
  }),

  Cypress.Commands.add('DeletePost', function () {
    cy.get('button').contains(' Delete Article').click();
    cy.get('[class="nav-link"]').should('contain', 'Global Feed');
  })