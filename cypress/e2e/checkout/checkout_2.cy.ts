import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Checkout Page', () => {
    describe('Billing Scenarios', () => {
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

        it('2. Placing an order should fail if the "First name" is empty', function () {

            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartCheckoutButtonElement.click();

        });

        it('3. Placing an order should fail if the  "Last Name" is empty', function () {

            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartCheckoutButtonElement.click();

        });

        it('4. Placing an order should fail if there is no "Country/Region" selected', function () {

            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartCheckoutButtonElement.click();

        });

        it('5. Placing an order should fail if the "Street address" is empty', function () {

            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartCheckoutButtonElement.click();

        });

        it('6. Placing an order should fail if the "Town/City" is empty', function () {

        });

        it('7. Placing an order should fail if there is no "State/County" selected', function () {

        });

        it('8. Placing an order should fail if the "Postcode / ZIP" is empty', function () {

        });

        it('9. Placing an order should fail if the "Email address" is empty', function () {

        });
    });

});