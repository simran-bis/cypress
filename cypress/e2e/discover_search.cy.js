describe('discover search', () => {

    beforeEach(() => {
        cy.visit('https://demo.insightmonk.com/discover')
            // cy.clearCookies({ log: true })
            // cy.clearLocalStorage({ log: true })

        cy.wait(5000)

    })

    it('check when user enter nothing and press enter button.', () => {
            cy.wait(3000)
            cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').type('{enter}')
            cy.wait(8000)


        })
        //auto suggestion
    it('check Typing  characters in the search box, it should show suggestions starting with the entered character.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').type('pre')
        cy.wait(8000)


    })

    it('check when user search with exact keyword and press enter.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').type('precision medicine{enter}')
        cy.wait(8000)
        cy.contains('span', 'Reports').click()
        cy.wait(8000)
        cy.contains('span', 'Q&A').click()
        cy.wait(8000)

    })
    it('check when user want to view and share public sources.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').clear()
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').type('precision medicine{enter}')
        cy.wait(8000)
        cy.get("#long-button").click()
        cy.contains("li", "Share").click()
        cy.wait(3000)
        cy.get('.MuiGrid-justify-content-xs-flex-end > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
        cy.wait(3000)
        cy.contains('span', 'View').click()


    })
    it('check when user want to select any sector with exact keyword.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').clear()
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').type('precision digital health{enter}')
        cy.wait(8000)
        cy.get(".MuiSelect-root").click()
        cy.contains('li', 'Healthcare').click()
        cy.wait(3000)
        cy.contains('span', 'Reports').click()
        cy.wait(8000)
        cy.contains('span', 'Q&A').click()
        cy.wait(8000)
        cy.contains('span', 'Public Sources&A').click()

    })
    it('check when user search keyword with any special character and press enter.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').clear()
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').type('"precision medicine"{enter}')
        cy.wait(8000)
            // cy.get(".MuiSelect-root").click()
            // cy.contains('li', 'Healthcare').click()
        cy.wait(3000)
        cy.contains('span', 'Reports').click()
        cy.wait(8000)
        cy.contains('span', 'Q&A').click()
        cy.wait(8000)
            // cy.contains('span', 'Public Sources&A').click()

    })
    it('check when user add space before,after and between the search keyword and press enter.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').clear()
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').type('   waste  water {enter}')
        cy.wait(8000)
            // cy.get(".MuiSelect-root").click()
            // cy.contains('li', 'Healthcare').click()
        cy.wait(3000)
        cy.contains('span', 'Reports').click()
        cy.wait(8000)
        cy.contains('span', 'Q&A').click()
        cy.wait(8000)
            // cy.contains('span', 'Public Sources&A').click()

    })
    it('check when user search keyword with numeric value and press enter.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').clear()
        cy.get('input[placeholder="Find Answers for your Deeptech Questions"]').type('waste water 123{enter}')
        cy.wait(8000)
            // cy.get(".MuiSelect-root").click()
            // cy.contains('li', 'Healthcare').click()
        cy.wait(3000)
        cy.contains('span', 'Reports').click()
        cy.wait(8000)
        cy.contains('span', 'Q&A').click()
        cy.wait(8000)
            // cy.contains('span', 'Public Sources&A').click()

    })


})