import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

let baseUrl = 'https://reqres.in'

When('user sent the post request post request to create user with {word} and {word}', (name, job) => {
    cy.fixture('API').then((fixture) => {
        fixture.user.name = name
        fixture.user.job = job
        cy.request({
            method: "POST",
            url: `${baseUrl}/api/users`,

            body: fixture.user
        }).as('createuser')

    })
})

Then('user with {word} and {word} should be created', (name, job) => {
    cy.get('@createuser').then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.name).to.eq(name)
        expect(res.body.job).to.eql(job)
        expect(res.body).to.have.property('createdAt')
        expect(res.body).to.have.property('id')
    })
})


When('user sent put request to update {word} and {word}', (name, job) => {
    cy.fixture('API').then((fixture) => {
        fixture.user.name = name
        fixture.user.job = job
        cy.request({
            method: "PUT",
            url: `${baseUrl}/api/users/2`,

            body: fixture.user
        }).as('createuser')

    })

})
Then('user with {word} and {word} should be Updated', (name, job) => {
    cy.get('@createuser').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.name).to.eq(name)
        expect(res.body.job).to.eql(job)
        expect(res.body).to.have.property('updatedAt')

    })


})

When('user sent Delete request to Delete {word} and {word}', (name, job) => {
    cy.fixture('API').then((fixture) => {
        fixture.user.name = name
        fixture.user.job = job
        cy.request({
            method: "DELETE",
            url: `${baseUrl}/api/users?page=2`,

            body: fixture.user
        }).as('deleteuser')

    })

})
Then('user with {word} and {word} should be deleted', (name, job) => {
    cy.get('@deleteuser').then((res) => {
        expect(res.status).to.eq(204)


    })




})

When('User send the request to get user', () => {

    cy.request({
        method: "GET",
        url: `${baseUrl}/api/users?page=2`,


    }).as('createuser')



})

Then('user should be get user successfully', () => {
    cy.get('@createuser').then((res) => {
        expect(res.status).to.eq(200)
            // expect(res.body.name).to.eq(name)
            // expect(res.body.job).to.eql(job)


    })

})