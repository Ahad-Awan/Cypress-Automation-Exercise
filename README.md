# Cypress AutomationExercise - Task 1: Homepage Validation

This project automates homepage validation on `automationexercise.com` using Cypress with Page Object Model, fixtures, screenshots on failure, and Mochawesome HTML reports.

## Prerequisites
- Node.js 16+ and npm

## Install
```bash
npm install
```

## Run tests (headless + generate report)
```bash
npm test
```
- HTML report will be at `cypress/reports/mochawesome.html`
- Screenshots/videos at `cypress/screenshots` and `cypress/videos`

## Open Cypress (GUI)
```bash
npm run cy:open
```

## Project structure
- `cypress/e2e/pages/HomePage.js`: POM for homepage
- `cypress/e2e/spec.cy.js`: Homepage validation spec
- `cypress/fixtures/users.json`, `cypress/fixtures/products.json`: Test data
- `cypress/support/commands.js`: Custom commands (HTTP 200 check)
- `cypress/support/e2e.js`: Global hooks and reporter registration
- `cypress.config.js`: Cypress config with baseUrl and reporter

## What is validated
- Successful homepage response (HTTP 200)
- URL contains `automationexercise.com`
- Logo, navigation bar, main banner, and navigation menu are visible
- Screenshot of the loaded homepage

## Website under test
AutomationExercise: [`https://automationexercise.com`](https://automationexercise.com)

## Generate/Regenerate only the Mochawesome report
```bash
npm run report:merge && npm run report:generate
```

## CI note
Ensure the artifacts `cypress/reports`, `cypress/screenshots`, and `cypress/videos` are saved.

