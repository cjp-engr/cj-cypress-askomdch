import { AddressBillingPage } from "../../../pages/account/AddressBilling";
import { AccountAddressBillingTD } from "../../model";

describe('Account Billing Address Page', () => {

    describe('The "state/county" is empty to all test cases', () => {
        beforeEach(() => {
            cy.fixture('account/address_billing.json').as('billing');
            cy.login();
            AddressBillingPage.addressesNavigationLinkElement.click();
            AddressBillingPage.addButtonElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('45. The information should not be saved if the "state/county" and "first name" are empty and the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                // AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
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

                AddressBillingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);

            });
        });

        it('46. The information should not be saved if the "state/county" and "last name" are empty and the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {
                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);

            });
        });

        it('47. The information should not be saved if the "state/county" and "country/region" are empty and the other required fields are filled', () => {
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
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCountyWithoutCountry']);

            });
        });

        it('48. The information should not be saved if the "state/county" and "street address" are empty and the other required fields are filled', () => {
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

                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);

            });
        });

        it('49. The information should not be saved if the "state/county" and "town/city" are empty and the other required fields are filled', () => {
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

                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);

            });
        });

        it('50. The information should not be saved if the "state/county" and "postcode/zip" are empty and the other required fields are filled', () => {
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
                // AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);

            });
        });

        it('51. The information should not be saved if the "state/county" and "email address" are empty and the other required fields are filled', () => {
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
                AddressBillingPage.emailAddressTextFieldElement.type('{selectAll}{backspace}');
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);

            });
        });
    });
});