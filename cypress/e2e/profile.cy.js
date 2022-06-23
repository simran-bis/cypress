describe('profile', () => {

    beforeEach(() => {
        cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1998")
        cy.contains("span", "Sign In").click()
        cy.contains("button", "Skip").click()
        cy.wait(5000)

    })


    it('check when user want to check my profile and change password.', () => {
        cy.wait(6000)
        cy.get(".MuiButton-label > .MuiAvatar-root").click()
        cy.wait(2000)
        cy.contains("span", "My Profile").click()
        cy.wait(6000)
        cy.contains("span", "Change password").click()
        cy.get('input[name="oldPassword"]').type('bis@1234')
        cy.get('input[name="newPassWord"]').type('bis@123456')
        cy.get('input[name="confirmPassword"]').type('bis@123456')
        cy.wait(2000)
        cy.contains("span", "Cancel").click()


    })


    it("when user want to edit profile", () => {
        cy.wait(3000)
        cy.get(".MuiButton-label > .MuiAvatar-root").click()
        cy.wait(2000)
        cy.contains("span", "Edit Profile").click()
        cy.wait(5000)
        const input = cy.get('input[value="+91"]')
        const flag = cy.get(".selected-flag")
        if (input === "" && flag === "") {
            cy.log("blank")
            cy.get(".arrow").click()
            cy.contains("span", "+91").click()
            cy.get('input[value="+91"]').type('8920669876')
            cy.wait(2000)
        }

        cy.contains("span", "Save")



    })


})