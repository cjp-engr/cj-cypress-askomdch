import { StorePage } from "../../../pages/product/Store";
import { StoreProductListTD } from "../../model";

describe('Store Page', () => {
    describe('Add to Cart Scenario', () => {

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

        it('1. After clicking the "add to cart" multiple times for a single product, the cart badge should be updated', function () {

            cy.wrap(7).as('numberOfClicks').then((quantity) => {
                StorePage.addProductToCart(`“${this.data[0].name}”`, quantity);
            });

            cy.wait(1500);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(this.numberOfClicks);
            });

        });

        it('2. After clicking the "add to cart" to random products once, the cart badge should be updated', function () {

            cy.wrap(1).as('numberOfClicks').then((quantity) => {
                StorePage.addProductToCart(`“${this.data[0].name}”`, quantity);
                StorePage.pageTwoButtonElement.click();
                StorePage.addProductToCart(`“${this.data[1].name}”`, quantity);
                StorePage.addProductToCart(`“${this.data[2].name}”`, quantity);
                StorePage.addProductToCart(`“${this.data[3].name}”`, quantity);
            });

            cy.wait(1000);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(this.numberOfClicks * 4);
            });
        });

        it('3. After clicking the "add to cart" multiple times to random products, the cart badge should be updated', function () {

            StorePage.pageTwoButtonElement.click();
            cy.wrap(2).as('redShoesCount').then((quantity) => {
                StorePage.addProductToCart(`“${this.data[1].name}”`, quantity);
            });

            cy.wait(1000);
            cy.wrap(4).as('faintBlueJeansCount').then((quantity) => {
                StorePage.addProductToCart(`“${this.data[3].name}”`, quantity);
            });

            cy.wait(1000);
            cy.wrap(2).as('denimBlueJeansCount').then((quantity) => {
                StorePage.addProductToCart(`“${this.data[2].name}”`, quantity);
            });

            StorePage.pageOneButtonElement.click();
            cy.wait(1000);
            cy.wrap(1).as('blueTShirtCount').then((quantity) => {
                StorePage.addProductToCart(`“${this.data[0].name}”`, quantity);
            });

            cy.wait(1000);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(this.blueTShirtCount + this.redShoesCount + this.denimBlueJeansCount + this.faintBlueJeansCount);
            });
        });

        it('4. After clicking the "add to cart" multiple times for a single product, the added product should be displayed correctly in the cart list', function () {
            cy.wrap(4).as('numberOfItems');

            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.numberOfItems);
            cy.wait(1000);
            StorePage.cartButtonElement.realHover();
            StorePage.isActualDetailsMatchExpected(1, this.data[3].name, this.numberOfItems, this.data[3].price);
        });

        it('5. After clicking the "add to cart" to random products once, the added product should be displayed correctly in the cart list', function () {
            cy.wrap(1).as('numberOfItems').then((quantity) => {
                StorePage.addProductToCart(`“${this.data[0].name}”`, quantity);
                StorePage.pageTwoButtonElement.click();
                StorePage.addProductToCart(`“${this.data[1].name}”`, quantity);
                StorePage.addProductToCart(`“${this.data[2].name}”`, quantity);
                StorePage.addProductToCart(`“${this.data[3].name}”`, quantity);
            });

            cy.wait(1000);
            StorePage.cartButtonElement.realHover();
            StorePage.isActualDetailsMatchExpected(1, this.data[0].name, this.numberOfItems, this.data[0].price);
            StorePage.isActualDetailsMatchExpected(2, this.data[1].name, this.numberOfItems, this.data[1].price);
            StorePage.isActualDetailsMatchExpected(3, this.data[2].name, this.numberOfItems, this.data[2].price);
            StorePage.isActualDetailsMatchExpected(4, this.data[3].name, this.numberOfItems, this.data[3].price);

        });

        it('6. After clicking the "add to cart" multiple times to random products, the added products should be displayed correctly in the cart list', function () {
            cy.wrap(1).as('blueTShirtCount');
            cy.wrap(2).as('redShoesCount');
            cy.wrap(2).as('denimBlueJeansCount');
            cy.wrap(4).as('faintBlueJeansCount');

            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.redShoes);
            cy.wait(1000);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.faintBlueJeans);
            cy.wait(1000);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.denimBlueJeans);

            StorePage.pageOneButtonElement.click();
            cy.wait(1000);
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.blueShirt);
            cy.wait(1000);

            StorePage.cartButtonElement.realHover();
            StorePage.isActualDetailsMatchExpected(1, this.data[1].name, this.redShoes, this.data[1].price);
            StorePage.isActualDetailsMatchExpected(2, this.data[3].name, this.faintBlueJeans, this.data[3].price);
            StorePage.isActualDetailsMatchExpected(3, this.data[2].name, this.denimBlueJeans, this.data[2].price);
            StorePage.isActualDetailsMatchExpected(4, this.data[0].name, this.blueShirt, this.data[0].price);
        });

        it('7. Adding a product, the user should be redirected to View Cart page after clicking the View Cart button below the Add to Cart button', function () {

            cy.wrap(4).as('numberOfItems').then((quantity) => {
                StorePage.addProductToCart(`“${this.data[0].name}”`, quantity);
            });

            StorePage.allViewCartButtonElement.click();
            cy.url().then((url) => {
                expect(url).to.be.equal(`${Cypress.env('onlineStore')}cart/`);
            });
        });

        it('8. Adding a product, the user should be redirected to View Cart page after clicking the View Cart button in the cart list', function () {
            cy.wrap(4).as('numberOfItems');

            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.numberOfItems);
            StorePage.cartButtonElement.realHover();
            StorePage.cartButtonElement.click();
            cy.url().then((url) => {
                expect(url).to.be.equal(`${Cypress.env('onlineStore')}cart/`);
            });
        });

        it('9. Adding a product, the user should be redirected to Checkout page after clicking the Checkout button in the cart list', function () {
            cy.wrap(4).as('numberOfItems');

            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.numberOfItems);
            StorePage.cartButtonElement.realHover();
            StorePage.cartCheckoutButtonElement.click();
            cy.url().then((url) => {
                expect(url).to.be.equal(`${Cypress.env('onlineStore')}checkout/`);
            });
        });

        it('10. After adding a single product, the subtotal should be computed correctly', function () {
            cy.wrap(4).as('numberOfItems');

            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.numberOfItems);
            StorePage.isActualPriceMatchExpected(1, this.data[1].price);
        });

        it('11. After adding products, the subtotal should be computed correctly', function () {
            cy.wrap(4).as('numberOfItems');

            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.numberOfItems);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.numberOfItems);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.numberOfItems);
            StorePage.cartButtonElement.realHover();
            cy.wait(1000);
            StorePage.isActualSubtotalMatchExpected();
        });
    });
});