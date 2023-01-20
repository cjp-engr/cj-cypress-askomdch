import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Checkout Page', () => {
    describe('Checkout Page', () => {
        beforeEach(function () {
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    this.data = data;
                });
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('Test', function () {
            const numberOfClicks: number = 5;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.addProductToCart(`“${this.data[0].name}”`, numberOfClicks);
            StorePage.cartCheckoutButtonElement.click();

        });
    });
});