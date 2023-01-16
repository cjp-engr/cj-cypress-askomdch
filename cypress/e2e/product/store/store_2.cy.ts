import { StorePage } from "../../../pages/product/Store";
import { StoreSortingTD, StoreTD } from "../../model";

describe('Store Page', () => {
    describe('Search Products Scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store.json').as('store');
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });
        it('1. After entering the "denim{multiSpace}" to text field and clicking the Search, the products that contains "denim" should be displayed', () => {
            let keyword: string = 'denim';
            let productNames: string[] = [];
            cy.get<StoreTD>('@store').then((data) => {
                StorePage.searchProductsTextFieldElement.type(data.searchProduct['denimWithMultipleSpace']);
                StorePage.searchButtonElement.click();
            });
            StorePage.allProductNameTextElement.each(($el, index, list) => {
                productNames[index] = $el.text();
                expect(productNames[index].toLowerCase().includes(keyword)).to.be.true;
            });

            //! There will be an issue here
            //! Actual: Search results: “denim ”
            //! Expected: Search results: “denim”
            StorePage.productHeaderTextElement.should('have.text', `Search results: “${keyword}”`);
        });

        it('2. After entering the "blue" to text field and clicking the Search, the products that contains "blue" should be displayed', () => {
            let keyword: string = 'blue';
            let productNames: string[] = [];
            cy.get<StoreTD>('@store').then((data) => {
                StorePage.searchProductsTextFieldElement.type(data.searchProduct[keyword]);
                StorePage.searchButtonElement.click();
            });
            StorePage.allProductNameTextElement.each(($el, index, list) => {
                productNames[index] = $el.text();
                expect(productNames[index].toLowerCase().includes(keyword)).to.be.true;
            });

            StorePage.productHeaderTextElement.should('have.text', `Search results: “${keyword}”`);
        });

        it('3. After entering the "Dark Grey Jeans" to text field and clicking the Search, the user should be redirected to "product\'s info page"', () => {
            cy.get<StoreTD>('@store').then((data) => {
                StorePage.searchProductsTextFieldElement.type(data.searchProduct['Dark Grey Jeans']);
                StorePage.searchButtonElement.click();
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.searchProduct['darkGreyJeansLink']}`);
            });

        });

    });
});
