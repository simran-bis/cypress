describe('global search', () => {

    beforeEach(() => {
        cy.viewport(1200, 1200)
        cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1998")
        cy.contains("span", "Sign In").click()
        cy.wait(5000)
        cy.contains("button", "Skip").click()
    })
    it('when user want to search ', () => {

        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').type('precision medicine{enter}')

        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(2)").click()
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(3)").click()
        cy.wait(20000)

        cy.get(".MuiTabs-flexContainer > :nth-child(4)").click()
        cy.wait(10000)

    })
})