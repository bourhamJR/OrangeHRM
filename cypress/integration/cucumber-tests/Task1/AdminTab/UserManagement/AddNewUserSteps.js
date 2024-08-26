/// <reference types="Cypress" />
import {And,Then} from "cypress-cucumber-preprocessor/steps";
import AddNewUserPage from "./AddNewUserPage";


let addNewUserPage = new AddNewUserPage()
let userData
And('I fill the user details',() => {
    
    cy.fixture('AddUserData.json').then((data) => {
        addNewUserPage.fillUserData(data.role,data.status,data.employeeName,data.username,data.password,data.confirmPassword)
    });
    
})



And('I click on the Save button',() => {
    addNewUserPage.clickSaveButton()
})

And('I got that user added successfully', () => {
    addNewUserPage.checkUserAddedValidationMsg()
})