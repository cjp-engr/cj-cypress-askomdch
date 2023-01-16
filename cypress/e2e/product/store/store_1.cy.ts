import { StorePage } from "../../../pages/product/Store";
import { StoreSortingTD, StoreTD } from "../../model";

let data1: any;

describe('Store Page', () => {
    describe('Sorting of products scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store_1.json').as('store');
            cy.fixture<{ data: StoreSortingTD }>('product/store_1.json')

                .then((data) => {
                    data1 = data;
                });

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

        it('8. After selecting the "Sort by price: high to low", the products prices should be sorted according to price from high to low', () => {
            let isPriceSorted = StorePage.priceSorted(StorePage.sortByPriceHighToLowTextOptionValue);
            expect(isPriceSorted).to.be.true;
        });
    });
});
