import { CartPage } from "../../pages/cart/Cart";
import { CheckoutPage } from "../../pages/checkout/Checkout";
import { StorePage } from "../../pages/product/Store";
import { CheckoutTD, StoreProductListTD } from "../model";

describe('Checkout Page', () => {
    describe('Shipping scenarios', () => {
        beforeEach(function () {
            cy.fixture('checkout/checkout.json').as('checkout');
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    cy.wrap(data).as('data');
                });
            cy.wrap(5).as('quantity');
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
        });

        afterEach(() => {
            cy.logout();
        });

        it('10. Placing an order should fail if the "First name" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.shipToDifferentAddressCheckboxElement.click();
            CheckoutPage.shippingFirstNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.shippingFirstNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingFirstNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['firstName']);
                });
            });
        });

        it('11. Placing an order should fail if the  "Last Name" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.shipToDifferentAddressCheckboxElement.click();
            CheckoutPage.shippingLastNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.shippingLastNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingLastNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['lastName']);
                });
            });
        });

        it.skip('12. Placing an order should fail if there is no "Country/Region" selected', function () {

        });

        it('13. Placing an order should fail if the "Street address" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.shipToDifferentAddressCheckboxElement.click();
            CheckoutPage.shippingStreetAddressFirstTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.shippingStreetAddressErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingStreetAddressErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['streetAddress']);
                });
            });
        });

        it('14. Placing an order should fail if the "Town/City" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.shipToDifferentAddressCheckboxElement.click();
            CheckoutPage.shippingTownCityTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.shippingTownCityErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingTownCityErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['townCity']);
                });
            });
        });

        it.skip('15. Placing an order should fail if there is no "State/County" selected', function () {

        });

        it('16. Placing an order should fail if the "Postcode / ZIP" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.shipToDifferentAddressCheckboxElement.click();
            CheckoutPage.shippingPostcodeZipTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.shippingPostcodeZipErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingPostcodeZipErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['postcodeZip']);
                });
            });
        });

        it('16.1. Placing an order should fail if all the shipping required fields are empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.shipToDifferentAddressCheckboxElement.click();
            CheckoutPage.shippingFirstNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.shippingLastNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.shippingStreetAddressFirstTextFieldElement.type('{selectAll}{backspace}')
            CheckoutPage.shippingTownCityTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.shippingPostcodeZipTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.shippingFirstNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingFirstNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['firstName']);
                });
                CheckoutPage.shippingLastNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingLastNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['lastName']);
                });
                CheckoutPage.shippingStreetAddressErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingStreetAddressErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['streetAddress']);
                });
                CheckoutPage.shippingTownCityErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingTownCityErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['townCity']);
                });
                CheckoutPage.shippingPostcodeZipErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingPostcodeZipErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['postcodeZip']);
                });
            });
        });

        it('16.2. Placing an order should fail if all the billing and shipping required fields are empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.billingFirstNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.billingLastNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.billingStreetAddressFirstTextFieldElement.type('{selectAll}{backspace}')
            CheckoutPage.billingTownCityTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.billingPostcodeZipTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.billingEmailAddressTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.shipToDifferentAddressCheckboxElement.click();
            CheckoutPage.shippingFirstNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.shippingLastNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.shippingStreetAddressFirstTextFieldElement.type('{selectAll}{backspace}')
            CheckoutPage.shippingTownCityTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.shippingPostcodeZipTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.billingFirstNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingFirstNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['firstName']);
                });

                CheckoutPage.billingLastNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingLastNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['lastName']);
                });
                CheckoutPage.billingStreetAddressErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingStreetAddressErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['streetAddress']);
                });
                CheckoutPage.billingTownCityErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingTownCityErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['townCity']);
                });
                CheckoutPage.billingPostcodeZipErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingPostcodeZipErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['postcodeZip']);
                });

                CheckoutPage.billingEmailAddressErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingEmailAddressErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['emailAddress']);
                });
                CheckoutPage.shippingFirstNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingFirstNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['firstName']);
                });
                CheckoutPage.shippingLastNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingLastNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['lastName']);
                });
                CheckoutPage.shippingStreetAddressErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingStreetAddressErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['streetAddress']);
                });
                CheckoutPage.shippingTownCityErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingTownCityErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['townCity']);
                });
                CheckoutPage.shippingPostcodeZipErrorMessageElement
                    .should('be.visible');
                CheckoutPage.shippingPostcodeZipErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.shippingErrorMessage['postcodeZip']);
                });
            });
        });
    });

});