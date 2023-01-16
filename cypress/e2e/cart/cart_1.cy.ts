import { CartPage } from "../../pages/cart/Cart";
import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Cart Page', () => {
    describe('Adding a single product', () => {

        beforeEach(function () {

            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    this.data = data;
                });
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);

        });

        it('1. After the user added a product to cart, the product name should be displayed correctly', function () {
            const productCount: number = 5;

            StorePage.addProductToCart(`“${this.data[0].name}”`, productCount);
            StorePage.pageTwoButtonElement.click();
            StorePage.cartButtonElement.click();
            cy.wait(1000);
            CartPage.isActualSingleProductMatchExpected(this.data[0].name);
        });

        it('2. After the user added a product to cart, the product price should be displayed correctly', function () {
            const productCount: number = 5;

            StorePage.addProductToCart(`“${this.data[0].name}”`, productCount);
            StorePage.pageTwoButtonElement.click();
            StorePage.cartButtonElement.click();
            cy.wait(1000);
            CartPage.isActualSingleProductPriceMatchExpected(this.data[0].price);
        });

        it('3. After the user added a product to cart, the product quantity should be displayed correctly', () => {

        });

        it('4. After the user added a product to cart, the product subtotal should be displayed correctly', () => {

        });


    });

    describe('Adding a multiple products', () => {
        beforeEach(function () {
            const numberOfClicks: number = 5;
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    this.data = data;
                });
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
        });
        it('5. After the user added products to cart, each product name should be displayed correctly', () => {

        });

        it('6. After the user added products to cart, each product price should be displayed correctly', () => {

        });

        it('7. After the user added products to cart, each product quantity should be displayed correctly', () => {

        });

        it('8. After the user added products to cart, each product subtotal should be displayed correctly', () => {

        });
    });
});

