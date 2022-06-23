describe('ask a question', () => {

    before(() => {
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


    it('check membership plan when user already  an expert', () => {
        cy.wait(6000)
        cy.get(".MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path").click()
        cy.wait(5000)
        cy.get('.MuiButton-containedPrimary').then(($body) => {
            if ($body.find('Click here to be an expert').is(':visible')) {
                cy.log('A row  exists')

                cy.contains("span", "Click here to be an expert").click()
            } else {
                cy.log('A row doesnt exists')
            }
        });
        cy.contains("span", "Quaterly")
        cy.contains("span", "Annual")
    })
    it('when user want to check membership plan and  be an expert.', () => {
        cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297+128@gmail.com")
        cy.get('input[name="password"]').type("simran123")
        cy.contains("span", "Sign In").click()
        cy.wait(5000)
        cy.contains("button", "Skip").click()
        cy.wait(6000)
        cy.get(".MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path").click()
        cy.wait(5000)
        cy.contains("span", "Quaterly")
        cy.contains("span", "Annual")
        cy.wait(2000)
        cy.contains("span", "Click here to be an expert").click()

    })
    it('when user want to apply any membership plan', () => {
        cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1998")
        cy.contains("span", "Sign In").click()
        cy.wait(5000)
        cy.contains("button", "Skip").click()
        cy.wait(6000)
        cy.get(".MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path").click()
        cy.wait(5000)
        cy.contains("span", "Quaterly").click()
        cy.wait(2000)
        cy.contains("span", "Annual").click()
        cy.wait(2000)
        cy.contains("span", "Get Started").first().click()
        cy.wait(2000)
        cy.contains("button", "Disagree").click()
        cy.wait(2000)
        cy.contains("span", "Quaterly").click()
        cy.get(":nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > :nth-child(5) > .MuiButtonBase-root").click()
        cy.wait(2000)
        cy.contains("button", "Disagree").click()



    })





})