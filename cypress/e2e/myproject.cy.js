describe('my_project', () => {

    before(() => {
        cy.viewport(1200, 1000)

        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
        cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
        cy.get(".MuiButtonBase-root").click()
        cy.visit('https://community.insightmonk.com/')
        cy.wait(5000)
        cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })





    it('when user want to check project details', () => {
        cy.get('button').first().click({ force: true })
            // cy.get(".jss75 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click({ force: true })
        cy.get(".my-projects").click()
            // cy.get('MuiGrid-root MuiGrid-container').find('Typography').eq(1).click()
        cy.get(":nth-child(1) > :nth-child(1) > .MuiCard-root > .MuiCardContent-root > .MuiPaper-root > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.wait(8000)
        cy.get(":nth-child(1) > :nth-child(1) > .MuiCard-root > .MuiCardContent-root > .MuiPaper-root > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    })



})