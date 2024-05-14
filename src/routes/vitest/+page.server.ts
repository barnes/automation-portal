/** @type {import('./$types').Actions} */
import { storeParams, storeResults } from '$lib/vitest-helpers.js';
import { runTest, formatParams } from '$lib/generic-helpers.js';

export const actions = {
	runTest: async ({request}) => {
        const formData = await request.formData();

        // Initialize Data with formatParams helper function.
        const params = formatParams(formData);

        // Store the params with storeParams helper function.
        await storeParams(formData);

        // Run the test with runTest helper function.
        await runTest(`${params} npx vitest run || exit 0`).then(()=> {
            storeResults(formData.get('runID') as string || 'undefined', formData.get('testTitle') as string || 'undefined');
        });

	}
};