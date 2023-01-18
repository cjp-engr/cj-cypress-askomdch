import { Main } from "../Main";

class Cart extends Main {
    private cartHeaderText: string = "";
    private nameText: string = "";
    private priceText: string = "";
    private removeProductFirstButton: string = ":nth-child(1) > .product-remove > .remove";
    private productNameFirstText: string = ":nth-child(1) > .product-name > a";
    private productPriceFirstText: string = ":nth-child(1) > .product-price > .woocommerce-Price-amount > bdi";
    private productSubtotalFirstText: string = ":nth-child(1) > .product-subtotal > .woocommerce-Price-amount > bdi";

    private quantityTextField: string = "[id*='quantity']";
    private productSubtotalText: string = "";
    private updateCartButton: string = "button[value='Update cart']";

    private allProductsSubtotalText: string = "tr[class='cart-subtotal'] bdi:nth-child(1)";
    private flatRateText: string = "label > .woocommerce-Price-amount > bdi";
    private shippingAddressText: string = "p[class='woocommerce-shipping-destination'] strong";
    private changeAddressButton: string = ".shipping-calculator-button";
    private countrySelectField: string = "#select2-calc_shipping_country-container";
    private countrySearchTextField: string = "input[role='combobox']";
    private countryFirstInList: string = ".select2-results__options li:first-child";
    private stateSelectField: string = ".select2-selection__placeholder";
    private stateSearchTextField: string = "input[role='combobox']";
    private stateTextField: string = "#calc_shipping_state";
    private stateFirstInList: string = ".select2-results__options li:first-child";
    private cityTextField: string = "#calc_shipping_city";
    private zipCodeTextField: string = "#calc_shipping_postcode";
    private updateAddressButton: string = "button[name='calc_shipping']";

    private allTotal: string = "td[data-title='Total'] bdi";

    private proceedToCheckoutButton: string = ".checkout-button.button.alt.wc-forward";

    private couponCodeTextField: string = "";
    private applyCouponButton: string = "";

    private productsList: string = ".woocommerce-cart-form__cart-item";

    private removeProductMessageText = ".woocommerce-message";
    private undoButton = ".restore-item";

    get cartHeaderTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartHeaderText);
    }

    get removeProductFirstButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.removeProductFirstButton);
    }

    get productNameFirstTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productNameFirstText);
    }

    get productPriceFirstTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productPriceFirstText);
    }

    get productSubtotalFirstTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productSubtotalFirstText);
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

    get shippingAddressTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressText);
    }

    get changeAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.changeAddressButton);
    }

    get countrySelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.countrySelectField);
    }

    get countrySearchTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.countrySearchTextField);
    }

    get countryFirstInListElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.countryFirstInList);
    }

    get stateSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.stateSelectField);
    }

    get stateSearchTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.stateSearchTextField);
    }

    get stateTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.stateTextField);
    }

    get stateFirstInListElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.stateFirstInList);
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

    get removeProductMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.removeProductMessageText);
    }

    get undoButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.undoButton);
    }

    isActualProductNameMatchExpected(productName: string, nthChild: number) {
        // cy.wrap("td[class='product-name'] > a").as('locator')
        let locator = "td[class='product-name'] > a";
        this.productsListElement.then(($body) => {
            if ($body.find(locator).length > 0) {
                this.productsListElement.find(locator)
                    .then((row) => {
                        if (row.length != 0) {
                            cy.get(`:nth-child(${nthChild}) > ${locator}`).then(($el) => {
                                expect($el.text()).to.be.equal(productName);
                            });
                        }
                    });
            } else { }
        });
    }


    isActualProductPriceMatchExpected(productPrice: string, nthChild: number) {
        let locator = "td[class='product-price'] > span";
        this.productsListElement.then(($body) => {
            if ($body.find(locator).length > 0) {
                this.productsListElement.find(locator)
                    .then((row) => {
                        if (row.length != 0) {
                            cy.get(`:nth-child(${nthChild}) > ${locator}`).then(($el) => {
                                expect($el.text().trim()).to.be.equal(productPrice);
                            });
                        }
                    });
            } else { }
        });
    }

    isActualProductQuantityMatchExpected(productQuantity: number, nthChild: number) {
        let locator = "td[class='product-quantity'] .quantity input[title='Qty']";
        this.productsListElement.then(($body) => {
            if ($body.find(locator).length > 0) {
                this.productsListElement.find(locator)
                    .then((row) => {
                        if (row.length != 0) {
                            cy.get(`:nth-child(${nthChild}) > ${locator}`)
                                .invoke('val')
                                .then((value) => {
                                    expect(value.toString()).to.be.equal(productQuantity.toString());
                                });
                        }
                    });
            } else { }
        });
    }

    isActualProductSubtotalMatchExpected(productQuantity: number, productPrice: string, nthChild: number) {
        let locator = "td[class='product-subtotal'] > span > bdi";
        this.productsListElement.then(($body) => {
            if ($body.find(locator).length > 0) {
                this.productsListElement.find(locator)
                    .then((row) => {
                        if (row.length != 0) {
                            cy.get(`:nth-child(${nthChild}) > ${locator}`)
                                .then(($el) => {
                                    expect(Number($el.text().trim().replace('$', ''))).to.be.equal(productQuantity * Number(productPrice.replace('$', '')));
                                });
                        }
                    });
            } else { }
        });
    }

    isActualMultipleProductMatchExpected(productName: string[]) {
        // cy.wrap("td[class='product-name'] > a").as('locator')
        let locator = "td[class='product-name'] > a";
        this.productsListElement.then(($body) => {
            if ($body.find(locator).length > 0) {
                this.productsListElement.find(locator)
                    .then((row) => {
                        if (row.length != 0) {
                            for (let x = 1; x <= 4; x++) {
                                cy.get(`:nth-child(${x}) > ${locator}`).then(($el) => {
                                    expect($el.text()).to.be.equal(productName);
                                });

                            }

                        }
                    });
            } else { }
        });
    }
}

export const CartPage = new Cart();