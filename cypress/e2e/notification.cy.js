describe('ask a question', () => {

    before(() => {
        cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1998")
        cy.contains("span", "Sign In").click()
        cy.wait(5000)

    })


    it('check when user want to check notification.', () => {
        cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click()
        cy.wait(5000)
        cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click()

    })


})