class AddressBilling {
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
}

export const AddressBillingPage = new AddressBilling();