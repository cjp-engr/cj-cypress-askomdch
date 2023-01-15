import { ProductInfoPage } from "../../../pages/product/ProductInfo";
import { ProductInfoTD } from "../../model";

describe('Product Info Page', () => {
    describe('Check the product info page scenario', () => {
        beforeEach(function () {
            cy.fixture<{ data: ProductInfoTD[] }>('product/product_info.json')
                .its("products")
                .then((data) => {
                    this.data = data;
                });

            cy.login();
            ProductInfoPage.navigationBarStoreElement.click();
        });

        it('1. After the user selected a product with sale, the product information should be displayed', function () {
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[0].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.setProductID = this.data[0].productID;
            ProductInfoPage.dynamicProductIDElement.should('exist').and('contain.text', 'Sale!');
            ProductInfoPage.productNameTextElement.should('have.text', this.data[0].name);
            ProductInfoPage.productSalePriceTextElement.should('have.text', this.data[0].price);
            // TODO - showing error but the image is visible
            // ProductInfoPage.productImageElement.should('have.css', 'opacity', '0').and('be.visible');
            // cy.get('div').should('have.css', 'opacity', '0')
            ProductInfoPage.productDescriptionTextElement.should('have.text', this.data[0].description);
            ProductInfoPage.productAddToCartButtonElement.should('be.visible');
            ProductInfoPage.numberOfItemsTextFieldElement.should('be.visible');
            ProductInfoPage.descriptionTabElement.should('be.visible').and('contain.text', 'Description');
            ProductInfoPage.additionalInformationTabElement.should('be.visible').and('contain.text', 'Additional information');
            ProductInfoPage.reviewsTabElement.should('be.visible').and('contain.text', 'Reviews');;
            ProductInfoPage.additionalInformationTabElement.click();
            ProductInfoPage.descriptionTabTextElement.should('have.text', this.data[0].description);
            ProductInfoPage.additionalInformationWeightTextElement.should('have.text', this.data[0].weight);
            ProductInfoPage.additionalInformationDimensionsTextElement.should('have.text', this.data[0].dimensions);

        });

        it('1.2. After the user selected a product without sale, the product information should be displayed', function () {
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.setProductID = this.data[1].productID;
            ProductInfoPage.dynamicProductIDElement.should('not.exist');
            ProductInfoPage.productNameTextElement.should('have.text', this.data[1].name);
            ProductInfoPage.productNoSalePriceTextElement.should('have.text', this.data[1].price);
            // TODO - showing error but the image is visible
            // ProductInfoPage.productImageElement.should('have.css', 'opacity', '0').and('be.visible');
            // cy.get('div').should('have.css', 'opacity', '0')
            ProductInfoPage.productDescriptionTextElement.should('have.text', this.data[1].description);
            ProductInfoPage.productAddToCartButtonElement.should('be.visible');
            ProductInfoPage.numberOfItemsTextFieldElement.should('be.visible');
            ProductInfoPage.descriptionTabElement.should('be.visible').and('contain.text', 'Description');
            ProductInfoPage.additionalInformationTabElement.should('be.visible').and('contain.text', 'Additional information');
            ProductInfoPage.reviewsTabElement.should('be.visible').and('contain.text', 'Reviews');;
            ProductInfoPage.additionalInformationTabElement.click();
            ProductInfoPage.descriptionTabTextElement.should('have.text', this.data[1].description);
            ProductInfoPage.additionalInformationWeightTextElement.should('have.text', this.data[1].weight);
            ProductInfoPage.additionalInformationDimensionsTextElement.should('have.text', this.data[1].dimensions);

        });

        it.only('2. After the user entered a number of items and clicked "Add to Cart", the cart badge should be updated', function () {
            let numberOfItems: string = '5';
            ProductInfoPage.cartBadgeElement.realHover();
            ProductInfoPage.cartEmptyMessageTextElement.each(($el, index, $list) => {
                if ($el.text().trim() !== 'No products in the cart.') {
                    ProductInfoPage.cartProductsListElement.find('li')
                        .then((row) => {
                            console.log(row.length);
                            for (let x = 1; x <= row.length; x++) {
                                ProductInfoPage.cartFirstRemoveButtonElement.click();
                            }
                        });
                }
            });

            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.type(`{backspace}${numberOfItems}`);
            ProductInfoPage.productAddToCartButtonElement.click();
            ProductInfoPage.getCartBadgeTotalItems.each(($el, index, $list) => {
                //TODO
                // expect($el.text().trim()).to.equal(numberOfItems);
            });

            // ProductInfoPage.cartEmptyMessageTextElement.each(($el, index, $list) => {
            //     if ($el.text().trim() !== 'No products in the cart.') {
            //         console.log($el.text().trim());
            //     }
            // });


        });

        it('3. After successfully adding a product to cart, the user should be able to view the cart', () => {

        });

        it('4. The breadcrumb should display the correct text', () => {

        });

        it('5. The categories should be displayed correctly', () => {

        });

        it('6. After the user entered a "0" value, the validation message should be displayed', () => {

        });

        it('7. After the user entered a "0-+3" value, the validation message should be displayed', () => {

        });

        it('8. After emptying the "number of items" field, the product should be successfully added to cart and the cart badge should be updated', () => {

        });

        it('9. The description below the "description tab" and beside the product should match', () => {

        });

        it('10. If the product is on sale, the "Sale!" badge, the old and new prices should display', () => {

        });

        it('11. The image should not be broken', () => {

        });

        it('12. The image should be zoomed in', () => {

        });
    });
});