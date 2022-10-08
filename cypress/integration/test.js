/// <reference types= "cypress" />

describe("Quales Course Management Test Suite", () => {

    //Here is the block where both test case description and test scripts are written
    it("Validate that user can navigate the Quales management App successfully", () => {

        //Here is where our cypress scripts are written

        // Visiting the quales app url 
        cy.visit("http://tawdry-rule.surge.sh")
        cy.contains('Training')
            .should("be.visible")

        cy.contains('Courses')
            .should("be.visible")

        cy.contains('Contact Us')
            .should("be.visible")
    });
    it("Validate that user can login successfully with correct details", () => {

        cy.visit("http://tawdry-rule.surge.sh")
        cy.get('.css-48p1y4 > .MuiButton-root')
            .click()

        cy.get('[data-testid=EmailAddress]')
            .type("ayp@mail.com")

        cy.get('[data-testid=Password]')
            .type("pass1234")

        cy.get('.MuiButton-contained')
            .click()

        cy.get('.Toastify__toast-body > :nth-child(2)')
            .should("be.visible")

        cy.url()
            .should("contains", "/courses")

    });
    it("Validate that user cannot login successfully with wrong details", () => {

        cy.visit("http://tawdry-rule.surge.sh")
        cy.get('.css-48p1y4 > .MuiButton-root')
            .click()

        cy.get('[data-testid=EmailAddress]')
            .type("xx@mail.com")

        cy.get('[data-testid=Password]')
            .type("pass1234")

        cy.get('.MuiButton-contained')
            .click()

        cy.contains('Invalid Login Credential')
            .should("be.visible")
    });


    /* it("Validate that user can create a course", () => {

            cy.visit("http://tawdry-rule.surge.sh")
            cy.get('.css-48p1y4 > .MuiButton-root')
                .click()

            cy.get('[data-testid=EmailAddress]')
                .type("ayp@mail.com")

            cy.get('[data-testid=Password]')
                .type("pass1234")

            cy.get('.MuiButton-contained')
                .click()

            cy.url()
                .should("contains", "/courses")

            cy.get('.MuiGrid-root > .MuiButton-root')
                .click()

            cy.get('[data-testid="Title*"]')
                .type("Product Management")

            cy.get('[data-testid="Description*"]')
                .type("Product Design is a course which deals with the design, manufacturing, and use of products around us. A course in Product Design prepares students for a career in product designing and manufacturing industries. Students are taught in-depth skills on how to tackle complex problems, explore creative solutions, designing skills, and much more.")

            cy.get('#demo-simple-select')
                .click()

            cy.get('.css-tzsjye > :nth-child(4)')
                .click()

            cy.get('#demo-simple-select')
                .click()

            cy.get('.css-tzsjye > :nth-child(4)')
                .click()

            cy.get('.css-tzsjye > :nth-child(4)')
                .type("https://apps.wharton.upenn.edu/syllabi/2016A/OIDD415402/")

            cy.get('.css-tzsjye > :nth-child(4)')
                .click()

            cy.get('.css-tzsjye > :nth-child(4)')
                .type("https://youtu.be/lF70OuNWdrM")
        });
        it("Validate that user can create a premium course", () => {

            cy.visit("http://tawdry-rule.surge.sh")
            cy.get('.css-48p1y4 > .MuiButton-root')
                .click()

            cy.get('[data-testid=EmailAddress]')
                .type("ayp@mail.com")

            cy.get('[data-testid=Password]')
                .type("pass1234")

            cy.get('.MuiButton-contained')
                .click()

            cy.url()
                .should("contains", "/courses")

            cy.get('.MuiGrid-root > .MuiButton-root')
                .click()

            cy.get('[data-testid="Title*"]')
                .type("Premium Product Management")

            cy.get('[data-testid="Description*"]')
                .type("Product Design is a course which deals with the design, manufacturing, and use of products around us. A course in Product Design prepares students for a career in product designing and manufacturing industries. Students are taught in-depth skills on how to tackle complex problems, explore creative solutions, designing skills, and much more.")

            cy.get('#demo-simple-select')
                .click()

            cy.get('.css-tzsjye > :nth-child(4)')
                .click()

            cy.get('[data-testid=isPremium]')
                .click()

            cy.get('.css-tzsjye > :nth-child(4)')
                .type("https://apps.wharton.upenn.edu/syllabi/2016A/OIDD415402/")

            cy.get('.css-tzsjye > :nth-child(4)')
                .click()

            cy.get('.css-tzsjye > :nth-child(4)')
                .type("https://youtu.be/lF70OuNWdrM")
        });*/
});