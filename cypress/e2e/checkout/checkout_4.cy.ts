import { includes } from "cypress/types/lodash";
import { CartPage } from "../../pages/cart/Cart";
import { CheckoutPage } from "../../pages/checkout/Checkout";
import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Checkout Page', () => {
    describe('Product details', () => {
        beforeEach(function () {
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    this.data = data;
                });
            cy.wrap(2).as('quantity');
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
        });

        afterEach(() => {
            // cy.logout();
        });

        it('17. The products details from cart should display correctly', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.isActualProductDetailsMatchExpected(1, this.data[0].name, this.quantity, this.data[0].price);
            CheckoutPage.isActualProductDetailsMatchExpected(2, this.data[2].name, this.quantity, this.data[2].price);
        });

        it('18. The user should be able to select "Direct bank transfer"', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.cashOnDeliveryRadioboxElement.click();
            CheckoutPage.directBankTransferRadioboxElement.click();
            CheckoutPage.cashOnDeliveryMessageBoxElement.should('have.css', 'display', 'none');
        });

        it('19. The user should be able to select "Cash on delivery"', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.cashOnDeliveryRadioboxElement.click();
            CheckoutPage.directBankTransferMessageBoxElement.should('have.css', 'display', 'none');
        });

        it('20. The shipping form should display after checking the "Ship to a different address?"', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.shippingFormElement.should('have.css', 'display', 'none');
            CheckoutPage.shipToDifferentAddressCheckboxElement.click();
            CheckoutPage.shippingFormElement.should('have.css', 'display', 'block');
        });

        it('21. The "Product subtotal" should be computed correctly', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.computeSubTotal();
        });

        it('22. The "Total subtotal" should be computed correctly', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.computeSubTotal();
        });

        it('23. The "Flat Rate" should be displayed correctly after selecting the non-US country and the shipping is as same as the billing address', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            //todo
        });

        it('24. The "Flat Rate" should be displayed correctly after selecting the US country and the shipping is as same as the billing address', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.shippingFormElement.then(() => { });
            CheckoutPage.billingCountryRegionSelectFieldElement.then(($el) => {
                if ($el.text().toLowerCase().includes('united states')) {
                    CheckoutPage.flatRateTextElement.should('have.text', '$5.00');
                } else {
                    CheckoutPage.billingCountryRegionSelectFieldElement.click();
                    CheckoutPage.billingCountryRegionTextFieldElement.type('united states');
                    CheckoutPage.billingCountryRegionFirstElement.click();
                    cy.wait(1000);
                    CheckoutPage.flatRateTextElement.should('have.text', '$5.00');
                }
            });
        });

        it.only('25. The "Flat Rate" should be displayed correctly after selecting the non-US country and the shipping is different to billing address', function () {

        });

        it('26. The "Flat Rate" should be displayed correctly after selecting the US country and the shipping is different to billing address', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            //todo
        });

        it('27. The "Total" should be computed correctly', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            //todo
        });
    });

});