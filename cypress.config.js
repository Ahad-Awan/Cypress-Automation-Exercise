const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'AutomationExercise E2E Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  screenshotOnRunFailure: true,
  video: true,
  // Disable compression to avoid hanging ffmpeg processes on Windows after runs
  videoCompression: false,
  e2e: {
    baseUrl: 'https://automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
