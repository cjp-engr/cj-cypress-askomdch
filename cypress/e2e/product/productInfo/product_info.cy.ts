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

        it('2. After the user entered a number of items and clicked "Add to Cart", the cart badge should be updated', function () {
            let numberOfItems: string = '5';
            ProductInfoPage.cartElement.realHover();
            ProductInfoPage.emptyTheCartIfNotEmpty();
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.type(`{backspace}${numberOfItems}`);
            ProductInfoPage.productAddToCartButtonElement.click();
            ProductInfoPage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect($el.text().trim()).to.equal(numberOfItems);
            });

        });

        it('2.2. After the user entered a number of items and clicked "Add to Cart", the success message should be displayed - "<NUMBER OF ITEM ADDED> x “<PRODUCT NAME>” has been added to your cart."', function () {
            let numberOfItems: string = '5';
            ProductInfoPage.cartElement.realHover();
            ProductInfoPage.emptyTheCartIfNotEmpty();
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.type(`{backspace}${numberOfItems}`);
            ProductInfoPage.productAddToCartButtonElement.click();
            ProductInfoPage.successMessageTextElement.each(($el, index, $list) => {
                expect($el.text().trim().replace('View cart ', '')).to.equal(`${numberOfItems} × “${this.data[1].name}” have been added to your cart.`);
            });
        });

        it('2.3. After the user clicked "Add to Cart", the success message should be displayed - "“<PRODUCT NAME>” has been added to your cart."', function () {
            ProductInfoPage.cartElement.realHover();
            ProductInfoPage.emptyTheCartIfNotEmpty();
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.productAddToCartButtonElement.click();
            ProductInfoPage.successMessageTextElement.each(($el, index, $list) => {
                expect($el.text().trim().replace('View cart ', '')).to.equal(`“${this.data[1].name}” has been added to your cart.`);
            });
        });

        it('3. After the user added a product to cart and clicked the view cart, the user should be redirected Cart Page', function () {
            let numberOfItems: string = '5';
            ProductInfoPage.cartElement.realHover();
            ProductInfoPage.emptyTheCartIfNotEmpty();
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.type(`{backspace}${numberOfItems}`);
            ProductInfoPage.productAddToCartButtonElement.click();
            ProductInfoPage.productInfoViewCartButtonElement.click();
            cy.url().should('eq', `${Cypress.env('onlineStore')}cart/`)
        });

        //! issue here - The expected and actual are match but still showing an error
        it('4. The breadcrumb should display the correct text', function () {
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[0].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.productBreadCrumbElement.should('contain.text', this.data[0].breadCrumb);
        });

        it('5. The categories should be displayed correctly', function () {
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[0].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.categoriesElement.should('contain.text', this.data[0].categories);
        });

        it('6. After the user entered a "0" value, the validation message should be displayed', function () {
            let numberOfItems: string = '0';
            ProductInfoPage.cartElement.realHover();
            ProductInfoPage.emptyTheCartIfNotEmpty();
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.type(`{backspace}${numberOfItems}`);
            ProductInfoPage.productAddToCartButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.invoke('prop', 'validationMessage')
                .then((validationMessage) => {
                    console.log(validationMessage);
                    expect(validationMessage).to.equal('Value must be greater than or equal to 1.');
                });
        });

        //! issue here - special chars can be entered manually but not on this test
        it('7. After the user entered a "0-+3" value, the validation message should be displayed', function () {
            let numberOfItems: string = '1++';
            ProductInfoPage.cartElement.realHover();
            ProductInfoPage.emptyTheCartIfNotEmpty();
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.type(`{backspace}${numberOfItems}`);
            ProductInfoPage.productAddToCartButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.invoke('prop', 'validationMessage')
                .then((validationMessage) => {
                    console.log(validationMessage);
                    expect(validationMessage).to.equal('Please enter a number.');
                });
        });

        it('8. After emptying the "number of items" field, the product should be successfully added to cart and the cart badge should be updated', function () {
            ProductInfoPage.cartElement.realHover();
            ProductInfoPage.emptyTheCartIfNotEmpty();
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.numberOfItemsTextFieldElement.type(`{backspace}`);
            ProductInfoPage.productAddToCartButtonElement.click();
            ProductInfoPage.getCartBadgeTotalItems.each(($el, index, $list) => {
                expect($el.text().trim()).to.equal('1');
            });
            ProductInfoPage.successMessageTextElement.each(($el, index, $list) => {
                expect($el.text().trim().replace('View cart ', '')).to.equal(`“${this.data[1].name}” has been added to your cart.`);
            });
        });

        it('9. The description below the "description tab" and beside the product should match', function () {
            ProductInfoPage.searchProductsTextFieldElement.type(this.data[1].name);
            ProductInfoPage.searchButtonElement.click();
            ProductInfoPage.descriptionTabTextElement.should('have.text', this.data[1].description);
            ProductInfoPage.productDescriptionTextElement.should('have.text', this.data[1].description);
        });

        //TODO
        it('10. If the product is on sale, the "Sale!" badge, the old and new prices should display', () => {

        });

        //TODO
        it('11. The image should not be broken', () => {

        });

        //TODO
        it('12. The image should be zoomed in', () => {

        });
    });
});