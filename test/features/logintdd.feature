@regression @tdd
Feature: Saucedemo Login Test with TTD

@all @positive @smoke
 Scenario: Login successfully with valid credential
    Given I open Saucedemo website
    When I login with valid credential
    Then I should be on the inventory page

@all @negative
 Scenario Outline: Login with invalid credential 
    Given I open Saucedemo website
    When I login with <username> and <password>
    Then I should see an error message

    Examples:
    | username        | password         |
    | invalid_user    | secret_sauce     |
    | satandard_user  | invalid_password |


