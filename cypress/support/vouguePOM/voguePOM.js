class vogue {
  visitHome() {
    cy.visit("https://www.vogue.in/");
  }

  burgerMenu() {
    cy.get(".StackedNavigationDrawer-jtJcEj > button")
      .first()
      .click({ force: true });
    cy.get('nav[aria-label="Primary"] > ul > li > a')
      .contains("Horoscope")
      .click({ force: true });
    cy.url().should('contain', '/horoscope')
  }

  clickingOnDesiredDay(zodiacSign) {
    const date = new Date();
    const dateOfToday = date.getDate();
    const monthOfToday = date.toLocaleString("en-US", { month: "long" });
    const expectedDateInput = monthOfToday + " " + dateOfToday;
    cy.reachHoro(expectedDateInput, zodiacSign);
  }
}
export default vogue;