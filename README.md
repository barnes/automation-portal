# On-Demand Test Execution Portal
## A Boilerplate Repo by Ryan Barnes for TESTINGMIND Raleigh 2024.

# Why? 
- Allow for full team (technical and non-technical) to execute tests on demand.
- Free up manual testing capacity by automating tedious tasks.
- Speed up engineering by taking care of development dependencies. 
- Serve as a 'QA Homebase' for global QA reporting, regression status, pass/fail rates, frequent failures, etc.
- On-boarding and training tool, cross collaboration between engineers, testers, devops. 
- Use as a tool for testing new packages and tools prior to use in production applications


# Installation
- ```npm install```
- Rename .env.example to .env.
- Generate Prisma types.
    - ```npx prisma generate```


# Running The Demo Application
``` npm run dev ```

# Directory Structure
- /src/lib
    - Sveltekit components, common functions, etc.
- /src/routes
    - Directory based routing for Sveltekit pages.
- /tests/*/
    - Tests for each test runner. Small demo tests included in this repo.s
- root
    - Config files for test runners, vite, Sveltekit, etc.

# Expanding This
- Store test results in S3 bucket. 
- Containerize and deploy to service like AWS ECS.
- Sync tests from main application repos, Git sub-modules, S3 bucket storage for tests, etc.
- Streamline the process of adding tests with scripting to generate Sveltekit frontends and backend.
- Build a testing dashboard to report most recent application builds, test results, pass/fail rates, etc.
- Add in additional whole team tools, for example, a global MFA tool for shared non-production test users. 
