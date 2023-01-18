import { CartPage } from "../../pages/cart/Cart";
import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('', () => {
    describe('', () => {
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

        it('21. The cart subtotal should be computed correctly after deleting a product', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.firstProductRemoveButtonElement.click();
            CartPage.isComputedMatchDisplayedCartSubtotal();
        });

        it('22. The cart subtotal should be computed correctly after deleting products', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.firstProductRemoveButtonElement.click();
            CartPage.firstProductRemoveButtonElement.click();
            CartPage.isComputedMatchDisplayedCartSubtotal();
        });

        it('23. The cart subtotal should be computed correctly after updating a product\'s quantity', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.thirdQuantityTextFieldElement.type('{selectAll}30');
            CartPage.updateCartButtonElement.click();
            CartPage.isComputedMatchDisplayedCartSubtotal();
        });

        it('24. The cart subtotal should be computed correctly after updating each product\'s quantity', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.updateEachProductQuantity();
            CartPage.updateCartButtonElement.click();
            CartPage.isComputedMatchDisplayedCartSubtotal();
        });

        it('25. The cart subtotal should be computed correctly after adding the products', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.isComputedMatchDisplayedCartSubtotal();
        });

        it('26. The cart subtotal should be computed correctly after adding a product', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.isComputedMatchDisplayedCartSubtotal();
        });

        it('27. The product subtotal should be computed correctly after updating a product\'s quantity', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.thirdQuantityTextFieldElement.type('{selectAll}30');
            CartPage.updateCartButtonElement.click();
            CartPage.thirdProductPriceTextElement.then(($price) => {
                cy.wrap(Number($price.text().trim().replace('$', '').replace(',', ''))).as('price');
                CartPage.thirdQuantityTextFieldElement.invoke('val')
                    .then((value) => {
                        expect(Number(value) * this.price)
                            .to.be.equal(this.price * 30);
                    });

            });
        });

        it('28. The product subtotal should be computed correctly after updating each product\'s quantity', function () {
            //todo
        });
    });
});