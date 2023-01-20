import { AddressBillingPage } from "../../../pages/account/AddressBilling";
import { AccountAddressBillingTD } from "../../model";

describe('Account Billing Address Page', () => {
    describe('The "street address" is empty to all test cases', () => {
        beforeEach(() => {
            cy.fixture('account/address_billing.json').as('billing');
            cy.login();
            AddressBillingPage.addressesNavigationLinkElement.click();
            AddressBillingPage.addButtonElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('31. The information should not be saved if the "street address" and "first name" are empty and the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                // AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
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

                AddressBillingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });

        it('32. The information should not be saved if the "street address" and "last name" are empty and the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });

        it('33. The information should not be saved if the "street address" and "country/region" are empty and the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                // AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCountyWithoutCountry']);

            });
        });

        it('34. The information should not be saved if the "street address" and "town/city" are empty and the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });

        it('35. The information should not be saved if the "street address" and "state/county" are empty and the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });

        //! -- The error message here is inconsistent. 
        // ! -- Sometimes it displays "Postcode / ZIP is a required field." 
        // ! -- Sometimes it displays "ZIP Code is a required field." 
        it('36. The information should not be saved if the "street address" and "postcode/zip" are empty and the other required fields are filled', () => {
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
                // AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });

        it('37. The information should not be saved if the "street address" and "email address" are empty and the other required fields are filled', () => {
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
                AddressBillingPage.emailAddressTextFieldElement.type('{selectAll}{backspace}');
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });
    });
});