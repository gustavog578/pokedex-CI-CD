module.exports = {
  video: false,
  e2e: {
    setupNodeEvents() {},
    specPattern: './cypress/e2e/*.cy.{js,jsx,ts,tsx}',
  },
  component: {
    specPattern: './cypress/e2e/*.cy.{js,jsx,ts,tsx}',
  },
}
