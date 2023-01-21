import { CartPage } from "../../pages/cart/Cart";
import { CheckoutPage } from "../../pages/checkout/Checkout";
import { StorePage } from "../../pages/product/Store";
import { CheckoutTD, StoreProductListTD } from "../model";

describe('Checkout Page', () => {
    describe('Billing Scenarios', () => {
        beforeEach(function () {
            cy.fixture('checkout/checkout.json').as('checkout');
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    cy.wrap(data).as('data');
                });

            cy.wrap(1).as('quantity');
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);

        });

        afterEach(() => {
            cy.logout();
        });

        it('2. Placing an order should fail if the "First name" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.billingFirstNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.billingFirstNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingFirstNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['firstName']);
                });
            });
        });

        it('3. Placing an order should fail if the  "Last Name" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.billingLastNameTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.billingLastNameErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingLastNameErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['lastName']);
                });
            });

        });

        it.skip('4. Placing an order should fail if there is no "Country/Region" selected', function () {

            // StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            // StorePage.cartCheckoutButtonElement.click();

        });

        it('5. Placing an order should fail if the "Street address" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.billingStreetAddressFirstTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.billingStreetAddressErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingStreetAddressErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['streetAddress']);
                });
            });

        });

        it('6. Placing an order should fail if the "Town/City" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.billingTownCityTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.billingTownCityErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingTownCityErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['townCity']);
                });
            });

        });

        it.skip('7. Placing an order should fail if there is no "State/County" selected', function () {

        });

        it('8. Placing an order should fail if the "Postcode / ZIP" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.billingPostcodeZipTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.billingPostcodeZipErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingPostcodeZipErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['postcodeZip']);
                });
            });
        });

        it('9. Placing an order should fail if the "Email address" is empty', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.billingEmailAddressTextFieldElement.type('{selectAll}{backspace}');
            CheckoutPage.placeOrderButtonElement.click();
            cy.get<CheckoutTD>('@checkout').then((e) => {
                CheckoutPage.billingEmailAddressErrorMessageElement
                    .should('be.visible');
                CheckoutPage.billingEmailAddressErrorMessageElement.then((value) => {
                    expect(value.text().trim()).to.be.equal(e.billingErrorMessage['emailAddress']);
                });
            });
        });

        it('9.1. Placing an order should fail if all the billing required fields are empty', function () {
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

            });
        });
    });

});