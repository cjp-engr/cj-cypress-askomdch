import { AccountPage } from "../../pages/account/Account";
import { AccountTD } from "../model";

describe('Account Page', function () {
    beforeEach(function () {
        cy.fixture('account/account.json').as('account');

    });
    describe('Login Scenario', function () {

        beforeEach(function () {
            cy.visitOnlineStore();
            AccountPage.navigationBarAccountElement.click();
        });

        it('1. The login attempt should be successful after the user entered a valid email or username and password', function () {
            cy.get<AccountTD>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.clear();
                AccountPage.loginPasswordTextFieldElement.clear();

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['registeredEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.dashboardSecondBodyTextElement.should('contain.text', data.text['dashboardSecondBody']);

            });
        });

        it('2. The login attempt should fail after the user entered an unregistered email or username', function () {
            cy.get<AccountTD>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.clear();
                AccountPage.loginPasswordTextFieldElement.clear();

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['unregisteredUserNameOrEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['unregistered']);

            });
        });

        it('3. The login attempt should fail after the user entered valid a email or username but empty password', function () {
            cy.get<AccountTD>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.clear();
                AccountPage.loginPasswordTextFieldElement.clear();

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['registeredUserNameOrEmail']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['passwordEmpty']);

            });
        });

        it('4. The login attempt should fail after the user entered an unregistered email or username but empty password', function () {
            cy.get<AccountTD>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.clear();
                AccountPage.loginPasswordTextFieldElement.clear();

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['unregisteredUserNameOrEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['unregistered']);

            });
        });

        it('5. The login attempt should fail due to empty username or email address and password', function () {
            cy.get<AccountTD>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.clear();
                AccountPage.loginPasswordTextFieldElement.clear();

                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['username']);
            });
        });

    });

    describe('Registration Scenario', function () {
        beforeEach(function () {
            cy.visitOnlineStore();
            AccountPage.navigationBarAccountElement.click();
        });

        it.skip('1. Registration should be successful after entering a valid username, email address and password', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeringEmail']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();
                //password
                //todo
            });

        });

        it('2. Registration should fail after the user entered a valid username, email address but with empty password', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeringEmail']);
                AccountPage.registerButtonElement.contains('Register').click();
                //password
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyPassword']);
            });
        });

        it('3. Registration should fail after the user entered a valid username and password but with empty email address', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();
                //registeringEmptyEmail
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('4. Registration should fail after the user entered a valid username but with empty email address and password', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('5. Registration should fail after the user entered a valid email address and password but with empty username', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeringEmail']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyUsername']);
            });
        });

        it('6. Registration should fail after the user entered a valid username and password but with empty email address', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('7. Registration should fail after the user entered a valid password but with empty username and password', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('8. Registration should fail due to empty username, email address and password', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        //todo
        it.skip('9. Registration should fail after the user entered an invalid email address', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['invalidEmail']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('10. Registration should fail after the user entered an existing username', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeredUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeringEmail']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringExistingUsername']);
            });
        });

        it('11. Registration should fail after the user entered an existing email address', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeredEmail']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringExistingEmail']);
            });
        });

        it('12. Registration should fail after the user entered an existing username and email address', function () {
            cy.get<AccountTD>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeredUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeredEmail']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringExistingEmail']);
            });
        });

        it('13. All the fields should be empty upon visiting the account page', function () {
            AccountPage.registerUsernameTextFieldElement.should('contain.text', '');
            AccountPage.registerEmailAddressTextFieldElement.should('contain.text', '');
            AccountPage.registerPasswordTextFieldElement.should('contain.text', '');
        });
    });

});