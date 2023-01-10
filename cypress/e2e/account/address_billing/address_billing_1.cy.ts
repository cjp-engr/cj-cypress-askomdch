import { AddressBillingPage } from "../../../pages/account/AddressBilling";
import { AccountAddressBillingTD } from "../../model";

describe('Account Billing Address Page', () => {
    describe('Billing Page Scenario', () => {
        beforeEach(() => {
            cy.fixture('account/address_billing.json').as('billing');
            cy.login();
            AddressBillingPage.addressesNavigationLinkElement.click();
            AddressBillingPage.addButtonElement.click();
        });
        it('1. The information should be saved succesfully after the user entered data to all the required and optional fields', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                cy.url().should('contain', data.links['edit-address']);
                AddressBillingPage.successMessageTextElement.should('contain.text', data.successMessage);

                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['firstName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['lastName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['companyName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['countryRegion']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['streetAddressFirst']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['streetAddressSecond']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['townCity']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['stateCounty']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['postalCodeZip']);

            });

        });

        it('2. The information should not be saved if the "first name" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                // AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);

            });
        });

        it('3. The information should not be saved if the "last name" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);

            });
        });

        it('4. The information should not be saved if the "country/region" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                // AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
            });
        });

        it('5. The information should not be saved if the "street address first field" is empty but the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });

        it('6. The information should not be saved if the "town/city" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });
        //! -- The error message here is inconsistent. 
        // ! -- Sometimes it displays "State / Country is a required field." 
        // ! -- Sometimes it displays "State is a required field." 
        it('7. The information should not be saved if the "state/county" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);

            });
        });

        //! -- The error message here is inconsistent. 
        // ! -- Sometimes it displays "Postcode / ZIP is a required field." 
        // ! -- Sometimes it displays "ZIP Code is a required field." 
        it('8. The information should not be saved if the "postcode/zip" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                // AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);

            });
        });

        it('9. The information should not be saved if the "email address" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.emailAddressTextFieldElement.clear();
                AddressBillingPage.saveAddressButtonElement.click();
                AddressBillingPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);

            });
        });

        it('10. The information should be saved succesfully after the user entered data to all the required fields but all the optional fields are empty', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                // AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                // AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                // AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                cy.url().should('contain', data.links['edit-address']);
                AddressBillingPage.successMessageTextElement.should('contain.text', data.successMessage);

                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['firstName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['lastName']);
                // AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['companyName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['countryRegion']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['streetAddressFirst']);
                // AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['streetAddressSecond']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['townCity']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['stateCounty']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['postalCodeZip']);

            });
        });

        it('10-1. The information should not be saved if all the required fields are empty', () => {

            AddressBillingPage.clearAllFields();
            AddressBillingPage.emailAddressTextFieldElement.type('{selectAll}{backspace}');
            AddressBillingPage.saveAddressButtonElement.click();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressBillingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressBillingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
                AddressBillingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
                AddressBillingPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);

            });
        });

    });
});