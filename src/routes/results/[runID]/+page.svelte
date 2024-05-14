<script lang="ts">
    import { base } from '$app/paths';
    import type { PageData } from './$types';
    
    export let data: PageData;
    console.log(data);
    const params = Object.keys(data.runParams);
    console.log(params);
</script>

{#if data.run}
    <article>
        <header>
            <h1>Test Results for Run # {data.run.runNumber}</h1>
        </header>
        <h2>Params:</h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">Param</th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
                {#each params as param}
                    <tr>
                        <th>{param}</th>
                        <td>{data.runParams[param]}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <h2>Stats: </h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">Test Name</th>
                    <th scope="col">Pass Count</th>
                    <th scope="col">Fail Count</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Test Runner</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{data.run.testName}</th>
                    <td>{data.run.passCount}</td>
                    <td>{data.run.failCount}</td>
                    <td>{data.run.duration}</td>
                    <td>{data.run.testRunner}</td>
                </tr>
            </tbody>
        </table>
        <h2>Artifacts:</h2>
        {#if data.run.testRunner === 'Vitest'}
            <a role="button" href={`${base}/runs/vitest/${data.run.id}/results.html`} target="_blank">Open report in new tab</a>

            <iframe style="margin-top: 1rem" src={`${base}/runs/vitest/${data.run.id}/results.html`} width="100%" height="600px" title="vitest HTML report"></iframe>
        {/if}
        {#if data.run.testRunner === 'Playwright'}
            <a role="button" href={`${base}/runs/playwright/${data.run.id}/html/index.html`} target="_blank">Open report in new tab</a>
            {#if data.screenshots && data.screenshots.length > 0}
            <h3>Screenshots</h3>
                {#each data.screenshots as screenshot, index}
                    <img src={`${base}/runs/playwright/${data.run.id}/html/data/${screenshot}`} alt={`Screenshot ${index}`}>
                {/each}
            {/if}
            {#if data.video && data.video.length > 0}
                <h3>Video</h3>
                {#each data.video as video, index}
                <video controls>
                    <source src={`${base}/runs/playwright/${data.run.id}/html/data/${video}`} type="video/webm">
                    <track kind="captions" />
                    Your browser does not support the video tag.
                </video>
                {/each}
            {/if}
        {/if}
        {#if data.run.testRunner === 'Cypress'}
            <a role="button" href={`${base}/runs/cypress/${data.run.id}/mochawesome.html`} target="_blank">Open report in new tab</a>
            {#if data.screenshots && data.screenshots.length > 0}
            <h3>Screenshots</h3>
                {#each data.screenshots as screenshot, index}
                    <img src={`${base}/runs/cypress/${data.run.id}/screenshots/${data.fileName}/${screenshot}`} alt={`Screenshot ${index}`}>
                {/each}
            {/if}
            {#if data.video && data.video.length > 0}
                <h3>Video</h3>
                {#each data.video as video, index}
                <video controls>
                    <source src={`${base}/runs/cypress/${data.run.id}/videos/${video}`} type="video/mp4">
                    <track kind="captions" />
                    Your browser does not support the video tag.
                </video>
                {/each}
            {/if}
        {/if}
    </article>
{:else}
    <h1>Error getting run data</h1>
{/if}

<style>
    
</style>