// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Register Mochawesome reporter
import 'cypress-mochawesome-reporter/register'

// On test failure, Cypress automatically captures a screenshot due to config.
// No extra code is necessary, but we can add an afterEach to tag names if needed.
afterEach(function() {
	if (this.currentTest && this.currentTest.state === 'failed') {
		const name = (this.currentTest.titlePath && this.currentTest.titlePath().join(' -- ')) || this.currentTest.fullTitle()
		cy.screenshot(name, { capture: 'runner' })
	}
})