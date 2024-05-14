<script lang="ts">
  import type { PageData } from './$types';
    
    export let data: PageData;
    console.log(data);
</script>
<article>
  <header>
    <h1>Test Results</h1>
  </header>
  <table>
    <thead>
      <tr>
        <th scope="col">Run Number</th>
        <th scope="col">Test Name</th>
        <th scope="col">Pass Count</th>
        <th scope="col">Fail Count</th>
        <th scope="col">Duration</th>
        <th scope="col">Test Runner</th>
      </tr>
    </thead>
    <tbody>
      {#each data.runs as run}
        <tr>
          <th><a href={`/results/${run.id}`}>{run.runNumber}</a></th>
          <th><a href={`/results/${run.id}`}>{run.testName}</a></th>
          <td>{run.passCount}</td>
          <td>{run.failCount}</td>
          <td>{run.duration}</td>
          <td>{run.testRunner}</td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">Totals: </th>
        <td>{data.totalRuns}</td>
        <td>{data.totalPass}</td>
        <td>{data.totalFail}</td>
        <td>{(data.totalDuration/1000)} sec</td>
      </tr>
    </tfoot>
  </table>
</article>