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

    it("Validate that user cannot login successfully with the wrong details", () => {

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
});