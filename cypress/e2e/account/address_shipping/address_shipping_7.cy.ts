import { AddressShippingPage } from "../../../pages/account/AddressShipping";
import { AccountAddressShippingTD } from "../../model";

describe('Account Shipping Address Page', () => {
    describe('The "state" is empty to all test cases', () => {

        beforeEach(() => {
            cy.fixture('account/address_shipping.json').as('shipping');
            cy.login();
            AddressShippingPage.addressesNavigationLinkElement.click();
            AddressShippingPage.addButtonElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('40. The information should not be saved if the "state" and "first name" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                // AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
            });
        });

        it('41  The information should not be saved if the "state" and "last name" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
            });
        });

        it('42. The information should not be saved if the "state" and "country/region" are empty and the other required fields are filled', () => {
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
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCountyWithoutCountry']);
            });
        });

        it('43. The information should not be saved if the "state" and "street address first field" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
            });
        });

        it('44. The information should not be saved if the "state" and "town/city" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
            });
        });

        it('45. The information should not be saved if the "state" and "zip" are empty and the other required fields are filled', () => {
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

                AddressShippingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
            });
        });
    });
});