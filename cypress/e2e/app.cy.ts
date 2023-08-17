describe("Navigation", () => {
	it("should navigate to the about page", () => {
		// Start from the index page
		cy.visit("http://localhost:3000/");

		// Find a link with an href attribute containing "about" and click it
		cy.get('a[data-test-id*="plan-link"]').eq(0).click();

		// The new url should include "/about"
		// cy.url().should('eq', 'https://activityjapan.com/publish/plan/4008')
		// cy.url().should('include', '/4008')

		// The new page should contain an h1 with "About page"
		cy.get("h1").contains("Plan ID: 4008");
	});
	it("should navigate to the about page", () => {
		// Start from the index page
		cy.visit("http://localhost:3000/");

		// Find a link with an href attribute containing "about" and click it
		cy.get('a[data-test-id*="plan-link"]').eq(1).click();

		// The new url should include "/about"
		// cy.url().should('eq', 'https://activityjapan.com/publish/plan/4008')
		// cy.url().should('include', '/4008')

		// The new page should contain an h1 with "About page"
		cy.get("h1").contains("Plan ID: 25645");
	});
});
