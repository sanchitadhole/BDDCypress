import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given('I open Google page', () => {
    cy.visit('https://www.google.com')
})

Given('I open Facebook page', () => {
    cy.visit('https://www.facebook.com')
})

Given('I open GitHub page', () => {
    cy.visit('https://github.com/')

})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('contain', title)

})

