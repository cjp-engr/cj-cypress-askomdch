import { AddressShippingPage } from "../../../pages/account/AddressShipping";
import { AccountAddressShippingTD } from "../../model";

describe('Account Shipping Address Page', () => {
    describe('The "zip" is empty to all test cases', () => {
        beforeEach(() => {
            cy.fixture('account/address_shipping.json').as('shipping');
            cy.login();
            AddressShippingPage.addressesNavigationLinkElement.click();
            AddressShippingPage.addButtonElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('46. The information should not be saved if the "zip" and "first name" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                // AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                // AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressShippingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
            });
        });

        it('47. The information should not be saved if the "zip" and "last name" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                // AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressShippingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
            });
        });

        it('48. The information should not be saved if the "zip" and "country/region" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                // AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                // AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCountyWithoutCountry']);
                AddressShippingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZipWithoutCountry']);
            });
        });

        it('49. The information should not be saved if the "zip" and "street address first field" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                // AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
                AddressShippingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
            });
        });

        it('50. The information should not be saved if the "zip" and "town/city" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                // AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
                AddressShippingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
            });
        });

        it('51. The information should not be saved if the "zip" and "state" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                // AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
                AddressShippingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
            });
        });
    });
});