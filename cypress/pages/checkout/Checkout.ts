import { Main } from "../Main";

class Checkout extends Main {
    private billingFirstNameTextField: string = "";
    private billingLastNameTextField: string = "";
    private billingCompanyNameTextField: string = "";
    private billingCountryRegionSelectField: string = "";
    private billingStreetAddressFirstTextField: string = "";
    private billingStreetAddressSecondTextField: string = "";
    private billingTownCityTextField: string = "";
    private billingStateCountySelectField: string = "";
    private billingPostcodeZipTextField: string = "";
    private billingPhoneTextField: string = "";
    private billingEmailAddressTextField: string = "";
    private shipToDifferentAddressCheckbox: string = "";
    private shippingFirstNameTextField: string = "";
    private shippingLastNameTextField: string = "";
    private shippingCompanyNameTextField: string = "";
    private shippingCountryRegionSelectField: string = "";
    private shippingStreetAddressFirstTextField: string = "";
    private shippingStreetAddressSecondTextField: string = "";
    private shippingTownCityTextField: string = "";
    private shippingStateCountySelectField: string = "";
    private shippingPostcodeZipTextField: string = "";
    private shippingPhoneTextField: string = "";
    private orderNotesTextField: string = "";

    private totalItemsSubtotalText: string = "";
    private subtotalText: string = "";
    private flatRateText: string = "";
    private totalText: string = "";
    private directBankTransferRadiobox: string = "";
    private cashOnDeliveryRadiobox: string = "";
    private placeOrderButton: string = "";

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

    get billingStateCountySelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingStateCountySelectField);
    }

    get billingPostcodeZipTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingPostcodeZipTextField);
    }

    get billingPhoneTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingPhoneTextField);
    }

    get billingEmailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingEmailAddressTextField);
    }

    get shipToDifferentAddressCheckboxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shipToDifferentAddressCheckbox);
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

    get shippingStateCountySelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingStateCountySelectField);
    }

    get shippingPostcodeZipTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingPostcodeZipTextField);
    }

    get shippingPhoneTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingPhoneTextField);
    }

    get orderNotesTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.orderNotesTextField);
    }

    get totalItemsSubtotalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.totalItemsSubtotalText);
    }

    get subtotalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.subtotalText);
    }

    get flatRateTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.flatRateText);
    }

    get totalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.totalText);
    }

    get directBankTransferRadioboxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.directBankTransferRadiobox);
    }

    get cashOnDeliveryRadioboxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cashOnDeliveryRadiobox);
    }

    get placeOrderButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.placeOrderButton);
    }

}