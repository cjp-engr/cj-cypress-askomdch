import { AddressShippingPage } from "../../../pages/account/AddressShipping";
import { AccountAddressShippingTD } from "../../model";

describe('Account Shipping Address Page', () => {
    describe('Shipping Page Scenario', () => {
        beforeEach(() => {
            cy.fixture('account/address_shipping.json').as('shipping');
            cy.login();
            AddressShippingPage.addressesNavigationLinkElement.click();
            AddressShippingPage.addButtonElement.click();
        });

        it.only('1. The information should be saved succesfully after the user entered data to all the required and optional fields', () => {
            AddressShippingPage.clearAllFields();
            cy.get<AccountAddressShippingTD>('@shipping').then((data) => {
                AddressShippingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressShippingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressShippingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressShippingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressShippingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressShippingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressShippingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressShippingPage.stateSelectFieldElement.select(data.user['state']);
                AddressShippingPage.zipCodeTextFieldElement.type(data.user['zipCode']);
                AddressShippingPage.saveAddressButtonElement.click();

                cy.url().should('contain', data.links['edit-address']);
                AddressShippingPage.successMessageTextElement.should('contain.text', data.successMessage);
            });
        });

        it('2. The information should not be saved if the "first name" is empty and the other required fields are filled', () => {

        });

        it('3. The information should not be saved if the "last name" is empty and the other required fields are filled', () => {

        });

        it('4. The information should not be saved if the "country/region" is empty and the other required fields are filled', () => {

        });

        it('5. The information should not be saved if the "street address first field" is empty and the other required fields are filled', () => {

        });

        it('6. The information should not be saved if the "town/city" is empty and the other required fields are filled', () => {

        });

        it('7. The information should not be saved if the "state" is empty and the other required fields are filled', () => {

        });

        it('8. The information should not be saved if the "zip" is empty and the other required fields are filled', () => {

        });

        it('9. The information should not be saved if all the required fields are empty', () => {

        });

        it('10. The information should be saved succesfully after the user entered data to all the required fields but all the optional fields are empty', () => {

        });
    });
});