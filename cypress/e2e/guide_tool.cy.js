describe('guide_tool', () => {

    beforeEach(() => {
        cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1998")
        cy.contains("span", "Sign In").click()
        cy.wait(5000)

    })


    it('check when user follow guide tool.', () => {
        cy.wait(3000)
        cy.get(`[aria-label="Next"]`).click()
        cy.wait(2000)
        cy.get(`[aria-label="Next"]`).click()
        cy.wait(2000)
        cy.get(`[aria-label="Next"]`).click()
        cy.contains('button', 'Back').click()
        cy.wait(4000)
        cy.get(`[aria-label="Next"]`).click()
        cy.wait(2000)
        cy.get(`[aria-label="Next"]`).click()
        cy.wait(2000)
        cy.get(`[aria-label="Next"]`).click()


        cy.wait(2000)

    })
    it('check when user follow guide tool.', () => {
        cy.wait(3000)
        cy.contains("button", "Skip").click()

    })


})