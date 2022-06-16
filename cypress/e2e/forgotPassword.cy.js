describe('forgotpassword', () => {
    it('insightMonk test', () => {
        cy.visit('https://community.insightmonk.com/discover')

        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get(".MuiGrid-root > .MuiTypography-root").click()
        cy.get(".MuiInputBase-input").type("bhalla.simran297@gmail.com")
        cy.get(".MuiButtonBase-root").click()
        cy.get("b").click()
    })
})