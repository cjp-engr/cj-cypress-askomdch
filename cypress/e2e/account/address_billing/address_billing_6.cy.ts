import { AddressBillingPage } from "../../../pages/account/AddressBilling";
import { AccountAddressBillingTD } from "../../model";

describe('Account Billing Address Page', () => {
    describe('The "town/city" is empty to all test cases', () => {

        beforeEach(() => {
            cy.fixture('account/address_billing.json').as('billing');
            cy.login();
            AddressBillingPage.addressesNavigationLinkElement.click();
            AddressBillingPage.addButtonElement.click();
        });

        it('38. The information should not be saved if the "town/city" and "first name" are empty but the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                // AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
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

                AddressBillingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });

        it('39. The information should not be saved if the "town/city" and "last name" are empty but the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });

        it('40. The information should not be saved if the "town/city" and "country/region" are empty but the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                // AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });

        it('41. The information should not be saved if the "town/city" and "street address" are empty but the other required fields are filled', () => {
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

                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });

        //! -- The error message here is inconsistent. 
        // ! -- Sometimes it displays "State / Country is a required field." 
        // ! -- Sometimes it displays "State is a required field." 
        it('42. The information should not be saved if the "town/city" and "state/county" are empty but the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });

        //! -- The error message here is inconsistent. 
        // ! -- Sometimes it displays "Postcode / ZIP is a required field." 
        // ! -- Sometimes it displays "ZIP Code is a required field." 
        it('43. The information should not be saved if the "town/city" and "postcode/zip" are empty but the other required fields are filled', () => {
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
                // AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });

        it('44. The information should not be saved if the "town/city" and "email address" are empty but the other required fields are filled', () => {
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
                AddressBillingPage.emailAddressTextFieldElement.type('{selectAll}{backspace}');
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });
    });
});