import * as fs from 'fs';
import { prisma } from './prisma';

export const storeParams = async (formData: FormData) => {
    const runID = formData.get('runID') || 'undefined';
    const params: any = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });
    console.log(params);
    await fs.promises.mkdir(`./static/runs/vitest/${runID}`, { recursive: true });
    await fs.promises.writeFile(`./static/runs/vitest/${runID}/params.json`, JSON.stringify(params));
}


export const storeResults = async (runID: string, testName: string) => {
    const results = JSON.parse(await fs.promises.readFile(`./static/runs/vitest/${runID}/results.json`, 'utf8'));
    // TODO: Store the results in the database.
    let failNote = '';
    const duration =  results.testResults[0].endTime - results.startTime;
    const dbResponse = await prisma.run.create({
        data: {
            id: runID,
            testName: testName,
            passCount: results.numPassedTests,
            failCount: results.numFailedTests,
            skipCount: results.numPendingTests,
            duration: duration,
            failNote: failNote,
            testRunner: 'Vitest',
        }
    });
    // TODO: Store the artifacts in bucket.
        // For this demo, we'll simple keep these files stored locally.
    // TODO: Email results link.
}