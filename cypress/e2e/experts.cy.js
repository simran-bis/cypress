describe('experts', () => {

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

    it('check autosuggest when user want to search an expert', () => {
        cy.get(".expert").click()
        cy.wait(10000)
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type("sonu yadav")
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
            // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
            // cy.get(".MuiBox-root > .MuiInputBase-root > .MuiInputBase-input").type('{backspace}')
        cy.wait(5000)
        cy.contains("span", "Next ").click()
        cy.wait(2000)
        cy.contains("span", "Next ").click()


    })

    it('check when user search expert by fee filter', () => {
        cy.get(".expert").click()
        cy.wait(10000)
        cy.get(".MuiSlider-thumb")
            // .invoke("val", 200)
            .invoke("attr", "style", "left: 20%;")
            .invoke("attr", "aria-valuenow", "600")
            .trigger("change")
            .click({ force: true })



    })

    it('when user want to find expert with given filter ', () => {

        cy.get(".expert").click()
        cy.wait(8000)
        cy.get(":nth-child(1) > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[type="checkbox"]').check('Precision Medicine')
        cy.wait(2000)
        cy.get('[type="checkbox"]').check('Space Tech')
        cy.get(":nth-child(2) > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.wait(2000)
        cy.get('[type="checkbox"]').check('Healthcare')
        cy.get(":nth-child(3) > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.wait(2000)
        cy.get('[type="checkbox"]').check('United States')
        cy.get(".MuiPaper-root.Mui-expanded > #panel1bh-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()

    })

    it('check when user want to request for a consultation with searched expert ', () => {
        cy.get(".expert").click()
        cy.get('[placeholder="Find Experts"]').type('Sonu yadav')
        cy.wait(8000)
        cy.get(".MuiGrid-justify-content-xs-center").contains("h6", "Sonu").click()
        cy.wait(5000)
        cy.contains("span", "Request a consultation").click()
        cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[value="Idea discussion"]').check()
        cy.wait(5000)
        cy.contains("span", "Next ").click()
        cy.get('[name="title"]').type("testing testing")
        cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
        cy.contains("span", "Next ").click()
        cy.contains("span", "Within a week").click()
        cy.contains("span", "Next ").click()

    })
    it('check when expert not found and user want to put a project for consultation', () => {
        cy.get(".expert").click()
        cy.get('[placeholder="Find Experts"]').type('Rohan yadav')
        cy.wait(8000)
        cy.contains("b", "Click to Book a Consultation").click()
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
        cy.get('[name="title"]').type("testing testing")
        cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
        cy.contains("span", "Next ").click()
        cy.get('[placeholder="Enter budget in $"]').type("200")
        cy.contains("span", "Within a week").click()
        cy.contains("span", "Next ").click()
    })





})