/// <reference types="Cypress"/>
import vogue from "../support/vouguePOM/voguePOM";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("check daily horoscope based on your zodiac sign", () => {
    const vg = new vogue();
    before(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.visit("https://www.vogue.in/")
    })
    it("checking horo", () => {
        let yourZS = 'Virgo'
        cy.viewport(1920, 1080)
        vg.burgerMenu();
        vg.clickingOnDesiredDay()
        vg.theHoro(yourZS)
    })
})