import "cypress-localstorage-commands";

Cypress.Commands.add('APIlogin', () => { 
    cy.session([`${Cypress.env('user_email')}`,
    `${Cypress.env('user_password')}`], () => {
        cy.request({
          method: 'POST',
          url: `${Cypress.env('api_url')}${Cypress.env('login_url')}`,
          body: {
            user: {
              email:`${Cypress.env('user_email')}`,
              password: `${Cypress.env('user_password')}`,
            }
          },
        }).then(({ body }) => {
          window.localStorage.setItem('jwt', body.user.token)
        })
        cy.visit(`${Cypress.env('base_url')}`);
        // TODO validation for request or check local storage for existing token
      })}),

Cypress.Commands.add('CreateNewPost', () => {
  // setting a random element into Article Name to ensure entered name is unique
  const flavour = Date.now().toString();

  cy.get('[class="ion-compose"]').click();

  cy.get('[placeholder="Article Title"]').click().type(`${Cypress.env('article_name')}`+flavour);
  cy.get(`[placeholder="What's this article about?"]`).click().type('Unicorns United');
  cy.get(`[placeholder="Write your article (in markdown)"]`).click().type(`${Cypress.env('article_text')}`);
  cy.get(`[placeholder="Enter tags"]`).click().type('#unicornsunited');
  cy.get(`[type="button"]`).contains('Publish Article').click();

  // validation for URL redirect - should contain article name
  const articleName = `${Cypress.env('article_name')}`+flavour 
  const articleNameURL = articleName.replace(  / /g, '-')
  cy.url().should('include', '/article/'+articleNameURL)
  // validation for each visible part of article - why is summary not visible?
  cy.get('h1').should('contain', articleName);
  cy.get('p').should('contain',`${Cypress.env('article_text')}`)
  })