import { Main } from "../Main";

class Checkout extends Main {
    private billingFirstNameTextField: string = "#billing_first_name";
    private billingLastNameTextField: string = "#billing_last_name";
    private billingCompanyNameTextField: string = "#billing_company";
    private billingCountryRegionSelectField: string = "#select2-billing_country-container";
    private billingCountryRegionTextField: string = "input[role='combobox']";
    private billingCountryRegionFirst: string = ".select2-results__option:nth-child(1)";
    private billingStreetAddressFirstTextField: string = "#billing_address_1";
    private billingStreetAddressSecondTextField: string = "#billing_address_2";
    private billingTownCityTextField: string = "#billing_city";
    private billingStateCountySelectField: string = "#select2-billing_state-container";
    private billingStateCountyTextField: string = "input[role='combobox']";
    private billingPostcodeZipTextField: string = "#billing_postcode";
    private billingPhoneTextField: string = "#billing_phone";
    private billingEmailAddressTextField: string = "#billing_email";
    private shipToDifferentAddressCheckbox: string = "#ship-to-different-address-checkbox";
    private shippingForm: string = ".shipping_address";
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
    private directBankTransferMessageBox: string = ".payment_method_bacs .payment_box";
    private cashOnDeliveryRadiobox: string = "#payment_method_cod";
    private cashOnDeliveryMessageBox: string = ".payment_method_cod .payment_box";
    private placeOrderButton: string = "#place_order";

    //errorMessage
    private billingFirstNameErrorMessage: string = "li[data-id='billing_first_name']";
    private billingLastNameErrorMessage: string = "li[data-id='billing_last_name']";
    private billingStreetAddressErrorMessage: string = "li[data-id='billing_address_1']";
    private billingTownCityErrorMessage: string = "li[data-id='billing_city']";
    private billingPostcodeZipErrorMessage: string = "li[data-id='billing_postcode']";
    private billingEmailAddressErrorMessage: string = "li[data-id='billing_email']";

    private shippingFirstNameErrorMessage: string = "li[data-id='shipping_first_name']";
    private shippingLastNameErrorMessage: string = "li[data-id='shipping_last_name']";
    private shippingStreetAddressErrorMessage: string = "li[data-id='shipping_address_1']";
    private shippingTownCityErrorMessage: string = "li[data-id='shipping_city']";
    private shippingPostcodeZipErrorMessage: string = "li[data-id='shipping_postcode']";

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

    get billingCountryRegionFirstElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingCountryRegionFirst);
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

    get shippingFormElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingForm);
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

    get directBankTransferMessageBoxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.directBankTransferMessageBox);
    }

    get cashOnDeliveryRadioboxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cashOnDeliveryRadiobox);
    }

    get cashOnDeliveryMessageBoxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cashOnDeliveryMessageBox);
    }

    get placeOrderButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.placeOrderButton, { timeout: 10000 });
    }

    //
    get billingFirstNameErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingFirstNameErrorMessage);
    }

    get billingLastNameErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingLastNameErrorMessage);
    }

    get billingStreetAddressErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingStreetAddressErrorMessage);
    }

    get billingTownCityErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingTownCityErrorMessage);
    }

    get billingPostcodeZipErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingPostcodeZipErrorMessage);
    }

    get billingEmailAddressErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingEmailAddressErrorMessage);
    }

    get shippingFirstNameErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingFirstNameErrorMessage);
    }

    get shippingLastNameErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingLastNameErrorMessage);
    }

    get shippingStreetAddressErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingStreetAddressErrorMessage);
    }

    get shippingTownCityErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingTownCityErrorMessage);
    }

    get shippingPostcodeZipErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingPostcodeZipErrorMessage);
    }

    isActualProductDetailsMatchExpected(nameIndex: number, name: string,
        quantity: string, price: string) {
        let productName = 'td[class="product-name"]:nth-child(1)';
        let productSubtotal = 'td[class="product-total"]';
        cy.get(`tr[class="cart_item"]:nth-child(${nameIndex}) ${productName}`)
            .each(($el) => {
                expect($el.text().trim()).to.contain(name);
                expect($el.text().trim()).to.contain(quantity);
            });

        cy.get(`tr[class="cart_item"]:nth-child(${nameIndex}) ${productSubtotal}`)
            .each(($el) => {
                expect(Number($el.text().trim().replace('$', '')))
                    .to.equal(Number(price.replace('$', '')) * Number(quantity));

            });
    }

    computeSubTotal() {
        let sumSubtotal = 0;
        cy.get('tbody').then(($body) => {
            if ($body.find('tr[class="cart_item"]').length > 0) {
                cy.get('tbody').find('tr[class="cart_item"]')
                    .each(($el, index, $list) => {
                        sumSubtotal += Number($el.text().trim().split('$')[1]);
                    });

                this.subtotalTextElement.then(($subtotal) => {
                    expect(sumSubtotal)
                        .to.be.equal(Number($subtotal.text().trim().replace('$', '')));
                });
            } else { }
        });
    }
}

export const CheckoutPage = new Checkout();