import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

const runID = process.env.runID || 'undefined';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/vitest/*.{test,spec}.{js,ts}'],
		reporters: ['html', 'json'],
		outputFile: {
			html: `./static/runs/vitest/${runID}/results.html`,
			json: `./static/runs/vitest/${runID}/results.json`
		} 
	}
});
