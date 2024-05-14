import type { PageServerLoad } from './$types';
import { prisma } from '$lib/prisma';

export const load = (async () => {
    const runs = await prisma.run.findMany();
    const totalRuns = runs.length;
    const totalDuration = runs.reduce((acc, run) => acc + run.duration, 0);
    const totalPass = runs.reduce((acc, run) => acc + run.passCount, 0);
    const totalFail = runs.reduce((acc, run) => acc + run.failCount, 0);

    return { runs, totalRuns, totalDuration, totalPass, totalFail};
}) satisfies PageServerLoad;