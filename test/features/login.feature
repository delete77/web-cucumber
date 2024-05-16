Feature: Saucedemo Login Test

@all @positive
 Scenario: Login successfully with valid credential
    Given I open Saucedemo website
    When I login with valid credential
    Then I should be on the inventory page

@all @negative
 Scenario: verify login failed with invalid username 
    Given I open Saucedemo website
    When I login with invalid username
    Then I should see an error message

@all @negative
Scenario: verify login failed with invalid password 
    Given I open Saucedemo website
    When I login with invalid password
    Then I should see an error message


