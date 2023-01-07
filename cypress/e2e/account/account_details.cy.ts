import { AccountDetailsPage } from "../../pages/account/AccountDetails";
import { AccountDetailsTD, AccountDetailsUserTD } from "../model";

describe('Edit Account Page', () => {

    describe('Edit Account Scenario', () => {
        beforeEach(function () {
            cy.fixture<{ data: AccountDetailsUserTD[] }>('account/account_details.json')
                .its("data")
                .then((data) => {
                    this.data = data;
                });
            cy.fixture('account/account_details.json').as('details');
            cy.login();
            AccountDetailsPage.navigationLinkElement.click();
        });

        it('1. The changes should be saved successfully if all the required fields are filled and email is not changed', function () {

            AccountDetailsPage.firstNameTextFieldElement.clear();
            AccountDetailsPage.lastNameTextFieldElement.clear();
            AccountDetailsPage.displayNameTextFieldElement.clear();

            AccountDetailsPage.firstNameTextFieldElement.type(this.data[0].firstName);
            AccountDetailsPage.lastNameTextFieldElement.type(this.data[0].lastName);
            AccountDetailsPage.displayNameTextFieldElement.type(this.data[0].displayName);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.successMessageTextElement.should('contain.text', data.successMessage);
            });
        });

        it('2. The changes should not be saved after the user entered a valid "first name", "last name" and "display name" but with empty "email address"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.firstNameTextFieldElement.type(this.data[0].firstName);
            AccountDetailsPage.lastNameTextFieldElement.type(this.data[0].lastName);
            AccountDetailsPage.displayNameTextFieldElement.type(this.data[0].displayName);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
            });
        });

        it('3. The changes should not be saved after the user entered a valid "first name", "last name" and "email address" but with empty "display name"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.firstNameTextFieldElement.type(this.data[0].firstName);
            AccountDetailsPage.lastNameTextFieldElement.type(this.data[0].lastName);
            AccountDetailsPage.emailAddressTextFieldElement.type(this.data[0].emailAddress);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.displayNameErrorMessageTextElement.should('contain.text', data.errorMessage['displayName']);
            });
        });

        it('4. The changes should not be saved after the user entered a valid "first name" and "last name" but with empty "display name" and "email address"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.firstNameTextFieldElement.type(this.data[0].firstName);
            AccountDetailsPage.lastNameTextFieldElement.type(this.data[0].lastName);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.displayNameErrorMessageTextElement.should('contain.text', data.errorMessage['displayName']);
                AccountDetailsPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
            });
        });

        it('5. The changes should not be saved after the user entered a valid "first name", "display name" and "email address" but with empty "last name"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.firstNameTextFieldElement.type(this.data[0].firstName);
            AccountDetailsPage.displayNameTextFieldElement.type(this.data[0].displayName);
            AccountDetailsPage.emailAddressTextFieldElement.type(this.data[0].emailAddress);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);

            });
        });

        it('6. The changes should not be saved after the user entered a valid "first name" and "display name" but with empty "last name" and "email address"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.firstNameTextFieldElement.type(this.data[0].firstName);
            AccountDetailsPage.displayNameTextFieldElement.type(this.data[0].displayName);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AccountDetailsPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);

            });
        });

        it('7. The changes should not be saved after the user entered a valid "first name" and "email address" but with empty "last name" and "display name"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.firstNameTextFieldElement.type(this.data[0].firstName);
            AccountDetailsPage.emailAddressTextFieldElement.type(this.data[0].emailAddress);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AccountDetailsPage.displayNameErrorMessageTextElement.should('contain.text', data.errorMessage['displayName']);

            });
        });

        it('8. The changes should not be saved after the user entered a valid "first name" but with empty "last name", "display name" and "email address"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.firstNameTextFieldElement.type(this.data[0].firstName);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AccountDetailsPage.displayNameErrorMessageTextElement.should('contain.text', data.errorMessage['displayName']);
                AccountDetailsPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);

            });
        });

        it('9. The changes should not be saved after the user entered a valid "last name", "display name" and "email address" but with empty "first name"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.lastNameTextFieldElement.type(this.data[0].lastName);
            AccountDetailsPage.displayNameTextFieldElement.type(this.data[0].displayName);
            AccountDetailsPage.emailAddressTextFieldElement.type(this.data[0].emailAddress);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
            });
        });

        it('10. The changes should not be saved after the user entered a valid "last name" and "display name" but with empty "first name" and "email address"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.lastNameTextFieldElement.type(this.data[0].lastName);
            AccountDetailsPage.displayNameTextFieldElement.type(this.data[0].displayName);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AccountDetailsPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
            });
        });

        it('11. The changes should not be saved after the user entered a valid "last name" and "email address" but with empty "first name" and "display name"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.lastNameTextFieldElement.type(this.data[0].lastName);
            AccountDetailsPage.emailAddressTextFieldElement.type(this.data[0].emailAddress);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AccountDetailsPage.displayNameErrorMessageTextElement.should('contain.text', data.errorMessage['displayName']);
            });
        });

        it('12. The changes should not be saved after the user entered a valid "last name" but with empty "first name", "display name" and "email address"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.lastNameTextFieldElement.type(this.data[0].lastName);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AccountDetailsPage.displayNameErrorMessageTextElement.should('contain.text', data.errorMessage['displayName']);
                AccountDetailsPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
            });
        });

        it('13. The changes should not be saved after the user entered a valid "display name" and "email address" but with empty "first name" and "last name"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.displayNameTextFieldElement.type(this.data[0].displayName);
            AccountDetailsPage.emailAddressTextFieldElement.type(this.data[0].emailAddress);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AccountDetailsPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
            });
        });

        it('14. The changes should not be saved after the user entered a valid "display name" but with empty "first name", "last name" and "email address"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.displayNameTextFieldElement.type(this.data[0].displayName);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AccountDetailsPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AccountDetailsPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
            });
        });

        it('15. The changes should not be saved after the user entered a valid "email address" but with empty "first name", "last name" and "display name"', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.emailAddressTextFieldElement.type(this.data[0].emailAddress);
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AccountDetailsPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AccountDetailsPage.displayNameErrorMessageTextElement.should('contain.text', data.errorMessage['displayName']);
            });
        });

        it('16. The changes should not be saved due to all required fields are empty', function () {
            AccountDetailsPage.clearAllTheFields();
            AccountDetailsPage.saveChangesButtonElement.contains('Save changes').click();

            cy.get<AccountDetailsTD>('@details').then((data) => {
                AccountDetailsPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AccountDetailsPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AccountDetailsPage.displayNameErrorMessageTextElement.should('contain.text', data.errorMessage['displayName']);
                AccountDetailsPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
            });
        });

    });
});