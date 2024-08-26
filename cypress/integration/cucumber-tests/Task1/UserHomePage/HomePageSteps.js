/// <reference types="Cypress" />
import {Given,When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../LoginPage/LoginPage";

let homePage
let loginPage = new LoginPage();

Given('I Performed a successful login to my account', () => {
  cy.visit('/')
  cy.fixture('userData.json').then((data) => {
    homePage = loginPage.performLogin(data.AdminUsername,data.AdminPassword)
    homePage.checkUserProfileTabIsVisible()
  })
})

When('I navigate to the Admin tab', () => {
 homePage.navigateToAdminTab()
})

Then('I should be navigated to the admin tab',() => {
  homePage.checkThatAdminTabIsTheActiveTab()
})

