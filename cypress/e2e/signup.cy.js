describe('signup test', () => {
    it('insightMonk test', () => {
        cy.visit('https://community.insightmonk.com/discover')
        cy.wait(10000);
        cy.get(".MuiGrid-grid-xs-true > :nth-child(1) > :nth-child(1) > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
        cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("kamya bhalla")
        cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("kamya123@gmail.com")
        cy.get(".jss21 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("kamya123")
        cy.get(".jss22 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("kamya123")
        cy.get(".jss27").click()
        cy.get(".jss28 > .MuiButtonBase-root").click()
    })
})