import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';
import * as fs from 'fs';

export const load = (async ({ params }) => {
    // Get the run ID from the URL
    const runID = params.runID;

    // Get the run from the database
    const run = await prisma.run.findUnique({
        where: {
            id: runID
        }
    });

    if(run){
        if(run.testRunner === 'Playwright') {
            // Get the params and results JSON
            const runParams = JSON.parse(await fs.promises.readFile(`./static/runs/playwright/${runID}/params.json`, 'utf8'));
            const result = JSON.parse(await fs.promises.readFile(`./static/runs/playwright/${runID}/results/mochawesome.json`, 'utf8'));
            
            // Get the screenshots and video files
            let screenshots: string[] = [];
            let video: string[] = [];
            const data = await fs.promises.readdir(`./static/runs/playwright/${runID}/html/data`);
            if(fs.existsSync(`./static/runs/playwright/${runID}/screenshots/`)) {
                screenshots = data.filter((file) => file.endsWith('.png'));
            } 
            if(fs.existsSync(`./static/runs/playwright/${runID}/html/data`)) {
                video = data.filter((file) => file.endsWith('.webm'));
            } 
            return { run, runParams, result, screenshots, video };
        } else if(run.testRunner === 'Vitest'){
            // Get the params and results JSON
            const runParams = JSON.parse(await fs.promises.readFile(`./static/runs/vitest/${runID}/params.json`, 'utf8'));
            const result = JSON.parse(await fs.promises.readFile(`./static/runs/vitest/${runID}/results.json`, 'utf8'));
            return { run, runParams, result };
        } else if(run.testRunner === 'Cypress'){
            // Get the params and results JSON
            const runParams = JSON.parse(await fs.promises.readFile(`./static/runs/cypress/${runID}/params.json`, 'utf8'));
            const result = JSON.parse(await fs.promises.readFile(`./static/runs/cypress/${runID}/mochawesome.json`, 'utf8'));
            let screenshots: string[] = [];
            let video: string[] = [];
            const fileName = result.results[0].file.split('/')[result.results[0].file.split('/').length-1];
            console.log(fileName);
            if(fs.existsSync(`./static/runs/cypress/${runID}/videos`)) {
                video = fs.readdirSync(`./static/runs/cypress/${runID}/videos`);
            } 
            if(fs.existsSync(`./static/runs/cypress/${runID}/screenshots/${fileName}`)) {
                screenshots = fs.readdirSync(`./static/runs/cypress/${runID}/screenshots/${fileName}/`);
            } 
            return { run, runParams, result, fileName, screenshots, video };
        }
    } else {
        return {
            status: 404,
            error: 'Run not found'
        }
    }
}) satisfies PageServerLoad;