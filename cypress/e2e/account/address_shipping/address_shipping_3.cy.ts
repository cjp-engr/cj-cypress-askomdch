import { AddressShippingPage } from "../../../pages/account/AddressShipping";
import { AccountAddressShippingTD } from "../../model";

describe('Account Shipping Address Page', () => {
    describe('The "last name" is empty to all test cases', () => {
        beforeEach(() => {
            cy.fixture('account/address_shipping.json').as('shipping');
            cy.login();
            AddressShippingPage.addressesNavigationLinkElement.click();
            AddressShippingPage.addButtonElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('17. The information should not be saved if the "last name" and "country/region" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                // AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressShippingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCountyWithoutCountry']);

            });
        });

        it('18. The information should not be saved if the "last name" and "street address first field" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressShippingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });

        it('19. The information should not be saved if the "last name" and "town/city" are empty and the other required fields are filled', () => {
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

        it('20. The information should not be saved if the "last name" and "state" are empty and the other required fields are filled', () => {
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

        it('21. The information should not be saved if the "last name" and "zip" are empty and the other required fields are filled', () => {
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


    });
});