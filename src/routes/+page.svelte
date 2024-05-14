<script lang="ts">
</script>

<article>
    <p>Allow your team to run tests as needed! Allow manual QA to automate repetitive tasks. 
        Let your business team quickly generate test users during UAT. Let engineers bypass long tasks during development.
    Make this tool your own. </p>
    <h2>Tech Stack</h2>
    <ul>
        <li>Sveltekit - Full Stack Framework</li>
        <li>Prisma / SQLite - Database for test results</li>
        <li>S3 - Test Artifact Storage</li>
        <li>Cypress, Playwright, Vitest, etc. - Test Runners</li>
    </ul>
    <h2>Deployment</h2>
    <p>Utilize Sveltekit to build a singular Node application for serving up the front and backend.
        Build a docker image, and deploy to a cloud provider of your choice.
        (We currently use AWS ECS, behind our VPS)
    </p>
    <h2>Expanding / Building a QA Portal</h2>
    <ul>
        <li>Develop internal MFA tool for sharing non-prod test user MFA Codes</li>
        <li>QA Dashboard to display most recent builds, regression test progress, etc.</li>
        <li>Store CI/CD Test Results in same S3 Bucket for rendering in this portal</li>
    </ul>
</article>
