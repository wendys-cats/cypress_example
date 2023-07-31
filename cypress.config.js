const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)

    },
    env: {
      url: 'https://conduit.productionready.io',
      api_url: 'https://conduit.productionready.io/api',
      base_url: 'https://react-redux.realworld.io/',
      login_url: '/users/login',
      new_post_url: '/editor',
      user_email: "unicornsunited@mailinator.org",
      user_password: "testytest",
      article_name: "New Article About Unicorns United",
      article_text: "Wild article about Unicorns United has appeared!"
    },
  }
})
