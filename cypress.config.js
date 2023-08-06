const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)

    },
    env: {
      // conduit
      url: 'https://conduit.productionready.io',
      api_url_conduit: 'https://conduit.productionready.io/api',
      base_url_conduit: 'https://react-redux.realworld.io/',
      login_url_conduit: '/users/login',
      new_post_url_conduit: '/editor',
      article_name_conduit: "New Article About Unicorns United",
      article_text_conduit: "Wild article about Unicorns United has appeared!",
      // reqres
      base_url_reqres: 'https://reqres.in/',
      api_url_reqres: 'https://reqres.in/api',
      response_time_reqres: 100
    },
  }
})
