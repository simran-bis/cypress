describe('reports', () => {

    before(() => {
        cy.viewport(1200, 1000)

        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1234")
        cy.get(".MuiButtonBase-root").click()
        cy.visit('https://community.insightmonk.com/')
        cy.contains("button", "Skip").click()
            // cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })


    it('check when user want to check notification.', () => {
        cy.wait(2000)
        cy.get(".report").click()
        cy.get(".MuiSelect-root").click()
        cy.contains("li", "Last 2 years").click()
        cy.get('[type="checkbox"]').check("Agriculture and Food Tech")
        cy.contains("a", "View All Filters").click()
        cy.wait(5000)
        cy.contains("a", "View less Filters").click()
        cy.contains("span", "Company Profile").click()
        cy.wait(6000)
        cy.contains("span", "View").first().click()
        cy.wait(6000)
        cy.contains("span", "close").click()
        cy.contains("span", "Full Report").click()
        cy.wait(8000)
        cy.contains("span", "Public Sources").click()
        cy.wait(8000)
        cy.get(":nth-child(3) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[type="checkbox"]').check("Company Reports (860508)").click()
            // Cypress.Commands.add('getDropdownOptions', () => {
            //     return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
            //         timeout: 10000,
            //     });
            // });
            // cy.getDropdownOptions().contains('Precision Medicine').click();
        cy.wait(6000)
            // cy.contains("span", "View").first().click()
            // cy.contains('.MuiGrid-root', 'cypress').within(() => {
            //     cy.get('MuiSvgIcon-root').click() // 1st button is edit

        // })
        //more icon
        // cy.get('.jss373 > .jss375 > .MuiGrid-wrap-xs-nowrap > :nth-child(1) > .MuiGrid-spacing-xs-2 > .MuiGrid-grid-xs-true > [style="flex-wrap: initial;"] > [style="margin-top: -10px;"] > #long-button > .MuiIconButton-label > .MuiSvgIcon-root').click()
        //     // cy.get('svg.MuiSvgIcon-root').eq(1).click() //clicks the first svg icon
        // cy.contains("li", "Add to Library").click()
        // cy.wait(8000)
        // cy.contains("li", "Share").click()
        // cy.get('.MuiGrid-justify-content-xs-flex-end > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()

        cy.get(".MuiSelect-root").click()
        cy.contains("li", "Last Month").click()






    })


})