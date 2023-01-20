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
            cy.wrap(3).as('quantity');
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
        });

        afterEach(() => {
            cy.logout();
        });

        it('35. The user should be able to redirect to checkout page after clicking the "Proceed to Checkout"', () => {

        });

        it('36. The "Proceed to Checkout" should be hidden after all the products in the cart are removed', () => {

        });

        it('37. The "Proceed to Checkout" should be displayed after clicking the "Undo" and the product is added on the list again', () => {

        });
    });
});