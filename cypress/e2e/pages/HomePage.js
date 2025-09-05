export default class HomePage {
	constructor() {
		this.selectors = {
			logo: 'img[alt="Website for automation practice"]',
			navbar: 'header#header',
			mainBanner: '.carousel-inner',
			navMenu: 'ul.nav.navbar-nav'
		}
	}

	visit() {
		cy.visit('/')
	}

	assertLoaded() {
		cy.url().should('include', '/')
		cy.get(this.selectors.logo).should('be.visible')
		cy.get(this.selectors.navbar).should('be.visible')
		cy.get(this.selectors.mainBanner).should('be.visible')
		cy.get(this.selectors.navMenu).should('be.visible')
	}

	screenshot(name = 'homepage') {
		cy.screenshot(name)
	}
}


