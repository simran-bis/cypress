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



    it('check when user want to check my liberary and view saved reports of all documents', () => {
        cy.wait(6000)
            // cy.get('button').first().click()
        cy.get(".jss75 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get(".my-library").click()
        cy.contains('th', 'I Revenues')
            .parent('tr')
            .children('td')
            .find('button')
            .click()

        //for dropdown
        // cy.get("#demo-controlled-open-select").click()
        // cy.get("#demo-controlled-open-select").select('Public Resources')
        // cy.contains('Public Resources').click()



    })

    it('when user want to view saved report of public source', () => {
            cy.wait(6000)
            cy.get(".jss207 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
            cy.get(".my-library").click()
            cy.get("#demo-controlled-open-select").click()
            cy.contains('Public Resources').click()
            cy.contains('th', 'I Revenues')
                .parent('tr')
                .children('td')
                .find('button')
                .click()


        })
        // it('when user want to view saved report of bis content', () => {
        //     cy.wait(8000)
        //     cy.get(".jss207 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path").click({ force: true })
        //     cy.get(".my-library").click()
        //     cy.get("#demo-controlled-open-select").click()
        //     cy.contains('BIS Content').click()
        //     cy.contains('th', 'Report Pharmacogenomics Market')
        //         .parent('tr')
        //         .children('td')
        //         .find('button')
        //         .first().click()


    // })
    // it('when user want to view saved report of bis content', () => {
    //     cy.wait(8000)
    //     cy.get(".jss75 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click({ force: true })
    //     cy.get(".my-library").click()
    //     cy.get("#demo-controlled-open-select").click()
    //     cy.contains('BIS Content').click()
    //     cy.contains('th', 'Report Pharmacogenomics Market')
    //         .parent('tr')
    //         .children('td')
    //         .find('button')
    //         .first().click()


    // })

    // it('when user want to check transaction history', () => {
    //     cy.get(".jss75 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click({ force: true })
    //     cy.get(".my-library").click()
    //     cy.get("#wrapped-tab-TransactionsHistorytwo").click()
    // })



})