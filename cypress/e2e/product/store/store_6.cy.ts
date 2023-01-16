import { StorePage } from "../../../pages/product/Store";

describe('Store Page', () => {
    describe('Add to Cart Scenario', () => {

        beforeEach(() => {
            cy.fixture('product/store.json').as('store');
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        it('Test', () => {



        });
        it('1. After clicking the "add to cart" multiple times for a single product, the cart badge should be updated', () => {
            const productName: string = 'Blue Tshirt';
            const numberOfClicks: number = 5;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${productName}”`, numberOfClicks);
            cy.wait(1000);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(numberOfClicks);
            });

        });

        it('2. After clicking the "add to cart" to random products once, the cart badge should be updated', () => {
            const numberOfClicks: number = 1;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${StorePage.blueTShirtText}”`, numberOfClicks);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${StorePage.redShoesText}”`, numberOfClicks);
            StorePage.productsAddedToCart(`“${StorePage.denimBlueJeansText}”`, numberOfClicks);
            StorePage.productsAddedToCart(`“${StorePage.faintBlueJeansText}”`, numberOfClicks);
            cy.wait(1000);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(numberOfClicks * 4);
            });
        });

        it('3. After clicking the "add to cart" multiple times to random products, the cart badge should be updated', () => {
            const blueTShirtCount: number = 1;
            const redShoesCount: number = 2;
            const denimBlueJeansCount: number = 2;
            const faintBlueJeansCount: number = 4;

            const totalItems: number = blueTShirtCount + redShoesCount + denimBlueJeansCount + faintBlueJeansCount;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);

            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${StorePage.redShoesText}”`, redShoesCount);
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${StorePage.faintBlueJeansText}”`, faintBlueJeansCount);
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${StorePage.denimBlueJeansText}”`, denimBlueJeansCount);
            StorePage.pageOneButtonElement.click();
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${StorePage.blueTShirtText}”`, blueTShirtCount);
            cy.wait(1000);
            StorePage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect(Number($el.text().trim())).to.equal(totalItems);
            });
        });

        it.only('4. After clicking the "add to cart" multiple times for a single product, the added product should be displayed correctly in the cart list', () => {
            const numberOfItems: number = 4;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${StorePage.faintBlueJeansText}”`, numberOfItems);
            cy.wait(1000);
            StorePage.cartElement.realHover();
            StorePage.setProductIndex = 1;
            StorePage.dynamicCartListProductName.each(($el, index, list) => {
                expect($el.text().trim()).to.equal(StorePage.faintBlueJeansText);
            });
            StorePage.dynamicCartListProductQuantity.each(($el, index, list) => {
                expect(Number($el.text().trim().split(' ')[0])).to.equal(numberOfItems);
            });

            StorePage.dynamicCartListProductPrice.each(($el, index, list) => {
                expect($el.text().trim()).to.equal('$86.00');
            });
            //TODO
        });

        it('5. After clicking the "add to cart" to random products once, the added product should be displayed correctly in the cart list', () => {
            const numberOfItems: number = 4;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${StorePage.blueTShirtText}”`, 1);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${StorePage.redShoesText}”`, 1);
            StorePage.productsAddedToCart(`“${StorePage.denimBlueJeansText}”`, 1);
            StorePage.productsAddedToCart(`“${StorePage.faintBlueJeansText}”`, 1);
            cy.wait(1000);
            StorePage.cartElement.realHover();
            //TODO
        });

        it('6. After clicking the "add to cart" multiple times to random products, the added products should be displayed correctly in the cart list', () => {
            const blueShirt: number = 1;
            const redShoes: number = 2;
            const denimBlueJeans: number = 2;
            const faintBlueJeans: number = 4;
            const totalItems: number = blueShirt + redShoes + denimBlueJeans + faintBlueJeans;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);

            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${StorePage.redShoesText}”`, redShoes);
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${StorePage.faintBlueJeansText}”`, faintBlueJeans);
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${StorePage.denimBlueJeansText}”`, denimBlueJeans);

            StorePage.pageOneButtonElement.click();
            cy.wait(1000);
            StorePage.productsAddedToCart(`“${StorePage.blueTShirtText}”`, blueShirt);
            cy.wait(1000);
            //todo
        });

        it('7. Adding a product, the user should be redirected to View Cart page after clicking the View Cart button below the Add to Cart button', () => {
            const numberOfItems: number = 4;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${StorePage.blueTShirtText}”`, numberOfItems);
            //todo
        });

        it('8. Adding a product, the user should be redirected to View Cart page after clicking the View Cart button in the cart list', () => {
            const numberOfItems: number = 4;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${StorePage.denimBlueJeansText}”`, numberOfItems);
            //todo
        });

        it('9. Adding a product, the user should be redirected to Checkout page after clicking the Checkout button in the cart list', () => {
            const numberOfItems: number = 4;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.productsAddedToCart(`“${StorePage.redShoesText}”`, numberOfItems);
            //todo
        });

        it('10. After adding a single product, the subtotal should be computed correctly', () => {
            const numberOfItems: number = 4;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${StorePage.redShoesText}”`, numberOfItems);
            //todo
        });

        it('11. After adding products, the subtotal should be computed correctly', () => {
            const numberOfItems: number = 4;
            StorePage.cartElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.pageTwoButtonElement.click();
            StorePage.productsAddedToCart(`“${StorePage.redShoesText}”`, numberOfItems);
            StorePage.productsAddedToCart(`“${StorePage.faintBlueJeansText}”`, numberOfItems);
            StorePage.productsAddedToCart(`“${StorePage.redShoesText}”`, numberOfItems);
            //todo
        });
    });
});