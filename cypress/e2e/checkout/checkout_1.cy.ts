import { CartPage } from "../../pages/cart/Cart";
import { CheckoutPage } from "../../pages/checkout/Checkout";
import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Checkout Page', () => {
    describe('Success Place order scenario', () => {
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
            cy.logout();
        });

        it('Placing an order should be successful after clicking the "Place Order"', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            CheckoutPage.placeOrderButtonElement.click();
            cy.request({
                url: `${Cypress.env('onlineStore')}checkout/order-received/`,
            }).then((resp) => {
                expect(resp.status).to.eq(200);
                cy.url().then((url) => {
                    expect(url).to.contain(`${Cypress.env('onlineStore')}checkout/order-received/`);
                });
            });
        });


    });
});