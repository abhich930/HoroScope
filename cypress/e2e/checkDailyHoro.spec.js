/// <reference types="Cypress"/>
import vogue from "../support/vouguePOM/voguePOM";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("check daily horoscope based on your zodiac sign", () => {
    const vg = new vogue();
    before(() => {
        cy.viewport(1920, 1080)
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.fixture('zodiacSign').then((testData) => {
            globalThis.testData = testData
        })
    })
    it("checking horo", () => {
        vg.visitHome()
        vg.burgerMenu();
        vg.clickingOnDesiredDay(testData.yourZS)
        cy.saveText(testData.yourZS) // --> Custom Command
    })
})