import HomePage from "../UserHomePage/HomePage"

class LoginPage{

    getUsernameInput(){return cy.get('input[name="username"]');}
    getPasswordInput(){return cy.get('input[name="password"]')}
    getLoginButton(){return cy.get('button[type="submit"]')}



    fillUsernameInput(username){
        this.getUsernameInput().clear().type(username)
    }

    fillPasswordInput(password){
        this.getPasswordInput().clear().type(password)
    }

    clickLoginButton(){
        this.getLoginButton().click()
    }


    performLogin(username, password){
        this.fillUsernameInput(username)
        this.fillPasswordInput(password)
        this.clickLoginButton()
        return new HomePage()
    }


}export default LoginPage;