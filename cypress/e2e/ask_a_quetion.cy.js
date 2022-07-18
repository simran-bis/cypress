describe('ask a question', () => {

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
    })


    // // it('check when user ask a question without required details.', () => {
    // //     cy.contains("span", "Ask a Question").click()
    // //     cy.contains("span", "Post Question").click()
    // // })

    // it('check when user ask a question without select topic field .', () => {
    //     cy.contains("span", "Ask a Question").click()
    //     cy.get('[placeholder="Enter title"]').type('Precision Medicine')
    //     cy.wait(8000);
    //     cy.get('.ql-editor').type("Testing message")
    //     cy.get('[placeholder="Enter a value"]').type('Precision Medicine')

    //     Cypress.Commands.add('getDropdownOptions', () => {
    //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //             timeout: 10000,
    //         });
    //     });
    //     cy.getDropdownOptions().contains('Precision medicine').click();
    //     // cy.contains("span", "Post Question").click()


    // })

    // // it('check when user ask a question without enter anything in body field .', () => {
    // //     cy.contains("span", "Ask a Question").click()
    // //     cy.wait(8000);

    // //     cy.get(".MuiOutlinedInput-inputAdornedEnd").eq(1).click()
    // //     cy.wait(8000);
    // //     Cypress.Commands.add('getDropdownOptions', () => {
    // //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    // //             timeout: 10000,
    // //         });
    // //     });
    // //     cy.getDropdownOptions().contains('Digital Health').click();

    // //     cy.get('[placeholder="Enter title"]').type('Digital Health')
    // //     cy.wait(3000);
    // //     // cy.get(".ql-editor").type("Testing message")
    // //     cy.get('[placeholder="Enter a value"]').type('Precision Medicine')

    // //     Cypress.Commands.add('getDropdownOptions', () => {
    // //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    // //             timeout: 10000,
    // //         });
    // //     });
    // //     cy.getDropdownOptions().contains('Precision medicine').click();



    // // })




})