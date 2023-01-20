import { LostPasswordPage } from "../../../pages/account/LostPassword";
import { AccountLostPasswordTD } from "../../model";

describe('Lost Password Page', () => {

    describe('Reset Password Scenario', function () {

        beforeEach(function () {
            cy.fixture('account/account.json').as('account');
            cy.visitOnlineStore();
            LostPasswordPage.navigationBarAccountElement.click();
            LostPasswordPage.loginLostYourPasswordLinkElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('1. The user should be redirected to the reset password page after clicking the "Lost your password" link', function () {

            cy.get<AccountLostPasswordTD>('@account').then((data) => {
                LostPasswordPage.resetPasswordBodyTextElement.should('contain.text', data.bodyText);
            });


        });

        it('2. The email should be sent after the user entered a registered email', function () {
            LostPasswordPage.resetPasswordUsernameOrEmailTextFieldElement.type(`${Cypress.env('email')}`);
            LostPasswordPage.resetPasswordButtonElement.contains('Reset password').click();
            cy.get<AccountLostPasswordTD>('@account').then((data) => {
                LostPasswordPage.resetPasswordSentEmailTextElement.should('contain.text', data.successMessage);
            });

        });

        it('3. The email should not be sent after the user entered an unregistered email', function () {
            cy.get<AccountLostPasswordTD>('@account').then((data) => {
                LostPasswordPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.unregisteredEmail);
                LostPasswordPage.resetPasswordButtonElement.contains('Reset password').click();
                LostPasswordPage.resetPasswordErrorMessageTextElement.should('contain.text', data.errorMessage['resetPassword']);
            });
        });

        it('4. The email should be sent after the user entered a registered username', function () {
            LostPasswordPage.resetPasswordUsernameOrEmailTextFieldElement.type(`${Cypress.env('username')}`);
            LostPasswordPage.resetPasswordButtonElement.contains('Reset password').click();
            cy.get<AccountLostPasswordTD>('@account').then((data) => {
                LostPasswordPage.resetPasswordSentEmailTextElement.should('contain.text', data.successMessage['sentEmail']);
            });
        });

        it('5. The email should not be sent after the user entered an unregistered username', function () {
            cy.get<AccountLostPasswordTD>('@account').then((data) => {
                LostPasswordPage.resetPasswordUsernameOrEmailTextFieldElement.type(data.unregisteredUsername);
                LostPasswordPage.resetPasswordButtonElement.contains('Reset password').click();
                LostPasswordPage.resetPasswordErrorMessageTextElement.should('contain.text', data.errorMessage);
            });
        });
    });

});