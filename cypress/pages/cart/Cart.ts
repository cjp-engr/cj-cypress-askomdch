import { Main } from "../Main";

class Cart extends Main {
    private cartHeaderText: string = "";
    private nameText: string = "";
    private priceText: string = "";

    private firstProductRemoveButton: string = ":nth-child(1) > .product-remove > .remove";
    private firstProductNameText: string = ":nth-child(1) > .product-name > a";
    private firstProductPriceText: string = ":nth-child(1) > .product-price > .woocommerce-Price-amount > bdi";
    private firstQuantityTextField: string = ":nth-child(1) > .product-quantity > .quantity > input";
    private firstProductSubtotalText: string = ":nth-child(1) > .product-subtotal > .woocommerce-Price-amount > bdi";

    private thirdProductRemoveButton: string = ":nth-child(3) > .product-remove > .remove";
    private thirdProductNameText: string = ":nth-child(3) > .product-name > a";
    private thirdProductPriceText: string = ":nth-child(3) > .product-price > .woocommerce-Price-amount > bdi";
    private thirdQuantityTextField: string = ":nth-child(3) > .product-quantity > .quantity > input";
    private thirdProductSubtotalText: string = ":nth-child(3) > .product-subtotal > .woocommerce-Price-amount > bdi";

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

    get firstProductRemoveButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstProductRemoveButton, { timeout: 5000 });
    }

    get firstProductNameTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstProductNameText);
    }

    get firstProductPriceTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstProductPriceText);
    }

    get firstQuantityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstQuantityTextField);
    }

    get firstProductSubtotalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstProductSubtotalText);
    }

    get thirdProductRemoveButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.thirdProductRemoveButton, { timeout: 5000 });
    }

    get thirdProductNameTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.thirdProductNameText);
    }

    get thirdProductPriceTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.thirdProductPriceText);
    }

    get thirdQuantityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.thirdQuantityTextField);
    }

    get thirdProductSubtotalTextTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.thirdProductSubtotalText);
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
                                    expect(Number($el.text().trim().replace('$', '').replace(',', '')))
                                        .to.be.equal(productQuantity * Number(productPrice.replace('$', '').replace(',', '')));
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

    isComputedMatchDisplayedCartSubtotal() {
        let locator = "td[class='product-subtotal'] > span > bdi";
        let computedTotal: number = 0;

        this.productsListElement.then(($body) => {
            if ($body.find(locator).length > 0) {
                this.productsListElement.find(locator)
                    .each(($el, index, $list) => {
                        computedTotal += Number($el.text().trim().replace('$', '').replace(',', ''));
                    });
            }
        });
        this.allProductsSubtotalTextElement.then(($el) => {
            expect(Number($el.text().trim().replace('$', '').replace(',', '')))
                .to.be.equal(computedTotal);
        });
    }

    updateEachProductQuantity() {
        let locator = "td[class='product-subtotal'] > span > bdi";
        let min = 1;
        let max = 10;
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        this.productsListElement.then(($body) => {
            if ($body.find(locator).length > 0) {
                this.productsListElement.find(locator)
                    .each(($el, index, $list) => {
                        cy.get(`:nth-child(${index + 1}) > .product-quantity > .quantity > input`)
                            .type(`{selectAll}${randomNumber.toString()}`);
                    });
            } else { }
        });
    }
}

export const CartPage = new Cart();