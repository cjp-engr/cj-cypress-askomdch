class Addresses {
    private addressesNavigationLink: string = ".woocommerce-MyAccount-navigation-link--edit-address";
    private billingAddressText: string = "";
    private billingAddButton: string = "a[href*='/edit-address/billing']";
    private billingFirstNameTextField: string = "#billing_first_name";
    private billingLastNameTextField: string = "#billing_last_name";
    private billingCompanyNameTextField: string = "#billing_company";
    private billingCountryRegionSelectField: string = "select[name='billing_country']";
    private billingStreetAddressFirstTextField: string = "#billing_address_1";
    private billingStreetAddressSecondTextField: string = "#billing_address_2";
    private billingTownCityTextField: string = "#billing_city";
    private billingStateSelectField: string = "#billing_state";
    private billingZipCodeTextField: string = "#billing_postcode";
    private billingPhoneTextField: string = "#billing_phone";
    private billingEmailAddressTextField: string = "#billing_email";
    private billingSaveAddressButton: string = "button[name='save_address']";

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

    get billingAddressTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressText);
    }
    get billingAddButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddButton);
    }

    get billingFirstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingFirstNameTextField);
    }

    get billingLastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingLastNameTextField);
    }

    get billingCompanyNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingCompanyNameTextField);
    }

    get billingCountryRegionSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingCountryRegionSelectField);
    }
    get billingStreetAddressFirstTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingStreetAddressFirstTextField);
    }

    get billingStreetAddressSecondTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingStreetAddressSecondTextField);
    }

    get billingTownCityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingTownCityTextField);
    }

    get billingStateSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingStateSelectField);
    }

    get billingZipCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingZipCodeTextField);
    }
    get billingPhoneTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingPhoneTextField);
    }

    get billingEmailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingEmailAddressTextField);
    }

    get billingSaveAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingSaveAddressButton);
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

export const AddressesPage = new Addresses();