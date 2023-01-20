import { AddressShippingPage } from "../../../pages/account/AddressShipping";
import { AccountAddressShippingTD } from "../../model";

describe('Account Shipping Address Page', () => {
    describe('The "first name" is empty to all test cases', () => {
        beforeEach(() => {
            cy.fixture('account/address_shipping.json').as('shipping');
            cy.login();
            AddressShippingPage.addressesNavigationLinkElement.click();
            AddressShippingPage.addButtonElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('11. The information should not be saved if the "first name" and "last name" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                // AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressShippingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
            });
        });

        it('12. The information should not be saved if the "first name" and "country/region" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                // AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                // AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['state']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressShippingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCountyWithoutCountry']);
            });
        });

        it('13. The information should not be saved if the "first name" and "street address first field" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                // AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressShippingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
            });
        });

        it('14. The information should not be saved if the "first name" and "town/city" are empty and the other required fields are filled', () => {
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

        it('15. The information should not be saved if the "first name" and "state" are empty and the other required fields are filled', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                // AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressShippingPage.stateSelectFieldElement.select(data.user['state']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressShippingPage.saveAddressButtonElement.click();

                AddressShippingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressShippingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
            });
        });

        it('16. The information should not be saved if the "first name" and "zip" are empty and the other required fields are filled', () => {
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





    });
});