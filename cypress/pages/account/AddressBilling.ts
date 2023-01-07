import { Account } from "./Account";

class AddressBilling extends Account {
    private addressesNavigationLink: string = ".woocommerce-MyAccount-navigation-link--edit-address";
    private addressText: string = "";
    private addButton: string = "a[href*='/edit-address/billing']";
    private firstNameTextField: string = "#billing_first_name";
    private lastNameTextField: string = "#billing_last_name";
    private companyNameTextField: string = "#billing_company";
    private countryRegionSelectField: string = "select[name='billing_country']";
    private streetAddressFirstTextField: string = "#billing_address_1";
    private streetAddressSecondTextField: string = "#billing_address_2";
    private townCityTextField: string = "#billing_city";
    private stateSelectField: string = "#billing_state";
    private zipCodeTextField: string = "#billing_postcode";
    private phoneTextField: string = "#billing_phone";
    private emailAddressTextField: string = "#billing_email";
    private saveAddressButton: string = "button[name='save_address']";

    // * After save, the user will be redirected to /edit-address
    private successMessageText: string = "div[role='alert']";

    private firstNameErrorMessageText: string = "li[data-id='billing_first_name']";
    private lastNameErrorMessageText: string = "li[data-id='billing_last_name']";
    private countryRegionErrorMessageText: string = "li[data-id='billing_country']";
    private streetAddressErrorMessageText: string = "li[data-id='billing_address_1']";
    private townCityErrorMessageText: string = "li[data-id='billing_city']";
    private stateErrorMessageText: string = "li[data-id='billing_state']";
    private zipCodeErrorMessageText: string = "li[data-id='billing_postcode']";
    private emailAddressErrorMessageText: string = "li[data-id='billing_email']";

    private billingAddressDetailsText: string = ".woocommerce-Address.u-column1 address";

    getAllData(firstName: string, lastName: string, companyName: string, countryRegion: string, streetAddressFirst: string, streetAddressSecond: string, townCity: string, stateCounty: string, postalCodeZip: string, phone: string,) {
        AddressBillingPage.firstNameTextFieldElement.type(firstName);
        AddressBillingPage.lastNameTextFieldElement.type(lastName);
        AddressBillingPage.companyNameTextFieldElement.type(companyName);
        AddressBillingPage.countryRegionSelectFieldElement.select(countryRegion);
        AddressBillingPage.streetAddressFirstTextFieldElement.type(streetAddressFirst);
        AddressBillingPage.streetAddressSecondTextFieldElement.type(streetAddressSecond);
        AddressBillingPage.townCityTextFieldElement.type(townCity);
        AddressBillingPage.stateSelectFieldElement.select(stateCounty);
        AddressBillingPage.zipCodeTextFieldElement.type(postalCodeZip);
        AddressBillingPage.phoneTextFieldElement.type(phone);
    }

    clearAllFields() {
        AddressBillingPage.firstNameTextFieldElement.clear();
        AddressBillingPage.lastNameTextFieldElement.clear();
        AddressBillingPage.companyNameTextFieldElement.clear();
        AddressBillingPage.countryRegionSelectFieldElement.select('Select a country / region…');
        AddressBillingPage.streetAddressFirstTextFieldElement.clear();
        AddressBillingPage.streetAddressSecondTextFieldElement.clear();
        AddressBillingPage.townCityTextFieldElement.clear();
        // AddressBillingPage.stateSelectFieldElement.select('Select an option…');
        AddressBillingPage.zipCodeTextFieldElement.clear();
        AddressBillingPage.phoneTextFieldElement.clear();
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
    get phoneTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.phoneTextField);
    }

    get emailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.emailAddressTextField);
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

    get emailAddressErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.emailAddressErrorMessageText);
    }

    get billingAddressDetailsTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressDetailsText);
    }
}

export const AddressBillingPage = new AddressBilling();