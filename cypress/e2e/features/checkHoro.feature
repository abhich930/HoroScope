Feature: Vogue Horo Page
    
    Scenario: Clicking on the Burger Menu button and then on the Horoscope option, to land on the correct page.
        Given I am already on the Vogue homepage
        When I click on the burger Menu
        And I click on the Horoscope option from the list
        Then I should be redirected to the Horoscope page