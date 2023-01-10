import { Account } from "./Account";

class AddressShipping extends Account {
    private addressesNavigationLink: string = ".woocommerce-MyAccount-navigation-link--edit-address";
    private addressText: string = "";
    private addButton: string = "a[href*='/edit-address/shipping']";
    private firstNameTextField: string = "#shipping_first_name";
    private lastNameTextField: string = "#shipping_last_name";
    private companyNameTextField: string = "#shipping_company";
    private countryRegionSelectField: string = "select[name='shipping_country']";
    private streetAddressFirstTextField: string = "#shipping_address_1";
    private streetAddressSecondTextField: string = "#shipping_address_2";
    private townCityTextField: string = "#shipping_city";
    private stateSelectField: string = "#shipping_state";
    private zipCodeTextField: string = "#shipping_postcode";
    private saveAddressButton: string = "button[name='save_address']";

    // * After save, the user will be redirected to /edit-address
    private successMessageText: string = "div[role='alert']";

    private firstNameErrorMessageText: string = "li[data-id='shipping_first_name']";
    private lastNameErrorMessageText: string = "li[data-id='shipping_last_name']";
    private countryRegionErrorMessageText: string = "li[data-id='shipping_country']";
    private streetAddressErrorMessageText: string = "li[data-id='shipping_address_1']";
    private townCityErrorMessageText: string = "li[data-id='shipping_city']";
    private stateErrorMessageText: string = "li[data-id='shipping_state']";
    private zipCodeErrorMessageText: string = "li[data-id='shipping_postcode']";

    private shippingAddressDetailsText: string = ".woocommerce-Address.u-column2 address";

    clearAllFields() {
        AddressShippingPage.firstNameTextFieldElement.clear();
        AddressShippingPage.lastNameTextFieldElement.clear();
        AddressShippingPage.companyNameTextFieldElement.clear();
        AddressShippingPage.countryRegionSelectFieldElement.select('Select a country / region…');
        AddressShippingPage.streetAddressFirstTextFieldElement.clear();
        AddressShippingPage.streetAddressSecondTextFieldElement.clear();
        AddressShippingPage.townCityTextFieldElement.clear();
        AddressShippingPage.zipCodeTextFieldElement.clear();
    }

    get addressesNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addressesNavigationLink);
    }

    get addressTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addressText);
    }

    get addButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addButton);
    }
    get firstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstNameTextField);
    }

    get lastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastNameTextField);
    }

    get companyNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.companyNameTextField);
    }

    get countryRegionSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.countryRegionSelectField);
    }

    get streetAddressFirstTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.streetAddressFirstTextField);
    }
    get streetAddressSecondTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.streetAddressSecondTextField);
    }

    get townCityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.townCityTextField);
    }

    get stateSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.stateSelectField);
    }

    get zipCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.zipCodeTextField);
    }

    get saveAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.saveAddressButton);
    }

    get successMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.successMessageText);
    }

    get firstNameErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstNameErrorMessageText);
    }

    get lastNameErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastNameErrorMessageText);
    }

    get countryRegionErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.countryRegionErrorMessageText);
    }

    get streetAddressErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.streetAddressErrorMessageText);
    }

    get townCityErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.townCityErrorMessageText);
    }

    get stateErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.stateErrorMessageText);
    }

    get zipCodeErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.zipCodeErrorMessageText);
    }

    get shippingAddressDetailsTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressDetailsText);
    }

}

export const AddressShippingPage = new AddressShipping();