const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  "video": true,
  "defaultCommandTimeout": 5000,
  "pageLoadTimeout": 10000,
  "experimentalInteractiveRunEvents": true,
  "experimentalRunEvents": true,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/integration/cucumber-tests/*.feature",
    excludeSpecPattern: ["*.js", "*.md"],
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalRunAllSpecs: true
  },
});
