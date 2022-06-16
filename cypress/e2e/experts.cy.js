describe('experts', () => {

    before(() => {
        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
        cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
        cy.get(".MuiButtonBase-root").click()
        cy.visit('https://community.insightmonk.com/')
        cy.contains("button", "Skip").click()



    })






    it('when expert not found and user want to book a consultaion ', () => {
        cy.viewport(1200, 1200)

        cy.get('button').first().click({ force: true })
        cy.get(".expert").click()
        cy.wait(8000)
        cy.get('[type="checkbox"]').check('Precision Medicine')

        cy.contains("a", "View All Filters").click()
        cy.wait(2000)
        cy.get('[type="checkbox"]').check('Space Tech')
        cy.wait(5000)

        //click on next button to view more experts
        cy.contains("button", "Next ").click()
        cy.wait(4000)
        cy.contains("button", "Next ").click()
        cy.wait(4000)
        cy.contains("button", " Prev").click()
        cy.wait(4000)
        cy.contains("button", " Prev").click()
        cy.wait(4000)
        cy.get('[type="checkbox"]').check('Healthcare')
        cy.wait(4000)
        cy.get(".MuiSlider-thumb")
            .invoke("val", 600)
            .trigger("change")
            .click({ force: true })

        //if user want to uncheck checked topic
        cy.get('[type="checkbox"]').uncheck('Precision Medicine')
            //book a consultation
        cy.wait(2000)
        cy.get(".MuiGrid-root .MuiGrid-item").contains("b", "Click to Book a Consultation").click()

        cy.get(".MuiOutlinedInput-adornedEnd").click({ multiple: true })

        Cypress.Commands.add('getDropdownOptions', () => {
            return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
                timeout: 10000,
            });
        });
        cy.getDropdownOptions().contains('Space Tech').click();
        cy.wait(2000)
        cy.get(".MuiOutlinedInput-adornedEnd").click({ multiple: true })

        Cypress.Commands.add('getDropdownOptions', () => {
            return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
                timeout: 10000,
            });
        });
        cy.getDropdownOptions().contains('Precision Medicine').click();
        cy.wait(2000)

        cy.contains("button", "Next ").click()
        cy.wait(1000)
        cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.wait(2000)
        cy.get('[value="Market research"]').check()
        cy.wait(2000)
        cy.contains("button", "Next ").click()
        cy.get("#fullWidth").type("testing test")
        cy.get('[name="projectDescription"]').type("Need a regulatory writer to prepare 510(k) submission Need a regulatory writer to prepare 510(k) submission Need a regulatory writer to prepare 510(k) submission  ");
        cy.wait(6000)
        cy.contains("button", "Next ").click()
        cy.get("#outlined-multiline-static").type("20")
        cy.contains("span", "Urgently, within 1-2 days").click()
        cy.wait(6000)
        cy.contains("button", "Next ").click()

    })


    it('when user want to find expert  value', () => {
        cy.viewport(1200, 1200)
        cy.wait(3000)
        cy.log('created new user')

        // cy.get('button').first().click({ force: true })
        // cy.get(".expert").click()
        // cy.wait(3000)
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type("alix berton")
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        // cy.wait(5000)

        //     // cy.get('[type="checkbox"]').check('Space Tech')
        //     // cy.wait(5000)
        //     //     //view more filter
        // cy.contains("a", "View All Filters").click()
        // cy.wait(2000)
        // cy.get('[type="checkbox"]').check('Space Tech')
        // cy.wait(5000)

        //click on next button to view more experts
        // cy.contains("button", "Next ").click()
        // cy.wait(4000)
        // cy.contains("button", "Next ").click()



    })




})