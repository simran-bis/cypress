describe('ask a question', () => {

    before(() => {
        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
        cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
        cy.get(".MuiButtonBase-root").click()
        cy.visit('https://community.insightmonk.com/')

        cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })


    // it('check when user ask a question without required details.', () => {
    //     cy.get('[style="margin-top: 6px; margin-left: 4px;"] > a').click()
    //     cy.get(".jss180 > .MuiGrid-root > .MuiButtonBase-root").click()
    // })

    // it('check when user ask a question without select topic field .', () => {
    //     cy.get(".jss205 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("abc")
    //     cy.wait(3000);
    //     cy.get(".jss214 > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root").type("pre")
    //     cy.wait(3000);
    //     cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
    //     cy.get(".jss180 > .MuiGrid-root > .MuiButtonBase-root").click();
    // })

    // it('check when user ask a question without enter anything in body field .', () => {
    //     cy.get('[style="margin-top: 6px; margin-left: 4px;"] > a').click()
    //     cy.get(".jss200 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root").click()
    //     Cypress.Commands.add('getDropdownOptions', () => {
    //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //             timeout: 10000,
    //         });
    //     });
    //     cy.getDropdownOptions().contains('Precision Medicine').click();
    //     cy.get(".jss205 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("abc")
    //     cy.wait(3000);
    //     cy.get(".jss214 > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root").type("pre")
    //     cy.wait(3000);
    //     cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
    //     cy.get(".jss180 > .MuiGrid-root > .MuiButtonBase-root").click();
    // })
    it('check when user ask a question without enter anything in body field .', () => {
        cy.get('[style="margin-top: 6px; margin-left: 4px;"] > a').click()
        cy.get(".jss200 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root").click()
        Cypress.Commands.add('getDropdownOptions', () => {
            return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
                timeout: 10000,
            });
        });
        cy.getDropdownOptions().contains('Precision Medicine').click();
        cy.get(".jss205 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("abc")
        cy.wait(3000);
        cy.get(".ql-image > .fa").click()
        cy.get(".jss214 > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root").type("pre")
        cy.wait(3000);
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get(".jss180 > .MuiGrid-root > .MuiButtonBase-root").click();
    })

})