/** @type {import('./$types').Actions} */
import { storeParams, storeResults } from '$lib/cypress-helpers.js';
import { formatParams, runTest } from '$lib/generic-helpers.js';
import { exec } from 'child_process';
import util from 'node:util'
import * as fs from 'fs';

export const actions = {
	runTest: async ({request}) => {
        const formData = await request.formData();

        // Initialize Data with formatParams helper function.
        const params = formatParams(formData);

        // Store the params with storeParams helper function.
        await storeParams(formData);

        // Run the test with runTest helper function.
        await runTest(`${params} npx cypress run --spec tests/cypress/e2e/todo.cy.ts || exit 0`).then(()=> {
            storeResults(formData.get('runID') as string || 'undefined', formData.get('testTitle') as string || 'undefined');
        });


    


		// TODO register the user
	}
};