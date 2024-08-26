class AddNewUserPage {

    getUserRoleDropdown() { return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text') }
    getStatusDropdown() { return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text') }
    getEmployeeNameInput() {return cy.get('.oxd-autocomplete-text-input > input') }
    getUsernameInput() { return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input') }
    getUsernameAutocomplete() { return cy.get('div[role="option"]')}
    getPasswordInput() { return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input') }
    getConfirmPasswordInput() { return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input') }
    getSaveButton() { return cy.get('button[type="submit"]') }
    getValidationMsg(){return cy.get('.oxd-text--toast-message')}
    getInputsValidationMsg() { return cy.get('.oxd-input-group > .oxd-text')}


    fillUserData(role,status,employeeName,username,password,confirmPassword) {
        
        this.selectUserRole(role)
        this.selectStatus(status)
        this.getEmployeeNameInput().type(employeeName)
        cy.wait(2000)
        this.getUsernameAutocomplete().click()
        this.getUsernameInput().clear().type(username)
        this.getPasswordInput().clear().type(password)
        this.getConfirmPasswordInput().clear().type(confirmPassword)
    }

    clickSaveButton() {
        this.getSaveButton().click()
    }

    checkUserAddedValidationMsg(){
        this.getValidationMsg({setTimeout:4000}).invoke('text').should('eq','Successfully Saved')
    }




    selectUserRole(role) {
        this.getUserRoleDropdown().click()
        role = role.toLowerCase()
        switch (role) {
            case "admin":
                cy.get('.oxd-select-dropdown > :nth-child(2)').click()
                break;
            case "ess":
                cy.get('.oxd-select-dropdown > :nth-child(3)').click()
                break;
            default:
                throw new Error("Invalid user role")
        }
    }

    selectStatus(status) {
        this.getStatusDropdown().click()
        status = status.toLowerCase();
        switch (status) {
            case "enabled":
                cy.get('.oxd-select-dropdown > :nth-child(2)').click()
                break;
            case "disabled":
                cy.get('.oxd-select-dropdown > :nth-child(3)').click()
                break;
            default:
                throw new Error("Invalid status")
        }
    }


} export default AddNewUserPage;