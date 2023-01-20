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

        it('', function () {

            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartCheckoutButtonElement.click();

        });


    });
});