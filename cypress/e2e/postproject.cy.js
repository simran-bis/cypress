describe('post a project', () => {

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


    // it('check when user want to book a consultation with required details.', () => {

    //     cy.get(".expert").click()
    //     cy.wait(3000)
    //     cy.contains("span", "Book a consultation").click()
    //         // cy.get(".MuiFormControl-fullWidth").click()
    //     cy.wait(3000)
    //     cy.get(".MuiInputBase-root").click({ multiple: true })
    //     Cypress.Commands.add('getDropdownOptions', () => {
    //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //             timeout: 10000,
    //         });
    //     });
    //     cy.getDropdownOptions().contains('Precision Medicine').click();
    //     cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
    //     cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    //     cy.get('[value="Idea discussion"]').check()
    //     cy.wait(5000)
    //     cy.contains("span", "Next ").click()
    //     cy.get('[name="title"]').type("testing testing")
    //     cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
    //     cy.contains("span", "Next ").click()
    //     cy.get('[placeholder="Enter budget in $"]').type("200")
    //     cy.contains("span", "Within a week").click()
    //     cy.contains("span", "Next ").click()
    // })
    // it('check when user  book a consultation without select subcategory .', () => {
    //     cy.wait(3000)

    //     cy.get(".expert").click()
    //     cy.wait(3000)
    //     cy.contains("span", "Book a consultation").click()
    //         // cy.get(".MuiFormControl-fullWidth").click()
    //     cy.wait(3000)
    //     cy.get(".MuiInputBase-root").click({ multiple: true })
    //     Cypress.Commands.add('getDropdownOptions', () => {
    //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //             timeout: 10000,
    //         });
    //     });
    //     cy.getDropdownOptions().contains('Precision Medicine').click();
    //     cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
    //         // cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    //         // cy.get('[value="Idea discussion"]').check()
    //         // cy.wait(5000)
    //     cy.contains("span", "Next ").click()
    //         // cy.get('[name="title"]').type("testing testing")
    //         // cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
    //         // cy.contains("span", "Next ").click()
    //         // cy.get('[placeholder="Enter budget in $"]').type("200")
    //         // cy.contains("span", "Within a week").click()
    //         // cy.contains("span", "Next ").click()
    // })
    // it('check when user enter title less than required character.', () => {

    //     cy.get(".expert").click()
    //     cy.wait(3000)
    //     cy.contains("span", "Book a consultation").click()
    //         // cy.get(".MuiFormControl-fullWidth").click()
    //     cy.wait(3000)
    //     cy.get(".MuiInputBase-root").click({ multiple: true })
    //     Cypress.Commands.add('getDropdownOptions', () => {
    //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //             timeout: 10000,
    //         });
    //     });
    //     cy.getDropdownOptions().contains('Precision Medicine').click();
    //     cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
    //     cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    //     cy.get('[value="Idea discussion"]').check()
    //     cy.wait(5000)
    //     cy.contains("span", "Next ").click()
    //     cy.get('[name="title"]').type("test")
    //     cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")

    //     cy.contains("span", "Next ").click()

    // })
    it('check when user enter description less than required character.', () => {

        cy.get(".expert").click()
        cy.wait(3000)
        cy.contains("span", "Book a consultation").click()
            // cy.get(".MuiFormControl-fullWidth").click()
        cy.wait(3000)
        cy.get(".MuiInputBase-root").click({ multiple: true })
        Cypress.Commands.add('getDropdownOptions', () => {
            return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
                timeout: 10000,
            });
        });
        cy.getDropdownOptions().contains('Precision Medicine').click();
        cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
        cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[value="Idea discussion"]').check()
        cy.wait(5000)
        cy.contains("span", "Next ").click()
        cy.get('[name="title"]').type("new project")
        cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice The resources of a microservice  The resources of a microservice  The resources of a microservice The resources of a microservice The resources of a microservice The resources of a microservice The resources of a microservice The resources of a microservice The resources of a microservice  ")
        cy.wait(4000)
        const imagePath = 'download.jpg';
        cy.get('input[type="file"]').attachFile(imagePath)
        cy.contains("span", "Next ").click()

        cy.get('[placeholder="Enter budget in $"]').type("200")
        cy.contains("span", "Within a week").click()
        cy.contains("span", "Next ").click()
            // cy.wait(3000)
            // cy.contains('span', 'Post Project').click()

    })

    // it('check when user do not select hiring timeline', () => {
    //     cy.get(".expert").click()
    //     cy.wait(3000)
    //     cy.contains("span", "Book a consultation").click()
    //         // cy.get(".MuiFormControl-fullWidth").click()
    //     cy.wait(3000)
    //     cy.get(".MuiInputBase-root").click({ multiple: true })
    //     Cypress.Commands.add('getDropdownOptions', () => {
    //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //             timeout: 10000,
    //         });
    //     });
    //     cy.getDropdownOptions().contains('Precision Medicine').click();
    //     cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
    //     cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    //     cy.get('[value="Idea discussion"]').check()
    //     cy.wait(5000)
    //     cy.contains("span", "Next ").click()
    //     cy.get('[name="title"]').type("testing testing")
    //     cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
    //     cy.contains("span", "Next ").click()
    //     cy.get('[placeholder="Enter budget in $"]').type("200")
    //     cy.contains("span", "Next ").click()
    // })
    // it('check when user  select budget in negative value', () => {
    //     cy.get(".expert").click()
    //     cy.wait(3000)
    //     cy.contains("span", "Book a consultation").click()
    //         // cy.get(".MuiFormControl-fullWidth").click()
    //     cy.wait(3000)
    //     cy.get(".MuiInputBase-root").click({ multiple: true })
    //     Cypress.Commands.add('getDropdownOptions', () => {
    //         return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //             timeout: 10000,
    //         });
    //     });
    //     cy.getDropdownOptions().contains('Precision Medicine').click();
    //     cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
    //     cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    //     cy.get('[value="Idea discussion"]').check()
    //     cy.wait(5000)
    //     cy.contains("span", "Next ").click()
    //     cy.get('[name="title"]').type("testing testing")
    //     cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
    //     cy.contains("span", "Next ").click()
    //     cy.get('[placeholder="Enter budget in $"]').type("-200")
    //     cy.contains("span", "Within a week").click()
    //     cy.contains("span", "Next ").click()
    // })


})