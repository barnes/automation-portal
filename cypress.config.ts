import { defineConfig } from "cypress";
import 'cypress-mochawesome-reporter/plugin';

const runID = process.env.runID || 'undefined';

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: `./static/runs/cypress/${runID}/`,
    overwrite: false,
    html: true,
    json: true,
    inlineAssets: true,
  },
  
  e2e: {
    screenshotOnRunFailure: true,
    screenshotsFolder: `./static/runs/cypress/${runID}/screenshots`,
    video: true,
    videoCompression: 45,
    videosFolder: `./static/runs/cypress/${runID}/videos`,
    supportFile: "./tests/cypress/support/e2e.ts",
    specPattern: "./tests/cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
