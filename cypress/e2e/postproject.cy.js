describe('post a project', () => {

    before(() => {
        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
        cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
        cy.get(".MuiButtonBase-root").click()
        cy.visit('https://community.insightmonk.com/')
        cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })


    it('check when user ask a question without required details.', () => {
            cy.wait(4000)
            cy.get(".jss75 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path").click()
            cy.get(".expert").click()
            cy.wait(3000)
            cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiFab-label > .MuiSvgIcon-root").click()
            cy.get(".MuiGrid-direction-xs-column > :nth-child(1) > .MuiButton-root").click()
            cy.wait(3000)
            cy.log('--- Pick state by typing ---')
            cy.get(".MuiInputBase-root").click()
            Cypress.Commands.add('getDropdownOptions', () => {
                return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
                    timeout: 10000,
                });
            });
            cy.getDropdownOptions().contains('Precision Medicine').click();
            cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
            cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
            cy.get(".MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss473").click({ force: true })
            cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
            cy.get("#fullWidth").type("tetsing tseting")
            cy.get(":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root").type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
            cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click({ force: true })
            cy.get("#outlined-multiline-static").type("20")
            cy.get(".MuiGrid-container > :nth-child(2) > .MuiPaper-root > .MuiCardContent-root").click()
            cy.get(".MuiCardActions-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root").click()
                //go to back step
            cy.get(".MuiCardContent-root > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").click()
                //for post a project
                // cy.get(".MuiCardContent-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root")
        })
        // it('check when user do not select sub category', () => {
        //     cy.wait(3000)

    //     cy.get(".jss75 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path").click()
    //     cy.get(".expert").click()
    //     cy.wait(3000)

    // })



})