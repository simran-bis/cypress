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
        cy.contains("button", "Skip").click()


    })


    it('check when user want to check ahare,download and add to liberary.', () => {
        cy.get(".report").click()
        cy.contains('span', 'Public Sources').click()
        cy.wait(5000)
        cy.get("#long-button").click()
        cy.contains("li", "Add to Library").click()
        cy.wait(8000)
        cy.get('body').click(0, 0);
        cy.get("#long-button").click()
        cy.contains("li", "Share").click()
        cy.wait(3000)
        cy.get('.MuiGrid-justify-content-xs-flex-end > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
        cy.contains('span', 'View').first().click()

    })
    it('check when user want to check reports by filter', () => {
        cy.get(".report").click()
        cy.contains('span', 'Public Sources').click()
        cy.wait(8000)
            //date range
        cy.get(".MuiSelect-root").click()
        cy.contains("li", "Last 2 Weeks").click()
        cy.wait(5000)
        cy.get(":nth-child(3) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[placeholder="Search"]').eq(0).type("Company Reports")


    })


})