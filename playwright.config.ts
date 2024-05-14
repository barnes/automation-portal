import { defineConfig, devices } from '@playwright/test';

const runID = process.env.runID || 'undefined';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests/playwright',

  // Reporter to use
  reporter: [['pwmochawesome', { reportDir: `./static/runs/playwright/${runID}/results`, outputJSON: true}], ['json', {outputFile: `./static/runs/playwright/${runID}/result.json`}],  ['html', {outputFolder: `./static/runs/playwright/${runID}/html`, open: 'never', assets: {inline: true}}]],
  outputDir: `static/runs/playwright/${process.env.RUNID}/results`,
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
	  timeout: 30000,
      use: { ...devices['Desktop Chrome'], 
		actionTimeout: 10000,
		video: { mode: 'on', size: { width: 640, height: 480 }},
		screenshot: 'on',
		trace: 'retain-on-failure',
	   },
    },
  ],
});