describe('signup test', () => {
    it('when user enter all valid details for signup', () => {
        cy.visit('https://demo.insightmonk.com/discover')
        cy.wait(7000);
        cy.contains("span", "Sign Up").click()
        cy.contains("span", "Join as a user").click()
        cy.get('input[name="firstName"]').type("simran")
        cy.get('input[name="lastName"]').type("bhalla")
        cy.get('input[name="email"]').type("bhalla.simran297+127@gmail.com")
        cy.get('input[name="password"]').type("bis@1998")
        cy.get('input[name="confirmPassword"]').type("bis@1998")

        cy.get('[type="checkbox"]').first().check()
        cy.contains("span", "Sign Up").click()
    })

})