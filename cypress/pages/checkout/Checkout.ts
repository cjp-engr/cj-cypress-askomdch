import { Main } from "../Main";

class Checkout extends Main {
    private billingFirstNameTextField: string = "#billing_first_name";
    private billingLastNameTextField: string = "#billing_last_name";
    private billingCompanyNameTextField: string = "#billing_company";
    private billingCountryRegionSelectField: string = "#select2-billing_country-container";
    private billingCountryRegionTextField: string = "input[role='combobox']";
    private billingStreetAddressFirstTextField: string = "#billing_address_1";
    private billingStreetAddressSecondTextField: string = "#billing_address_2";
    private billingTownCityTextField: string = "#billing_city";
    private billingStateCountySelectField: string = "#select2-billing_state-container";
    private billingStateCountyTextField: string = "input[role='combobox']";
    private billingPostcodeZipTextField: string = "#billing_postcode";
    private billingPhoneTextField: string = "#billing_phone";
    private billingEmailAddressTextField: string = "#billing_email";
    private shipToDifferentAddressCheckbox: string = "#ship-to-different-address-checkbox";
    private shippingFirstNameTextField: string = "#shipping_first_name";
    private shippingLastNameTextField: string = "#shipping_last_name";
    private shippingCompanyNameTextField: string = "#shipping_company";
    private shippingCountryRegionSelectField: string = "#select2-shipping_country-container";
    private shippingCountryRegionTextField: string = "input[role='combobox']";
    private shippingStreetAddressFirstTextField: string = "#shipping_address_1";
    private shippingStreetAddressSecondTextField: string = "#shipping_address_2";
    private shippingTownCityTextField: string = "#shipping_city";
    private shippingStateCountySelectField: string = "#select2-shipping_state-container";
    private shippingStateCountyTextField: string = "input[role='combobox']";
    private shippingPostcodeZipTextField: string = "#shipping_postcode";
    private orderNotesTextField: string = "#order_comments";

    // private totalItemsSubtotalText: string = "";
    private subtotalText: string = "tr[class='cart-subtotal'] bdi:nth-child(1)";
    private flatRateText: string = "tr[class='woocommerce-shipping-totals shipping'] bdi:nth-child(1)";
    private totalText: string = "tr[class='order-total'] bdi:nth-child(1)";
    private directBankTransferRadiobox: string = "#payment_method_bacs";
    private cashOnDeliveryRadiobox: string = "#payment_method_cod";
    private placeOrderButton: string = "#place_order";

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

    get billingCountryRegionTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingCountryRegionTextField);
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

    get billingStateCountyTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingStateCountyTextField);
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

    get shippingCountryRegionTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingCountryRegionTextField);
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

    get shippingStateCountyTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingStateCountyTextField);
    }

    get shippingPostcodeZipTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingPostcodeZipTextField);
    }


    get orderNotesTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.orderNotesTextField);
    }

    // get totalItemsSubtotalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.totalItemsSubtotalText);
    // }

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