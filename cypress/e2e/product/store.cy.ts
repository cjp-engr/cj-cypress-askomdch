import { StorePage } from "../../pages/product/Store";
import { StoreSortingTD, StoreTD } from "../model";

describe('Store Page', () => {
    describe('Sorting of products scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store.json').as('store')
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });
        it('1. After selecting the "Default sorting", the products should be sorted in alphabetically and ascending order', () => {
            let productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.defaultSorting);
            });

        });

        it('2. After selecting the "Sort by popularity", the products should be sorted according to popularity', () => {
            let productNames = StorePage.nameSorted(StorePage.sortByPopularityTextOptionValue);
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortPopularity);
            });
        });

        it('3. After selecting the "Sort by average rating", the products should be sorted according to the average rating', () => {
            let productNames = StorePage.nameSorted(StorePage.sortByAverageRatingTextOptionValue);
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortByAverageRating);
            });
        });

        it('4. After selecting the "Sort by latest", the products should be sorted according to what are the latest products', () => {
            let productNames = StorePage.nameSorted(StorePage.sortByLatestTextOptionValue);
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortByLatest);
            });
        });

        it('5. After selecting the "Sort by price: low to high", the product names should be sorted according to price from low to high', () => {
            let productNames = StorePage.nameSorted(StorePage.sortByPriceLowToHighTextOptionValue);
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortByPriceLowToHigh);
            });

        });

        it('6. After selecting the "Sort by price: high to low", the product names should be sorted according to price from high to low', () => {
            let productNames = StorePage.nameSorted(StorePage.sortByPriceHighToLowTextOptionValue);
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortByPriceHighToLow);
            });
        });

        it('7. After selecting the "Sort by price: low to high", the product prices should be sorted according to price from low to high', () => {
            let isPriceSorted = StorePage.priceSorted(StorePage.sortByPriceLowToHighTextOptionValue);
            expect(isPriceSorted).to.be.true;
        });

        it('After selecting the "Sort by price: high to low", the products prices should be sorted according to price from high to low', () => {
            let isPriceSorted = StorePage.priceSorted(StorePage.sortByPriceHighToLowTextOptionValue);
            expect(isPriceSorted).to.be.true;
        });
    });

    describe.only('Search Products Scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store.json').as('store')
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

        it('3. After entering the "Dark Grey Jeans" to text field and clicking the Search, the products that contains "Dark Grey Jeans" should be displayed - there is an issue here', () => {
            cy.get<StoreTD>('@store').then((data) => {
                StorePage.searchProductsTextFieldElement.type(data.searchProduct['Dark Grey Jeans']);
                StorePage.searchButtonElement.click();
            });
        });

    });
});
