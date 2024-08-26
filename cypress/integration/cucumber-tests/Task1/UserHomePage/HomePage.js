class HomePage{

    getUserAccountTab(){return cy.get('span[class="oxd-userdropdown-tab"]')}
    getAdminTab(){return cy.get('a[href="/web/index.php/admin/viewAdminModule"]')}
    
    


    checkUserProfileTabIsVisible(){
        this.getUserAccountTab().should('be.visible')
    }

    navigateToAdminTab(){
        this.getAdminTab().click()
    }

    

    checkThatAdminTabIsTheActiveTab(){
        this.getAdminTab().should('have.attr','class').and('contain','active')
    }

    



}export default HomePage;