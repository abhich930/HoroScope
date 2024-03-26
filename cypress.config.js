const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    specPattern: "cypress/e2e/**/*{js,jsx,ts,tsx,feature}",
    pageLoadTimeout: 180000,
    defaultCommandTimeout: 300000,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
  },
  reporter: 'cypress-mochawesome-reporter'
});
