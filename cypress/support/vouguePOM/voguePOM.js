class vogue {
    burgerMenu() {
        cy.get('.StackedNavigationDrawer-jtJcEj > button').first().click({ force: true })
        cy.get('nav[aria-label="Primary"] > ul > li > a').contains('Horoscope').as('horoButton').click({ force: true })
    }
    clickingOnDesiredDay() {
        const date = new Date();
        const dateOfToday = date.getDate()
        const monthOfToday = date.toLocaleString('en-US', { month: 'long'})
        const expectedDateInput = monthOfToday + ' ' + dateOfToday
        cy.get('.title_wrapper_main > a').contains(expectedDateInput).click({ force: true })
    }
    theHoro(zodiacSign) {
        cy.get('.product-summary').contains(zodiacSign).then($sign => {
            let textOfHoro = $sign.text()
            cy.writeFile('cypress/others/Horoscope.txt', textOfHoro)
        })
    }
}
export default vogue;