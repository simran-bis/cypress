describe('post answer', () => {

    beforeEach(() => {
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


    it('check when user post a question without required details.', () => {
        cy.wait(8000)
        cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
        cy.wait(2000)

    })


    it('check when user wants to view question card and share.', () => {
        cy.wait(8000)
        cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
        cy.wait(2000)
        cy.contains("span", "Share").click()
        cy.wait(2000)
        cy.get(".MuiGrid-justify-content-xs-flex-end > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()

    })
    it('check when user wants to like question', () => {
        cy.wait(8000)
        cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
        cy.wait(2000)
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiToggleButton-label > .MuiSvgIcon-root > path").click()

    })
    it('check when user wants to dilike question', () => {
        cy.wait(8000)
        cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
        cy.wait(2000)
        cy.get(":nth-child(3) > .MuiButtonBase-root > .MuiToggleButton-label > .MuiSvgIcon-root > path").click()

    })
    it('check when user wants to back q/a card', () => {
        cy.wait(8000)
        cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
        cy.wait(2000)
        cy.contains("li", "Back to Deeptech Q&Aare").click()


    })

})