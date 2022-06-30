describe('global search', () => {

    beforeEach(() => {
        cy.viewport(1200, 1200)
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
    it('check when user enter nothing and press enter button.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').type('{enter}')
        cy.wait(8000)


    })

    it('check Typing  characters in the search box, it should show suggestions starting with the entered character.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').type('pre')
        cy.wait(8000)


    })
    it('when user want to search keyword and check result ', () => {

        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').type('precision medicine{enter}')

        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(2)").click()
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(3)").click()
        cy.wait(20000)

        cy.get(".MuiTabs-flexContainer > :nth-child(4)").click()
        cy.wait(10000)

    })
    it('check when user search keyword with any special character and press enter.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').clear()
        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').type('"deep tech themes"{enter}')
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(2)").click()
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(3)").click()
        cy.wait(20000)

        cy.get(".MuiTabs-flexContainer > :nth-child(4)").click()
        cy.wait(10000)


    })
    it('check when user add space before,after and between the search keyword and press enter.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').clear()
        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').type(' " deep tech themes "{enter}')
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(2)").click()
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(3)").click()
        cy.wait(20000)

        cy.get(".MuiTabs-flexContainer > :nth-child(4)").click()
        cy.wait(10000)

    })
    it('check when user search keyword with numeric value and press enter.', () => {
        cy.wait(3000)
        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').clear()
        cy.get('input[placeholder="Explore Deeptech! Sectors, Topics,  Reports, Experts"]').type('   waste  water 123 {enter}')
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(2)").click()
        cy.wait(20000)
        cy.get(".MuiTabs-flexContainer > :nth-child(3)").click()
        cy.wait(20000)

        cy.get(".MuiTabs-flexContainer > :nth-child(4)").click()
        cy.wait(10000)
            // cy.contains('span', 'Public Sources&A').click()

    })
})