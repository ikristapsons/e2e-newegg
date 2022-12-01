Feature: Search bar and internet shop logo button

    Tests for Newegg search function and page logo redirect

Background:
    Given I am on the Newegg main page

Scenario: As a user, I can search and find an item in shop
    When I click on searchbar
    * I type in "Windows"
    * I click on search button
    Then I can see item has been found

Scenario: As a user, I can return to main page by pressing the logo
    When I click on Todays Best Deals
     * I get redirected to deals page
     * I click on logo
    Then I get redirected back to main pages