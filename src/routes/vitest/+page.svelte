<script lang="ts">
    let testTitle = 'Vitest Demo Test'
    import { enhance } from "$app/forms";

let testState = {
    testRunning: false,
    testComplete: false,
    runTime: 0,
}
let runID: string;
</script>

<article>
    <header>
        <h1>{testTitle}</h1>
        <p>This test will validate your two given numbers add to your expected sum. </p>
    </header>
    <form action="?/runTest" method="post" use:enhance={({ formData }) => {
        runID = formData.get('runID') as string;
        testState.testRunning = true;
        let delay = 1000;
        let interval = setInterval(async () => {
                testState.runTime = testState.runTime + delay;
        }, delay);

		return async () => {
            testState.testRunning = false;
            testState.testComplete = true
            clearInterval(interval);
		};
	}}>
        <label for="value1">Value #1</label>
        <input type="number" name="value1" placeholder=5 required>
        <label for="value2">Value #2</label>
        <input type="number" name="value2" placeholder=2 required>
        <label for="sum">Sum</label>
        <input type="number" name="sum" placeholder=7 required>
        <input type="text" name="testTitle" hidden value={testTitle} required>
        <input type="text" name="runID" hidden value="{crypto.randomUUID()}">
        <button type="submit">Run Test</button>
    </form>
    {#if testState.testRunning || testState.testComplete} 
    <article class="test-state">
        {#if testState.testRunning}
        <h2>Test is running...</h2>
        <h3>Run Time: {(testState.runTime/1000)}s</h3>
        {/if}
        
        {#if testState.testComplete}
        <h2>Test is complete!</h2>
        <a role="button" href="results/{runID}">View Results</a>
        {/if}
    </article>
    {/if}
</article>

<style>
    .test-state {
        background-color: var(--pico-primary-background);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    .test-state h2 {
        margin: 0;
    }
    .test-state h3 {
        margin: 0;
    }
    [role="button"] {
        background-color: var(--pico-color);
        color: var(--pico-background-color);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
    }
</style>