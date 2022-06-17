describe('home page', () => {
    it('insightMonk test', () => {
        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
        cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
        cy.get(".MuiButtonBase-root").click()

        cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()
        cy.wait(10000);
        cy.get(".MuiGrid-grid-xs-true > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").click()
        cy.get(".MuiInputBase-root").type('healthcare{enter}')

        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(2)").click()
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(3)").click()
        cy.wait(20000)

        cy.get(".MuiTabs-flexContainer > :nth-child(4)").click()
        cy.wait(10000)

    })
})