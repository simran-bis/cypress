describe('public sources', () => {

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


    it('check when user want to check ahare,download and add to liberary.', () => {
            cy.get(".report").click()
            cy.wait(6000)
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
        // it('check when user want to check reports by filter', () => {
        //     cy.get(".report").click()
        //     cy.wait(6000)

    //     cy.contains('span', 'Public Sources').click()
    // cy.wait(8000)
    //     //date range
    // cy.get(".MuiSelect-root").click()
    // cy.contains("li", "Last 2 Weeks").click()
    //     cy.wait(5000)
    //     cy.get(":nth-child(3) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    //     cy.get('[placeholder="Search"]').eq(0).type("Company Reports")
    //     cy.wait(2000)
    //     cy.get(".MuiIconButton-colorSecondary").first().click()
    //     cy.wait(2000)
    //     cy.get(":nth-child(4) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    //         // cy.get('[placeholder="Search"]').eq(1).type("North America")
    //         // Cypress.Commands.add('getDropdownOptions', () => {
    //         //     return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //         //         timeout: 10000,
    //         //     });
    //         // });
    //         // cy.getDropdownOptions().find(".MuiSvgIcon-root", ).click();

    //     // cy.wait(2000)


    // })
    it('check when user want to check share,download and add to liberary.', () => {
        cy.get(".report").click()
        cy.wait(6000)
        cy.contains('span', 'Public Sources').click()
        cy.wait(8000)
        cy.get(".MuiSelect-root").click()
        cy.contains("li", "Last 2 Weeks").click()
        cy.wait(10000)
        cy.get(":nth-child(4) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.wait(8000)
        cy.get('[placeholder="Search"]').eq(1).type("North America")

        cy.get('input[name="726440"]').click()
        cy.wait(6000)
        cy.get(":nth-child(5) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.wait(8000)
        cy.get('[placeholder="Search"]').eq(2).type("services")
        cy.get('input[name="726497"]').click()
        cy.wait(6000)
        cy.get(":nth-child(6) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.wait(8000)
        cy.get('[placeholder="Search"]').eq(3).type("Allianz")
        cy.get('input[name="12d5bb6baa99dd6cdef029475aa2ff22"]').click()
        cy.wait(6000)






    })


})