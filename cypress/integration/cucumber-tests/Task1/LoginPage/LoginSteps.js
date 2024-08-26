import { Given,Then,And,When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./LoginPage";
import HomePage from "../UserHomePage/HomePage";


let loginPage = new LoginPage()
let homePage 

Given('I am on the login page', () => {
  cy.visit('/')
})

When('I fill the username field with {string}', username => {
  loginPage.fillUsernameInput(username)
})

And('I fill the password field with {string}', password => {
  loginPage.fillPasswordInput(password)
})

And('I click the login button', () => {
  loginPage.clickLoginButton()
})

Then('I should be logged in this user home page successfully', () => {
  homePage = new HomePage()
  homePage.checkUserProfileTabIsVisible()
})