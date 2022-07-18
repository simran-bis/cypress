describe('homepage_filter', () => {

    beforeEach(() => {
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

        // cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })


    it('check when user want to filter accepted answer.', () => {
            cy.wait(5000)
            cy.get(':nth-child(1) > #panel2bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
            cy.get('[type="checkbox"]').check('ACCEPTED_ANSWERS')

            //uncheck selected 
            cy.wait(5000)

            cy.get('[type="checkbox"]').uncheck('ACCEPTED_ANSWERS')
            cy.get(".MuiPaper-root.Mui-expanded > #panel2bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()

        })
        //  

    it('check when user want to select topic, sector and select most answered ', () => {
        cy.get(':nth-child(2) > #panel2bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(2000)

        cy.get('[type="checkbox"]').check('Precision Medicine')
        cy.wait(2000)

        cy.get('[type="checkbox"]').check('Space Tech')

        //selected sector
        cy.get(':nth-child(3) > #panel2bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(2000)
        cy.get('[type="checkbox"]').check('Automotive')
        cy.get(':nth-child(4) > #panel2bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(2000)
        cy.get('[value="MOST_ANSWERED"]').check()

    })


})