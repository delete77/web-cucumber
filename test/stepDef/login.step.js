const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const InventoryPage = require("../pages/inventory.page.js");

Given(/^I open Saucedemo website$/, async () =>{
    await Page.open('/');
})

When(/^I login with valid credential$/, async () =>{
    await LoginPage.login('standard_user', 'secret_sauce');
})

Then(/^I should be on the inventory page$/, async () =>{
    await InventoryPage.assertInventoryUrl()
})

When(/^I login with invalid username$/, async () =>{
    await LoginPage.login('invalid_user', 'secret_sauce');
})

When(/^I login with invalid password$/, async () =>{
    await LoginPage.login('standard_user', 'invalid_password');
})

Then(/^I should see an error message$/, async () =>{
    await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
})

//data driven test(Scenario Outline)
When(/^I login with (\w+) and (.+)$/, async(username, password)=>{
    await LoginPage.login(username, password)
} )