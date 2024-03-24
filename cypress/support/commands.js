// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('reachHoro', (date, zodiacSign) => {
    cy.get('.category_tabs ul li a').contains('Sun Sign ').click({ force: true })
    cy.get('.product-description a:visible').contains(zodiacSign +' Horoscope Today: '+date+', 2024').click({force:true})
})

Cypress.Commands.add('saveText', (zodiac) => {
    cy.url().should('contain', '/product')
    cy.get('.description.mb-20 p span').eq(0).then($text => {
        const horoText = $text.text()
        cy.writeFile('./cypress/others/Horoscope.txt', horoText)
    })
})