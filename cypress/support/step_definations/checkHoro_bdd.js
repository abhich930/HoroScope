import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given("I am already on the Vogue homepage", () => {
    cy.visit("www.vogue.in/");
});
When("I click on the burger Menu", () => {
    cy.get('.StackedNavigationDrawer-jtJcEj > button').first().click({ force: true });
});
And("I click on the Horoscope option from the list", () => {
    cy.get('nav[aria-label="Primary"] > ul > li > a').contains('Horoscope').as('horoButton').click({ force: true });
});
Then('I should be redirected to the Horoscope page', () => {
    cy.url().text();
});