import LoginPage from "../integration/cucumber-tests/Task1/LoginPage/LoginPage"

let loginPage = new LoginPage()
let homePage

Cypress.Commands.add('login', (username, password) => { 
    cy.session('Admin login Seesion',() => {
        cy.visit('/')
       homePage = loginPage.performLogin(username, password)
       homePage.checkUserProfileTabIsVisible()
    },{
        cacheAccrossSpecs:true
    })
 })