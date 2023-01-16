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
        });

        it('1. After clicking the "add to cart" multiple times for a single product, the cart badge should be updated', function () {
            const productName: string = 'Blue Tshirt';
            const numberOfClicks: number = 5;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${this.data[0].name}”`, numberOfClicks);
            cy.wait(1000);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(numberOfClicks);
            });

        });

        it('2. After clicking the "add to cart" to random products once, the cart badge should be updated', function () {
            const numberOfClicks: number = 1;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${this.data[0].name}”`, numberOfClicks);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[1].name}”`, numberOfClicks);
            StorePage.productsAddedToCart(`“${this.data[2].name}”`, numberOfClicks);
            StorePage.productsAddedToCart(`“${this.data[3].name}”`, numberOfClicks);
            cy.wait(1000);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(numberOfClicks * 4);
            });
        });

        it('3. After clicking the "add to cart" multiple times to random products, the cart badge should be updated', function () {
            const blueTShirtCount: number = 1;
            const redShoesCount: number = 2;
            const denimBlueJeansCount: number = 2;
            const faintBlueJeansCount: number = 4;

            const totalItems: number = blueTShirtCount + redShoesCount + denimBlueJeansCount + faintBlueJeansCount;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);

            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[1].name}”`, redShoesCount);
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${this.data[3].name}”`, faintBlueJeansCount);
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${this.data[2].name}”`, denimBlueJeansCount);
            StorePage.pageOneButtonElement.click();
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${this.data[0].name}”`, blueTShirtCount);
            cy.wait(1000);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(totalItems);
            });
        });

        it('4. After clicking the "add to cart" multiple times for a single product, the added product should be displayed correctly in the cart list', function () {
            const numberOfItems: number = 4;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[3].name}”`, numberOfItems);
            cy.wait(1000);
            StorePage.cartButtonElement.realHover();
            StorePage.checkProductDetailsInCartList(1, this.data[3].name, numberOfItems, this.data[3].price);
        });

        it('5. After clicking the "add to cart" to random products once, the added product should be displayed correctly in the cart list', function () {
            const numberOfItems: number = 4;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${this.data[0].name}”`, 1);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[1].name}”`, 1);
            StorePage.productsAddedToCart(`“${this.data[2].name}”`, 1);
            StorePage.productsAddedToCart(`“${this.data[3].name}”`, 1);
            cy.wait(1000);
            StorePage.cartButtonElement.realHover();
            StorePage.checkProductDetailsInCartList(1, this.data[0].name, 1, this.data[0].price);
            StorePage.checkProductDetailsInCartList(2, this.data[1].name, 1, this.data[1].price);
            StorePage.checkProductDetailsInCartList(3, this.data[2].name, 1, this.data[2].price);
            StorePage.checkProductDetailsInCartList(4, this.data[3].name, 1, this.data[3].price);

        });

        it('6. After clicking the "add to cart" multiple times to random products, the added products should be displayed correctly in the cart list', function () {
            const blueShirt: number = 1;
            const redShoes: number = 2;
            const denimBlueJeans: number = 2;
            const faintBlueJeans: number = 4;
            const totalItems: number = blueShirt + redShoes + denimBlueJeans + faintBlueJeans;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);

            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[1].name}”`, redShoes);
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${this.data[3].name}”`, faintBlueJeans);
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${this.data[2].name}”`, denimBlueJeans);

            StorePage.pageOneButtonElement.click();
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${this.data[0].name}”`, blueShirt);
            cy.wait(1000);

            StorePage.cartButtonElement.realHover();
            StorePage.checkProductDetailsInCartList(1, this.data[1].name, redShoes, this.data[1].price);
            StorePage.checkProductDetailsInCartList(2, this.data[3].name, faintBlueJeans, this.data[3].price);
            StorePage.checkProductDetailsInCartList(3, this.data[2].name, denimBlueJeans, this.data[2].price);
            StorePage.checkProductDetailsInCartList(4, this.data[0].name, blueShirt, this.data[0].price);
        });

        it('7. Adding a product, the user should be redirected to View Cart page after clicking the View Cart button below the Add to Cart button', function () {
            const numberOfItems: number = 4;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${this.data[0].name}”`, numberOfItems);
            StorePage.allViewCartButtonElement.click();
            cy.url().then((url) => {
                expect(url).to.be.equal(`${Cypress.env('onlineStore')}cart/`);
            });
        });

        it('8. Adding a product, the user should be redirected to View Cart page after clicking the View Cart button in the cart list', function () {
            const numberOfItems: number = 4;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[2].name}”`, numberOfItems);
            StorePage.cartButtonElement.realHover();
            StorePage.cartButtonElement.click();
            cy.url().then((url) => {
                expect(url).to.be.equal(`${Cypress.env('onlineStore')}cart/`);
            });
        });

        it('9. Adding a product, the user should be redirected to Checkout page after clicking the Checkout button in the cart list', function () {
            const numberOfItems: number = 4;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[1].name}”`, numberOfItems);
            StorePage.cartButtonElement.realHover();
            StorePage.cartCheckoutButtonElement.click();
            cy.url().then((url) => {
                expect(url).to.be.equal(`${Cypress.env('onlineStore')}checkout/`);
            });
        });

        it('10. After adding a single product, the subtotal should be computed correctly', function () {
            const numberOfItems: number = 4;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[1].name}”`, numberOfItems);
            StorePage.setProductIndex = 1;
            StorePage.dynamicCartListProductPrice.each(($el, index, list) => {
                expect($el.text().trim()).to.equal(this.data[1].price);
            });
        });

        it.only('11. After adding products, the subtotal should be computed correctly', function () {
            const numberOfItems: number = 4;
            let length: number = 0;
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${this.data[1].name}”`, numberOfItems);
            StorePage.productsAddedToCart(`“${this.data[3].name}”`, numberOfItems);
            StorePage.productsAddedToCart(`“${this.data[1].name}”`, numberOfItems);
            length = StorePage.cartAllProductLength();

            cy.wrap(length).then(() => {
                for (let i = 0; i < length; i++) {
                    cy.wrap(i).then(() => {
                        StorePage.setProductIndex = i;
                        StorePage.dynamicCartListProductPrice.each(($el, index, list) => {
                            //todo - text is not printing
                            console.log($el.text().trim());
                        });
                    })
                }
            });
        });
    });
});