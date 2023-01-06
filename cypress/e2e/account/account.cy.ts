import { AccountPage } from "../../pages/account/Account";
import { AccountTestData } from "../model";

describe('Account Page', function () {
    beforeEach(function () {
        cy.fixture('account/account').as('account');

    });
    describe('Login Scenario', function () {

        beforeEach(function () {
            cy.visitOnlineStore();
            AccountPage.navigationBarAccountElement.click();
        });

        it('1. The login attempt should be successful after the user entered a valid email or username and password', function () {
            cy.get<AccountTestData>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['registeredUserNameOrEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.dashboardSecondBodyTextElement.should('contain.text', data.text['dashboardSecondBody']);

            });
        });

        it('2. The login attempt should fail after the user entered an unregistered email or username', function () {
            cy.get<AccountTestData>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['unregisteredUserNameOrEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['unregistered']);

            });
        });

        it('3. The login attempt should fail after the user entered valid a email or username but empty password', function () {
            cy.get<AccountTestData>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['registeredUserNameOrEmail']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['passwordEmpty']);

            });
        });

        it('4. The login attempt should fail after the user entered an unregistered email or username but empty password', function () {
            cy.get<AccountTestData>('@account').then((data) => {

                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['unregisteredUserNameOrEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['unregistered']);

            });
        });

        it('5. The login attempt should fail due to empty username or email address and password', function () {
            cy.get<AccountTestData>('@account').then((data) => {

                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['username']);
            });
        });

    });

    describe('Reset Password Scenario', function () {

        beforeEach(function () {
            cy.visitOnlineStore();
            AccountPage.navigationBarAccountElement.click();
            AccountPage.loginLostYourPasswordLinkElement.click();
        });

        it('1. The user should be redirected to the reset password page after clicking the "Lost your password" link', function () {

            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.resetPasswordBodyTextElement.should('contain.text', data.text['resetPasswordBody']);
            });


        });

        it('2. The email should be sent after the user entered a registered email', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.credentials['registeredEmail']);
                AccountPage.resetPasswordButtonElement.contains('Reset password').click();
                AccountPage.resetPasswordSentEmailTextElement.should('contain.text', data.successMessage['sentEmail']);
            });

        });

        it('3. The email should not be sent after the user entered an unregistered email', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.credentials['unregisteredEmail']);
                AccountPage.resetPasswordButtonElement.contains('Reset password').click();
                AccountPage.resetPasswordErrorMessageTextElement.should('contain.text', data.errorMessage['resetPassword']);
            });
        });

        it('4. The email should be sent after the user entered a registered username', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.credentials['registeredUsername']);
                AccountPage.resetPasswordButtonElement.contains('Reset password').click();
                AccountPage.resetPasswordSentEmailTextElement.should('contain.text', data.successMessage['sentEmail']);
            });
        });

        it('5. The email should not be sent after the user entered an unregistered username', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.credentials['unregisteredUsername']);
                AccountPage.resetPasswordButtonElement.contains('Reset password').click();
                AccountPage.resetPasswordErrorMessageTextElement.should('contain.text', data.errorMessage['resetPassword']);
            });
        });
    });


    describe('Registration Scenario', function () {
        beforeEach(function () {
            cy.visitOnlineStore();
            AccountPage.navigationBarAccountElement.click();
        });

        it('1. Registration should be successful after entering a valid username, email address and password', function () {
            //todo
        });

        it('2. Registration should fail after the user entered a valid username, email address but with empty password', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeringEmail']);
                AccountPage.registerButtonElement.contains('Register').click();
                //password
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyPassword']);
            });
        });

        it('3. Registration should fail after the user entered a valid username and password but with empty email address', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();
                //registeringEmptyEmail
                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('4. Registration should fail after the user entered a valid username but with empty email address and password', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('5. Registration should fail after the user entered a valid email address and password but with empty username', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeringEmail']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyUsername']);
            });
        });

        it('6. Registration should fail after the user entered a valid username and password but with empty email address', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('7. Registration should fail after the user entered a valid password but with empty username and password', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('8. Registration should fail due to empty username, email address and password', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        //todo
        it.skip('9. Registration should fail after the user entered an invalid email address', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['invalidEmail']);
                AccountPage.registerPasswordTextFieldElement.type(data.credentials['registeringPassword']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringEmptyEmail']);
            });
        });

        it('10. Registration should fail after the user entered an existing username', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeredUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeringEmail']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringExistingUsername']);
            });
        });

        it('11. Registration should fail after the user entered an existing email address', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeringUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeredEmail']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringExistingEmail']);
            });
        });

        it('12. Registration should fail after the user entered an existing username and email address', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.registerUsernameTextFieldElement.type(data.credentials['registeredUsername']);
                AccountPage.registerEmailAddressTextFieldElement.type(data.credentials['registeredEmail']);
                AccountPage.registerButtonElement.contains('Register').click();

                AccountPage.errorMessageTextElement.should('contain.text', data.errorMessage['registeringExistingEmail']);
            });
        });
    });
});