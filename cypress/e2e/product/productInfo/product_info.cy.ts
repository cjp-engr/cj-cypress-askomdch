import { ProductInfoTD } from "../../model";

describe('Product Info Page', () => {
    describe('Check the product info page scenario', () => {
        beforeEach(function () {
            cy.fixture<{ data: ProductInfoTD[] }>('product/product_info.json')
                .its("data")
                .then((data) => {
                    this.data = data;
                });
        });
    });
});