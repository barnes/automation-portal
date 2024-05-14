import { exec } from 'child_process';
import util from 'node:util';
import { prisma } from './prisma';

export const runTest = async (runCommand: string) => {
    const { stdout, stderr } = await util.promisify(exec)(`${runCommand} || exit 0`);
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
    return { stdout, stderr, testComplete: true}
}

export const formatParams = (formData: FormData) => {
    let params = '';
    formData.forEach((value, key) => {
        params = params + `${key}='${value}' `;
    });
    console.log(params);
    return params;
}

export const getStatus = async (runID: string) => {
    const db = await prisma.run.findUnique({
        where: {
            id: runID
        }
    });
    if(db){
        return {completed: true};
    } else {
        return {completed: false};
    }
};