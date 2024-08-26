class UserManagementPage{

    //contsructor
    constructor(initRecordsNumber){
        this._initRecordsNumber = initRecordsNumber
    }


    //getters and setters for _initRecordsNumber property
    getInitRecordsNumber(){
        return this._initRecordsNumber
    }

    setInitRecordsNumber(number){
        this._initRecordsNumber = number
    }
    
    //locators and methods

    getUserManagementNavTab(){return cy.get('.oxd-topbar-body-nav-tab-item')}
    getRecordsCardLocator(){return cy.get('.oxd-table-card')}
    getUsernameSearchInput(){return cy.get(':nth-child(2) > .oxd-input')}
    getSearchBtnLocator(){return cy.get('.oxd-form-actions > .oxd-button--secondary')}

    getSearchedRecordSelector(){return cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon')}
    getSearchedRecordDeleteIcon(){return cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon')}

    getConfirmDeleteBtnLocator(){return cy.get('.oxd-button--label-danger')}
    getValidationMsg() { return cy.get('.oxd-input-group > .oxd-text')}

    getUsersRecords(){
        this.getRecordsCardLocator().its('length').then(count=>{
            this.setInitRecordsNumber(count)
        })
        
    }

    clickOnAddNewUserBtn(){
        cy.contains('Add').click()
    }

    searchForUserByUsername(username){
        this.getUsernameSearchInput().clear().type(username)
        this.getSearchBtnLocator().click()
        cy.wait(2000)
    }

    deleteSearchedUser(){
        this.getSearchedRecordDeleteIcon().click()
        this.getConfirmDeleteBtnLocator().click()
    }

    checkThatUserManagmentNavTabIsTheActiveTab(){
        this.getUserManagementNavTab().eq(0).parent().should('have.attr','class').and('contain','visited')
    }

    checkUserDeletedValidationMsg(){
        this.getValidationMsg({setTimeout:4000}).invoke('text').should('eq','Successfully Deleted')
    }

}export default UserManagementPage;