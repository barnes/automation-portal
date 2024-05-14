import { expect, test } from '@playwright/test';

test('Page has expected title', async ({ page }) => {
	// Initialize Data.
	const data = {
		runID: process.env.runID || 'undefined',
		url: process.env.url || 'http://google.com',
		title: process.env.title || 'Google'
	}
	
	// Run the test.
	await page.goto(data.url);
	const title = await page.title();
	await page.screenshot({ path: `./static/runs/playwright/${data.runID}/screenshots/${data.title}.png` });
	await expect(title).toBe(data.title);
});
