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
        cy.wait(4000)
        cy.contains('span', 'Post Answer').click()
        cy.wait(4000)


    })
    it('check when user post a question with required details.', () => {
        cy.wait(8000)
        cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
        cy.wait(7000)
        cy.get(".ql-editor").type("testing")
        cy.get(".ql-editor").type('{selectall}')
        cy.wait(8000)
        cy.get(".ql-bold").click()
        cy.get('body').click(0, 0);
        cy.wait(8000)
        cy.get(".ql-editor").type('{selectall}')
        cy.wait(3000)
        cy.get(".ql-italic").click()
        cy.get('body').click(0, 0);
        cy.wait(8000)
        cy.get(".ql-editor").type('{selectall}')
        cy.wait(3000)
        cy.get(".ql-underline").click()
        cy.wait(8000)
            // const filepath = 'download.jpg'

        // cy.get('.ql-image').find('i').first().attachFile(filepath)










        // cy.contains('span', 'Post Answer').click()


    })



    // it('check when user wants to view question card and share.', () => {
    //     cy.wait(8000)
    //     cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
    //     cy.wait(2000)
    //     cy.contains("span", "Share").click()
    //     cy.wait(2000)
    //     cy.get(".MuiGrid-justify-content-xs-flex-end > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()

    // })
    // it('check when user wants to like question', () => {
    //     cy.wait(8000)
    //     cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
    //     cy.wait(2000)
    //     cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiToggleButton-label > .MuiSvgIcon-root > path").click()

    // })
    // it('check when user wants to dilike question', () => {
    //     cy.wait(8000)
    //     cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
    //     cy.wait(2000)
    //     cy.get(":nth-child(3) > .MuiButtonBase-root > .MuiToggleButton-label > .MuiSvgIcon-root > path").click()

    // })
    // it('check when user wants to back q/a card', () => {
    //     cy.wait(8000)
    //     cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
    //     cy.wait(2000)
    //     cy.contains("p", "Back to Deeptech Q&Aare").click()


    // })
    // it('check a user who post answer can accept answer', () => {
    //     cy.wait(8000)
    //     cy.get(".jss99 > .MuiLink-root > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > :nth-child(2) > :nth-child(1) > .MuiGrid-grid-xs-true").click()
    //     cy.wait(2000)
    //     cy.get(".jss253").click()


    // })

})