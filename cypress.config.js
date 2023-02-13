//const { defineConfig } = require('cypress')


module.exports = {
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: './cypress/e2e/*.cy.{js,jsx,ts,tsx}',
  },
  component: {
    specPattern: './cypress/e2e/*.cy.{js,jsx,ts,tsx}',
  },
}
