describe('global search', () => {

    before(() => {
            cy.visit('https://community.insightmonk.com/discover')
            cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
            cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
            cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
            cy.get(".MuiButtonBase-root").click()
            cy.visit('https://community.insightmonk.com/')

            cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

        })
        // it('verify search result displayed should be relevent to search keyword', () => {
        //     cy.get(".MuiGrid-grid-xs-true > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").click()

    //     cy.get(".MuiInputBase-root").type('healthcare{enter}')
    //     cy.wait(10000)


    // })
    // it('verify When user start typing word in text box it should suggest words that matches typed keyword', () => {
    //     cy.get(".jss52 > .MuiGrid-grid-xs-true > .MuiGrid-container > :nth-child(1)").click()
    //     cy.get(".MuiInputBase-root").clear()
    //     cy.get(".MuiInputBase-root").type("pre")
    //     cy.wait(10000)
    // })
    it('verify that the user should be able to search  with special character  like *,%,#', () => {
        cy.get(".MuiGrid-grid-xs-true > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").click()

        cy.get(".MuiInputBase-root").type("precision medicine%")
        cy.get(".MuiGrid-grid-xs-2 > .MuiButtonBase-root").click()
        cy.wait(10000)



    })
    it('verify that the user should be able to search  with special character  like *,%,#', () => {
        cy.get(".MuiGrid-grid-xs-true > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").click()

        cy.get(".MuiInputBase-root").type("healthcare")
        cy.get(".MuiGrid-grid-xs-2 > .MuiButtonBase-root").click()
        cy.wait(10000)



    })


    // it('check when user ask a question without required details.', () => {
    //     cy.get('[style="margin-top: 6px; margin-left: 4px;"] > a').click()

    //     cy.get(".jss180 > .MuiGrid-root > .MuiButtonBase-root").click()
    // })
    // it('check when user ask a question without select topic field .', () => {
    //     cy.get(".jss205 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("abc")
    //     cy.get(".ql-editor").type("abc")

    //     cy.get(".jss214 > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root").type("abc")

    //     cy.get(".jss180 > .MuiGrid-root > .MuiButtonBase-root").click()
    // })

})






















// cy.get(".MuiGrid-grid-xs-true > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").clear()
// describe('login test', () => {
//     it('display error when the required field is empty', () => {
//         cy.visit('https://community.insightmonk.com/discover')
//         cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()

//         cy.get(".MuiButtonBase-root").click()
//     })
//     it('display error when the email is invalid', () => {
//         cy.visit('https://community.insightmonk.com/discover')
//         cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
//         cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran29@gmail.com")
//         cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
//         cy.get(".MuiButtonBase-root").click()
//     })
//     it('display error when the password is invalid', () => {
//         cy.visit('https://community.insightmonk.com/discover')
//         cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
//         cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
//         cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@124")
//         cy.get(".MuiButtonBase-root").click()

//     })
//     it('login successfully when required details correct', () => {
//         cy.visit('https://community.insightmonk.com/discover')
//         cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
//         cy.get("form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input").type("bhalla.simran297@gmail.com")
//         cy.get(".jss20 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input").type("bis@1234")
//         cy.get(".MuiButtonBase-root").click()

//     })
// })