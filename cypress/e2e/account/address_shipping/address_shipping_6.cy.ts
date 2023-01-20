import { AddressShippingPage } from "../../../pages/account/AddressShipping";
import { AccountAddressShippingTD } from "../../model";

describe('Account Shipping Address Page', () => {
    describe('The "town/city" is empty to all test cases', () => {
        beforeEach(() => {
            cy.fixture('account/address_shipping.json').as('shipping');
            cy.login();
            AddressShippingPage.addressesNavigationLinkElement.click();
            AddressShippingPage.addButtonElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('34. The information should not be saved if the "town/city" and "first name" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                // AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressShippingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
            });
        });

        it('35. The information should not be saved if the "town/city" and "last name" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressShippingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
            });
        });

        it('36. The information should not be saved if the "town/city" and "country/region" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                // AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCountyWithoutCountry']);
                AddressShippingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
            });
        });

        it('37. The information should not be saved if the "town/city" and "street address first field" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
                AddressShippingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
            });
        });

        it('38. The information should not be saved if the "town/city" and "state" are empty and the other required fields are filled', () => {
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

                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
                AddressShippingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
            });
        });

        it('39. The information should not be saved if the "town/city" and "zip" are empty and the other required fields are filled', () => {
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

                AddressShippingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
                AddressShippingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
            });
        });
    });
});