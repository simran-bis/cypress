describe('my_project', () => {

    before(() => {
        cy.viewport(1200, 1000)

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


    it('when user want to check project details', () => {
        cy.get(".my-projects").click()
        cy.get(":nth-child(1) > :nth-child(1) > .MuiCard-root > .MuiCardContent-root > .MuiPaper-root > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.wait(8000)
        cy.get("#panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    })




})