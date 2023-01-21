import { CartPage } from "../../pages/cart/Cart";
import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Cart Page', () => {
    describe('Proceed to Checkout scenarios', () => {
        beforeEach(() => {
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    // this.data = data;
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

        it('35. The user should be able to redirect to checkout page after clicking the "Proceed to Checkout"', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.click();
            cy.url().then((url) => {
                expect(url).to.equal(`${Cypress.env('onlineStore')}checkout/`);
            });
        });

        it('36. The "Proceed to Checkout" should be hidden after all the products in the cart are removed', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.removeAllProducts();
            CartPage.proceedToCheckoutButtonElement.should('not.exist');
        });

        it('37. The "Proceed to Checkout" should be displayed after clicking the "Undo" and the product is added on the list again', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.removeAllProducts();
            CartPage.proceedToCheckoutButtonElement.should('not.exist');
            CartPage.undoButtonElement.click();
            CartPage.proceedToCheckoutButtonElement.should('exist');
        });
    });
});