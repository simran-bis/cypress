describe('liberary', () => {

    beforeEach(() => {
        cy.viewport(1200, 1000)
        cy.visit(Cypress.env('url'))
            // cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1998")
        cy.contains("span", "Sign In").click()
        cy.wait(5000)
        cy.contains("button", "Skip").click()
    })



    it('check when user want to check  liberary and view saved reports of all documents', () => {
        cy.get(".my-library").click()
        cy.contains('th', 'I nternational I ntegration & I mpacts')
            .parent('tr')
            .children('td')
            .find('button')
            .click()
        cy.wait(5000)
        cy.contains("span", "close").click()
            //for dropdown
            // cy.get("#demo-controlled-open-select").click()
            // cy.wait(3000)
            // cy.contains('Public Resources').click()



    })
    it('when user want to view saved report of public source', () => {
        cy.wait(6000)

        cy.get(".my-library").click()
        cy.get("#demo-controlled-open-select").click()
        cy.contains('Public Resources').click()
        cy.wait(3000)
        cy.contains('th', 'I nternational I ntegration & I mpacts')
            .parent('tr')
            .children('td')
            .find('button')
            .click()
        cy.wait(5000)
        cy.contains("span", "close").click()
    })


    it('when user want to view saved report of bis content', () => {

        cy.get(".my-library").click()
        cy.get("#demo-controlled-open-select").click()
        cy.contains('BIS Content').click()
        cy.wait(3000)
        cy.contains('th', 'Report Pharmacogenomics Market')
            .parent('tr')
            .children('td')
            .find('button')
            .first().click()
        cy.wait(5000)
        cy.contains("span", "close").click()


    })


    it('when user want to check transaction history', () => {
        cy.get(".my-library").click()
        cy.contains("span", "Transactions History").click()
    })



})