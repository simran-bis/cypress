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


    it('check when user want to check notification.', () => {
        cy.wait(6000)
        cy.get(":nth-child(3) > .MuiButtonBase-root").click()
        cy.wait(5000)
        cy.contains("span", "Click here to be an expert").click()

    })
    it('check when user want to choose membership plan.', () => {
        cy.wait(6000)
        cy.contains("span", "Monthly").click()
        cy.wait(6000)
        cy.contains("span", "Quaterly").click()
        cy.wait(6000)
        cy.contains("span", "Annual").click()


    })
    it('check when user want to choose quarterly membership plan as a gold user.', () => {
        cy.wait(6000)

        cy.contains("span", "Quaterly").click()
        cy.get(":nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > :nth-child(5) > .MuiButtonBase-root").click()
        cy.wait(1000)
        cy.contains("span", "Disagree").click()



    })


})