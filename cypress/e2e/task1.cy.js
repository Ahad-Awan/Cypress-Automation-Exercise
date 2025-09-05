import HomePage from './pages/HomePage'

describe('Task 1: Homepage Validation', () => {
	it('validates homepage loads and key elements are visible', () => {
		cy.request('/')
			.its('status')
			.should('eq', 200)

		const home = new HomePage()
		home.visit()
		home.assertLoaded()
		home.screenshot('homepage-loaded')
	})
})


