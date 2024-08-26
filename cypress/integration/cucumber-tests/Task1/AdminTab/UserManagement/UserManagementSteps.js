/// <reference types="Cypress" />
import {And,Then,When} from "cypress-cucumber-preprocessor/steps";
import UserManagementPage from "./UserManagementPage";

let initialUserNumbers =0
let userManagementPage = new UserManagementPage(initialUserNumbers)

Given('I am on the admin user management page',() => {
  userManagementPage.checkThatUserManagmentNavTabIsTheActiveTab()
})
Then('I should get total records of the users', () => {
  userManagementPage.getUsersRecords()
  initialUserNumbers = userManagementPage.getInitRecordsNumber()
  cy.log(`Initial User Numbers: ${initialUserNumbers}`)
  })

When('I click on the Add New User button', () =>{
  userManagementPage.clickOnAddNewUserBtn()
})



And('I checked the users records',() =>{
  userManagementPage.getUsersRecords()
})

Then('I should see that the number of users increased by one', () => {
  userManagementPage.getRecordsCardLocator().its('length').should('eq',initialUserNumbers+1)
  initialUserNumbers=initialUserNumbers+1
})

When('I searcheed for the added user by usename', () =>{
  cy.fixture('AddUserData.json').then((data)=>{
    userManagementPage.searchForUserByUsername(data.username)
  })
})

And('Click on delete icon for searched users',() =>{
  userManagementPage.deleteSearchedUser()
})

And('And Confirmed to delete that user',() =>{
  userManagementPage.checkUserDeletedValidationMsg()
})

And('I Refreshed the page',() =>{
  cy.reload()
})


Then('I should see that the number of users decreased by one', () => {
  userManagementPage.getRecordsCardLocator().its('length').should('eq',initialUserNumbers-1)
  initialUserNumbers=initialUserNumbers-1
})