import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user navigate to the recast login page', () => {
    cy.visit('https://app.recast.studio/auth/login/')

})
When('user entered the username and password and click on login button', () => {
    cy.get('#login-form_email').type('sanchitadhole27@gmail.com')
    cy.get('#login-form_password').type('sanchu05')
    cy.get('button[type="submit"]').click()
})
Then('user should navigate to reacast dashboard', () => {

    cy.get('h4[class ="ant-typography"]').should('have.text', 'Create New Project')

    cy.contains('My Profile').should('have.text', 'My Profile')
    cy.get('svg[data-icon="audio"]').should('match', 'svg')

})



When('user entered the invalid  username and invalid password and click on login button', () => {

    cy.get('#login-form_email').type('sanchitadhole7@gmail.com')
    cy.get('input[type="password"]').type('sanchita12')
    cy.get('button[type= "submit"]').click()


})
Then('user should not be logged in', () => {

    cy.get('.ant-message-custom-content > :nth-child(2)').should('have.text', 'Unable to log in with provided credentials.')
    cy.contains('Unable to log in with provided credentials.').should('have.text', 'Unable to log in with provided credentials.')
    cy.url().should('have.include', 'login')
})