describe('topics', () => {

    beforeEach(() => {
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


    it('check when user want to click on total questions link', () => {

        cy.get(".topic").click()
        cy.wait(8000)
        cy.contains('a', 'Questions').click()
        cy.wait(8000)



    })
    it('check when user want to click on total experts link', () => {

        cy.get(".topic").click()
        cy.wait(8000)
        cy.contains('a', 'Experts').click()
        cy.wait(8000)
            // cy.go('back')

    })
    it('check when user want to follow topic', () => {

        cy.get(".topic").click()
        cy.wait(8000)
        cy.contains('span', 'Follow').first().click()


    })
    it('check when user want to unfollow  followed topic', () => {

        cy.get(".topic").click()
        cy.wait(8000)
        cy.contains('span', 'Unfollow').first().click()


    })



})