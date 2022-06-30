describe('notification', () => {

        beforeEach(() => {

            cy.viewport(1000, 600)
            if (cy.viewport(1000, 600) === cy.viewport(1000, 600)) {
                cy.visit('https://demo.insightmonk.com/discover')
                cy.clearCookies({ log: true })
                cy.clearLocalStorage({ log: true })
                cy.contains("span", "Login").click()
                cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
                cy.get('input[name="password"]').type("bis@1998")
                cy.contains("span", "Sign In").click()
                cy.wait(5000)

            } else {
                cy.visit('https://demo.insightmonk.com/discover')
                cy.clearCookies({ log: true })
                cy.clearLocalStorage({ log: true })
                cy.contains("span", "Login").click()
                cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
                cy.get('input[name="password"]').type("bis@1998")
                cy.contains("span", "Sign In").click()
                cy.wait(5000)
                cy.contains("button", "Skip").click()

            }



        })


        it('check when user want to check notification.', () => {
            cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click()
            cy.wait(5000)
            cy.get('body').click(0, 0);
            // cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click()

        })
        it('check when notification is clickable.', () => {
            cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click()
            cy.wait(5000)
            cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiCardHeader-root').click()

        })
    }




)