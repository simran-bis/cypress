describe('homepage_filter', () => {

    before(() => {
        cy.viewport(1200, 1000)

        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1234")
        cy.get(".MuiButtonBase-root").click()
        cy.visit('https://community.insightmonk.com/')

        cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })


    // it('check when user want to filter accepted answer.', () => {
    //     cy.wait(5000)
    //     cy.get('[type="checkbox"]').check('ACCEPTED_ANSWERS')

    //     //uncheck selected 
    //     cy.wait(5000)

    //     cy.get('[type="checkbox"]').uncheck('ACCEPTED_ANSWERS')

    // })
    it('check when user want to select topic and sector ', () => {
        cy.wait(5000)
        cy.get('[type="checkbox"]').check('ACCEPTED_ANSWERS')

        //uncheck selected 
        cy.wait(5000)
            //selected topic
        cy.get('[type="checkbox"]').check('Next Generation Sequencing')
        cy.wait(2000)
        cy.contains("a", "View All Filters").click()
        cy.wait(2000)
        cy.get('[type="checkbox"]').check('Space Tech')
        cy.contains("a", "View less Filters").click()

        //selected sector
        cy.get('[type="checkbox"]').check('Automotive')
        cy.get('[value="MOST_ANSWERED"]').check()

    })


})