Feature: orangeHRM_Task

    As an admin, i want to log in to my account so that i can access my account page.
    As an admin, i want to add new user from users managment.
    As an admin, i want to delete new added user from users managment.
    
    Background:
        Given I Performed a successful login to my account
        When I navigate to the Admin tab
        Then I should be navigated to the admin tab

    Scenario: Verifying Users Records in the system
        Given I am on the admin user management page
        When I checked the users records
        Then I should get total records of the users


    Scenario: Verifying Admin can add new user and users records increased by one
        Given I am on the admin user management page
        And I click on the Add New User button
        And I fill the user details
        And I click on the Save button
        And I got that user added successfully
        And I checked the users records
        Then I should see that the number of users increased by one


Scenario: Verifying Admin can deleted Added user and users records decreased by one
        Given I am on the admin user management page
        When I searcheed for the added user by usename
        And Click on delete icon for searched users
        And I Refreshed the page
        Then I should see that the number of users decreased by one
