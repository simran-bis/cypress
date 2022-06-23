describe('request for consultation', () => {

    beforeEach(() => {
        cy.viewport(1200, 1000)

        cy.visit('https://demo.insightmonk.com/discover')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage({ log: true })
        cy.contains("span", "Login").click()
        cy.get('input[name="email"]').type("bhalla.simran297@gmail.com")
        cy.get('input[name="password"]').type("bis@1998")
        cy.contains("span", "Sign In").click()
        cy.wait(5000)
        cy.contains("button", "Skip").click()

        // cy.get('[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > div > button').click()

    })


    it('check when user want to request a consultion to expert.', () => {
        cy.wait(2000)
        cy.get(".expert").click()
        cy.get('[placeholder="Find Experts"]').type('sonu yadav')
        cy.wait(8000)
        cy.get(".MuiGrid-justify-content-xs-center").contains("h6", "Sonu").click()
        cy.wait(5000)
        cy.contains("span", "Request a consultation").click()
        cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[value="Idea discussion"]').check()
        cy.wait(5000)
        cy.contains("span", "Next ").click()
        cy.get('[name="title"]').type("testing testing")
        cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
        cy.contains("span", "Next ").click()
        cy.contains("span", "Within a week").click()
        cy.contains("span", "Next ").click()

    })
    it('check when user enter title less than required characters', () => {
        cy.wait(2000)

        cy.get(".expert").click()
        cy.get('[placeholder="Find Experts"]').type('sonu yadav')
        cy.wait(8000)
        cy.get(".MuiGrid-justify-content-xs-center").contains("h6", "Sonu").click()
        cy.wait(5000)
        cy.contains("span", "Request a consultation").click()
        cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[value="Idea discussion"]').check()
        cy.wait(5000)
        cy.contains("span", "Next ").click()
        cy.get('[name="title"]').type("test")
        cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
        cy.contains("span", "Next ").click()
        cy.wait(5000)
            // cy.contains("span", "Within a week").click()
            // cy.contains("span", "Next ").click()
    })
    it('check when user do not select hiring timeline', () => {
        cy.wait(2000)

        cy.get(".expert").click()
        cy.get('[placeholder="Find Experts"]').type('sonu yadav')
        cy.wait(8000)
        cy.get(".MuiGrid-justify-content-xs-center").contains("h6", "Sonu").click()
        cy.wait(5000)
        cy.contains("span", "Request a consultation").click()
        cy.get(":nth-child(1) > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root").click()
        cy.get('[value="Idea discussion"]').check()
        cy.wait(5000)
        cy.contains("span", "Next ").click()
        cy.get('[name="title"]').type("testing testing")
        cy.get('[placeholder="Enter project Description"]').type("The resources of a microservice based applications can be manipulated in several ways. It is possible to create, update, delete them, and do other operations as well.")
        cy.contains("span", "Next ").click()
        cy.wait(5000)
        cy.contains("span", "Next ").click()




    })


})