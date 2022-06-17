describe('profile', () => {

    before(() => {
        cy.visit('https://community.insightmonk.com/discover')
        cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1234")
        cy.get(".MuiButtonBase-root").click()
        cy.visit('https://community.insightmonk.com/')

        cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })


    it('check when user want to check my profile.', () => {
        cy.wait(6000)
        cy.get(".MuiButton-label > .MuiAvatar-root").click()
        cy.wait(2000)
        cy.contains("span", "My Profile").click()


    })
    it("when user want to change password", () => {
            cy.wait(6000)
            cy.contains("span", "Change password").click()
            cy.get('input[name="oldPassword"]').type('bis@1234')
            cy.get('input[name="newPassWord"]').type('bis@123456')
            cy.get('input[name="confirmPassword"]').type('bis@123456')
            cy.wait(2000)
            cy.contains("span", "Cancel").click()


        })
        // it("when user want to change profile privacy", () => {
        //         cy.wait(6000)
        //         cy.contains("span", "Profile Privacy").click()
        //         cy.contains("span", "Anonymous").click()



    //     })
    it("when user want to edit profile", () => {
        cy.wait(6000)
        cy.get(".jss82 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path").click()
        cy.get(".home").click()
            // cy.get(".MuiButton-label > .MuiAvatar-root").click()
            // cy.wait(2000)
            // cy.contains("span", "Edit Profile").click()
    })


})