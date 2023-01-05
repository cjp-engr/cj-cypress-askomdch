import { AccountPage } from "../../pages/account/Account";
import { AccountTestData } from "../model";

describe('Account Page', function () {
    describe('Login Scenario', function () {

        beforeEach(function () {
            cy.fixture('account/account').as('account');
            cy.visitOnlineStore();
        });

        it.only('The login attempt should be successful after the user entered a valid email or username and password', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                cy.log(data.hello['hi']);
                AccountPage.navigationBarAccountElement.click();
                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['registeredUserNameOrEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.dashboardSecondBodyTextElement.should('contain.text', data.dashboardSecondBodyText);

            });
        });

        it('The login attempt should fail after the user entered an unregistered email or username', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.navigationBarAccountElement.click();
                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['unregisteredUserNameOrEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.unregisteredErrorMessage);

            });
        });

        it('The login attempt should fail after the user entered valid a email or username but empty password', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.navigationBarAccountElement.click();
                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['registeredUserNameOrEmail']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.passwordEmptyErrorMessage);

            });
        });

        it('The login attempt should fail after the user entered an unregistered email or username but empty password', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                AccountPage.navigationBarAccountElement.click();
                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.credentials['unregisteredUserNameOrEmail']);
                AccountPage.loginPasswordTextFieldElement.type(data.credentials['registeredPassword']);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();
                AccountPage.errorMessageTextElement.should('contain.text', data.unregisteredErrorMessage);

            });
        });

    });
});