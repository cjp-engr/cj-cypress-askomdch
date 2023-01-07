import { Account } from "./Account";

class AddressShipping extends Account {
    private addressesNavigationLink: string = ".woocommerce-MyAccount-navigation-link--edit-address";
    private shippingAddressText: string = "";
    private shippingAddButton: string = "a[href*='/edit-address/shipping']";
    private shippingFirstNameTextField: string = "#shipping_first_name";
    private shippingLastNameTextField: string = "#shipping_last_name";
    private shippingCompanyNameTextField: string = "#shipping_company";
    private shippingCountryRegionSelectField: string = "select[name='shipping_country']";
    private shippingStreetAddressFirstTextField: string = "#shipping_address_1";
    private shippingStreetAddressSecondTextField: string = "#shipping_address_2";
    private shippingTownCityTextField: string = "#shipping_city";
    private shippingStateSelectField: string = "#shipping_state";
    private shippingZipCodeTextField: string = "#shipping_postcode";
    private shippingSaveAddressButton: string = "button[name='save_address']";

    get addressesNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addressesNavigationLink);
    }

    get shippingAddressTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressText);
    }

    get shippingAddButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddButton);
    }
    get shippingFirstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingFirstNameTextField);
    }

    get shippingLastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingLastNameTextField);
    }

    get shippingCompanyNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingCompanyNameTextField);
    }

    get shippingCountryRegionSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingCountryRegionSelectField);
    }

    get shippingStreetAddressFirstTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingStreetAddressFirstTextField);
    }
    get shippingStreetAddressSecondTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingStreetAddressSecondTextField);
    }

    get shippingTownCityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingTownCityTextField);
    }

    get shippingStateSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingStateSelectField);
    }

    get shippingZipCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingZipCodeTextField);
    }

    get shippingSaveAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingSaveAddressButton);
    }
}

export const AddressShippingPage = new AddressShipping();