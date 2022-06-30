describe('reports', () => {

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


    it('check when user want to check reports by date range.', () => {
        cy.wait(2000)
        cy.get(".report").click()
        cy.wait(2000)

        cy.get(".MuiSelect-root").click()
        cy.contains("li", "Last 2 years").click()
        cy.wait(5000)
            // cy.get(":nth-child(2) > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
            // cy.wait(6000)
            // cy.get('[type="checkbox"]').check("Agriculture and Food Tech")
            // cy.wait(7000)
            // cy.get(".MuiPaper-root.Mui-expanded > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
            // cy.get(":nth-child(3) > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
            // cy.contains("span", "Company Profile").click()
            // cy.wait(6000)
            // cy.contains("span", "View").first().click()
            // cy.wait(6000)
            // cy.contains("span", "close").click()
            // cy.contains("span", "Full Report").click()
            // cy.wait(8000)
            // cy.contains("span", "Public Sources").click()
            // cy.wait(8000)
            // cy.get(".MuiSelect-root").click()
            // cy.contains("li", "Last Month").click()
            // cy.get(":nth-child(3) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
            // cy.wait(6000)
            // cy.get('[placeholder="Search"]').eq(0).type("Company Reports")
            // cy.get('[type="checkbox"]').first().check()
            // cy.wait(6000)
            // cy.get(":nth-child(4) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
            // cy.wait(6000)
            // cy.get("#long-button").first().click()
            // cy.contains("li", "Share").click()
            // cy.wait(2000)
            // cy.get(".MuiGrid-justify-content-xs-flex-end > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
            // cy.wait(2000)
            // cy.get("#long-button").first().click()
            // cy.contains("li", "Add to Library").click()
            // cy.wait(5000)
            // cy.get('body').click(0, 0);
            // cy.contains("span", "View").click()
            // cy.wait("3000")
            // cy.get('body').click(0, 0);

        // cy.get("#panel1a-header").click()
        // cy.get('[placeholder="Search"]').eq(1).type("North America")
        // cy.wait(6000)

        //[@id="__next"]/div/div/div/div[3]/div/div[4]/div[2]/div/div/div/div/fieldset/div/label[1]/span[2]
        // cy.get(":nth-child(3) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()

        // cy.get('[placeholder="Search"]').eq(0).type("Investor presentation (674)")
        // cy.wait(8000)

        // cy.get('[type="checkbox"]').check("INVESTOR_PRESENTATION")
        // cy.wait(8000)

        // Cypress.Commands.add('getDropdownOptions', () => {
        //     return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
        //         timeout: 10000,
        //     });
        // });
        // cy.getDropdownOptions().contains('Precision Medicine').click();
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








    })

    it('check when user want to filter reports by sector and report types', () => {
        cy.get(".report").click()
        cy.wait(8000)
        cy.get(":nth-child(2) > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[type="checkbox"').check("Agriculture and Food Tech")
        cy.wait(6000)
        cy.get(":nth-child(3) > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[value="Sections"]').check()
    })

})