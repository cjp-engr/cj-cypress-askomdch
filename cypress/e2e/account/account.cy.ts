import { AccountPage } from "../../pages/account/Account";
import { AccountTestData } from "../model";

describe('Account Page', function () {
    describe('Login Scenario', function () {

        beforeEach(function () {
            cy.fixture('account/account').as('account');
            cy.visitOnlineStore();
        });

        it('Should login successfully', function () {
            cy.get<AccountTestData>('@account').then((data) => {
                // cy.get<PageLinkTestData>('@pageLink').then((link) => {
                //     cy.url().should('contain', link.inventoryLink);
                // });
                AccountPage.navigationBarAccountElement.click();
                AccountPage.loginUsernameOrEmailAddressTextFieldElement.type(data.registeredUserNameOrEmail);
                AccountPage.loginPasswordTextFieldElement.type(data.registeredPassword);
                AccountPage.loginRememberMeCheckBoxElement.click();
                AccountPage.loginButtonElement.contains('Log in').click();

            });
        });

    });
});