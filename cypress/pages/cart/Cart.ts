import { Main } from "../Main";

class Cart extends Main {
    private cartHeaderText: string = "";
    private deleteProductButton: string = "";
    private nameText: string = "";
    private priceText: string = "";
    private quantityTextField: string = "";
    private productSubtotalText: string = "";
    private updateCartButton: string = "button[value='Update cart']";

    private allProductsSubtotalText: string = "tr[class='cart-subtotal'] bdi:nth-child(1)";
    private flatRateText: string = "label[for='shipping_method_0_flat_rate3'] bdi";
    private changeAddressButton: string = ".shipping-calculator-button";
    private countrySelectField: string = "#select2-calc_shipping_country-container";
    private countryTextField: string = "input[role='combobox']";
    private stateSelectField: string = "#select2-calc_shipping_state-container";
    private stateTextField: string = "input[role='combobox']";
    private cityTextField: string = "#calc_shipping_city";
    private zipCodeTextField: string = "#calc_shipping_postcode";
    private updateAddressButton: string = "button[name='calc_shipping']";

    private allTotal: string = "td[data-title='Total'] bdi";

    private proceedToCheckoutButton: string = ".checkout-button.button.alt.wc-forward";

    private couponCodeTextField: string = "";
    private applyCouponButton: string = "";

    private productsList: string = ".woocommerce-cart-form__cart-item";

    get cartHeaderTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartHeaderText);
    }

    get deleteProductButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.deleteProductButton);
    }

    get nameTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.nameText);
    }

    get priceTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.priceText);
    }

    get quantityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.quantityTextField);
    }

    get productSubtotalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productSubtotalText);
    }

    get updateCartButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.updateCartButton);
    }

    get allProductsSubtotalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allProductsSubtotalText);
    }

    get flatRateTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.flatRateText);
    }

    get changeAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.changeAddressButton);
    }

    get countrySelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.countrySelectField);
    }

    get stateSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.stateSelectField);
    }

    get cityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cityTextField);
    }

    get zipCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.zipCodeTextField);
    }

    get updateAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.updateAddressButton);
    }

    get allTotalElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allTotal);
    }

    get proceedToCheckoutButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.proceedToCheckoutButton);
    }

    get couponCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.couponCodeTextField);
    }

    get applyCouponButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.applyCouponButton);
    }

    get productsListElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productsList);
    }

    isActualSingleProductMatchExpected(productName: string) {
        this.productsListElement.then(($body) => {
            if ($body.find("td[class='product-name'] > a").length > 0) {
                //element exists do something
                this.productsListElement.find("td[class='product-name'] > a")
                    .then((row) => {
                        if (row.length != 0) {
                            for (let x = 1; x <= row.length; x++) {
                                cy.get(`:nth-child(${x}) > .product-name > a`).each(($el, index, $list) => {
                                    expect($el.text()).to.be.equal(productName);
                                });
                            }
                        }
                    });
            } else {
            }
        });
    }

    isActualSingleProductPriceMatchExpected(productPrice: number) {
        this.productsListElement.then(($body) => {
            if ($body.find("td[class='product-price'] > span").length > 0) {
                //element exists do something
                this.productsListElement.find("td[class='product-price'] > span")
                    .then((row) => {
                        if (row.length != 0) {
                            for (let x = 1; x <= row.length; x++) {
                                cy.get(`:nth-child(${x}) > td[class='product-price'] > span`).each(($el, index, $list) => {
                                    if (x == row.length) {
                                        expect($el.text().trim()).to.be.equal(productPrice);
                                    }

                                });
                            }
                        }
                    });
            } else {
            }
        });
    }
}

export const CartPage = new Cart();