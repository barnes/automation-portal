/** @type {import('./$types').Actions} */
import { storeParams, storeResults } from '$lib/playwright-helpers.js';
import { formatParams, runTest } from '$lib/generic-helpers.js';

export const actions = {
	runTest: async ({request}) => {
        const formData = await request.formData();

        // Initialize Data with formatParams helper function.
        const params = formatParams(formData);

        // Store the params with storeParams helper function.
        await storeParams(formData);

        // Run the test with runTest helper function.
        await runTest(`${params} npx playwright test --project=chromium`).then(()=> {
            storeResults(formData.get('runID') as string || 'undefined', formData.get('testTitle') as string || 'undefined');
        });

	}
};