import * as fs from 'fs';
import { prisma } from '$lib/prisma';


export const storeParams = async (formData: FormData) => {
    const runID = formData.get('runID') || 'undefined';
    const params: any = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });
    console.log(params);
    await fs.promises.mkdir(`./static/runs/playwright/${runID}`, { recursive: true });
    await fs.promises.writeFile(`./static/runs/playwright/${runID}/params.json`, JSON.stringify(params));
}


export const storeResults = async (runID: string, testName: string) => {
    const maResults = JSON.parse(await fs.promises.readFile(`./static/runs/playwright/${runID}/results/mochawesome.json`, 'utf8'));
    // TODO: Store the results in the database.
    let failNote = '';
    if(maResults.stats.failures > 0) {
        failNote = maResults.results[0].suites.find((suite: any) => suite.tests.find((test: any) => test.fail === true)).tests[0].err.message
    }
    const dbResponse = await prisma.run.create({
        data: {
            id: runID,
            testName: testName,
            passCount: maResults.stats.passes,
            failCount: maResults.stats.failures,
            skipCount: maResults.stats.pending,
            duration: maResults.stats.duration,
            failNote: failNote,
            testRunner: 'Playwright',
        }
    });
    // TODO: Store the artifacts in bucket.
        // For this demo, we'll simple keep these files stored locally.
    // TODO: Email results link.
}