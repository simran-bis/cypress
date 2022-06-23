describe('forgotpassword', () => {
    it('when user forgot password', () => {
        cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1994")
        cy.contains("span", "Sign In").click()
        cy.wait(4000)
        cy.contains("a", "Forgot password?").click()
        cy.wait(2000)
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.contains("span", "Send recovery email").click()



    })
})