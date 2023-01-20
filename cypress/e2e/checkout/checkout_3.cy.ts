import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Checkout Page', () => {
    describe('Shipping scenarios', () => {
        beforeEach(function () {
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    this.data = data;
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

        });

        it('11. Placing an order should fail if the  "Last Name" is empty', function () {

        });

        it('12. Placing an order should fail if there is no "Country/Region" selected', function () {

        });

        it('13. Placing an order should fail if the "Street address" is empty', function () {

        });

        it('14. Placing an order should fail if the "Town/City" is empty', function () {

        });

        it('15. Placing an order should fail if there is no "State/County" selected', function () {

        });

        it('16. Placing an order should fail if the "Postcode / ZIP" is empty', function () {

        });
    });

});