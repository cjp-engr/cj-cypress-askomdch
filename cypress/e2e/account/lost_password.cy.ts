import { LostPasswordPage } from "../../pages/account/LostPassword";
import { AccountTestData } from "../model";

describe('Lost Password Page', () => {

    describe('Reset Password Scenario', function () {

        beforeEach(function () {
            cy.fixture('account/account').as('account');
            cy.visitOnlineStore();
            LostPasswordPage.navigationBarAccountElement.click();
            LostPasswordPage.loginLostYourPasswordLinkElement.click();
        });

        it('1. The user should be redirected to the reset password page after clicking the "Lost your password" link', function () {

            cy.get<AccountTestData>('@account').then((data) => {
                LostPasswordPage.resetPasswordBodyTextElement.should('contain.text', data.text['resetPasswordBody']);
            });


        });

        it('2. The email should be sent after the user entered a registered email', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                LostPasswordPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.credentials['registeredEmail']);
                LostPasswordPage.resetPasswordButtonElement.contains('Reset password').click();
                LostPasswordPage.resetPasswordSentEmailTextElement.should('contain.text', data.successMessage['sentEmail']);
            });

        });

        it('3. The email should not be sent after the user entered an unregistered email', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                LostPasswordPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.credentials['unregisteredEmail']);
                LostPasswordPage.resetPasswordButtonElement.contains('Reset password').click();
                LostPasswordPage.resetPasswordErrorMessageTextElement.should('contain.text', data.errorMessage['resetPassword']);
            });
        });

        it('4. The email should be sent after the user entered a registered username', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                LostPasswordPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.credentials['registeredUsername']);
                LostPasswordPage.resetPasswordButtonElement.contains('Reset password').click();
                LostPasswordPage.resetPasswordSentEmailTextElement.should('contain.text', data.successMessage['sentEmail']);
            });
        });

        it('5. The email should not be sent after the user entered an unregistered username', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                LostPasswordPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.credentials['unregisteredUsername']);
                LostPasswordPage.resetPasswordButtonElement.contains('Reset password').click();
                LostPasswordPage.resetPasswordErrorMessageTextElement.should('contain.text', data.errorMessage['resetPassword']);
            });
        });
    });

});