describe('post answer', () => {

    before(() => {
        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
        cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
        cy.get(".MuiButtonBase-root").click()
        cy.visit('https://community.insightmonk.com/')

        cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })


    // it('check when user want to follow topic', () => {
    //         cy.wait(4000)
    //         cy.get(".jss75 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path").click()
    //         cy.get(".topic").click()
    //         cy.wait(8000)
    //         cy.get(":nth-child(1) > .jss222 > .MuiPaper-root > :nth-child(2) > .MuiCardActions-root > .MuiGrid-container > .MuiBox-root > .MuiGrid-root > .jss225").click()
    //         cy.wait(8000)
    //         cy.go('back')
    //         cy.contains('button', 'Follow').first().click()
    //             // cy.get(':nth-child(1) > .jss76 > .MuiPaper-root > :nth-child(2) > .MuiCardActions-root > .MuiGrid-container > [style="margin: 6px;"] > .MuiButtonBase-root > .MuiButton-label').click()
    //             //for navigation
    //         cy.get(".jss49 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
    //         cy.get(".home").click()
    //     })
    //second test case
    it('check when user want to unfollow topic', () => {
        cy.wait(8000)
        cy.get(".jss75 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get(".topic").click()
        cy.contains('button', 'Unfollow').first().click()

        cy.wait(8000)

        cy.wait(8000)
        cy.go('back')

    })



})