import { CartPage } from "../../pages/cart/Cart";
import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Cart Page', () => {
    describe('Adding a single product Scenario', () => {

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

        it('1. After the user added a product to cart, the product name should be displayed correctly', function () {

            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.isActualProductNameMatchExpected(this.data[0].name, 1);
        });

        it('2. After the user added a product to cart, the product price should be displayed correctly', function () {

            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.isActualProductPriceMatchExpected(this.data[0].price, 1);
        });

        it('3. After the user added a product to cart, the product quantity should be displayed correctly', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.isActualProductQuantityMatchExpected(this.quantity, 1);
        });

        it('4. After the user added a product to cart, the product subtotal should be displayed correctly', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            // CartPage.isActualProductSubtotalMatchExpected(this.quantity, this.data[0].price, 1);
            CartPage.isActualEachProductSubtotalMatchExpected();
        });


    });

    describe('Adding a multiple products', () => {
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
        it('5. After the user added products to cart, each product name should be displayed correctly', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();

            CartPage.isActualProductNameMatchExpected(this.data[0].name, 1);
            CartPage.isActualProductNameMatchExpected(this.data[1].name, 2);
            CartPage.isActualProductNameMatchExpected(this.data[2].name, 3);
            CartPage.isActualProductNameMatchExpected(this.data[3].name, 4);

        });

        it('6. After the user added products to cart, each product price should be displayed correctly', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();

            CartPage.isActualProductPriceMatchExpected(this.data[1].price, 1);
            CartPage.isActualProductPriceMatchExpected(this.data[2].price, 2);
            CartPage.isActualProductPriceMatchExpected(this.data[3].price, 3);
        });

        it('7. After the user added products to cart, each product quantity should be displayed correctly', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();

            CartPage.isActualProductQuantityMatchExpected(this.quantity, 1);
            CartPage.isActualProductQuantityMatchExpected(this.quantity, 2);
        });

        it('8. After the user added products to cart, each product subtotal should be displayed correctly', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();

            // CartPage.isActualProductSubtotalMatchExpected(this.quantity, this.data[0].price, 1);
            // CartPage.isActualProductSubtotalMatchExpected(this.quantity, this.data[3].price, 2);
            // CartPage.isActualProductSubtotalMatchExpected(this.quantity, this.data[1].price, 3);
            CartPage.isActualEachProductSubtotalMatchExpected();
        });
    });
});

