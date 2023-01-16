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
        it('1. After selecting the "Default sorting", the products should be sorted in alphabetically and ascending order', function () {
            // let productNames = StorePage.sortName(StorePage.defaultSortingTextOptionValue);
            cy.wrap(StorePage.sortName(StorePage.defaultSortingTextOptionValue)).as('productNames');
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.defaultSorting);
            });
        });

        it('2. After selecting the "Sort by popularity", the products should be sorted according to popularity', function () {
            // let productNames = StorePage.sortName(StorePage.sortByPopularityTextOptionValue);
            cy.wrap(StorePage.sortName(StorePage.sortByPopularityTextOptionValue)).as('productNames');
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortPopularity);
            });
        });

        it('3. After selecting the "Sort by average rating", the products should be sorted according to the average rating', function () {
            // let productNames = StorePage.sortName(StorePage.sortByAverageRatingTextOptionValue);
            cy.wrap(StorePage.sortName(StorePage.sortByAverageRatingTextOptionValue)).as('productNames');
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortByAverageRating);
            });
        });

        it('4. After selecting the "Sort by latest", the products should be sorted according to what are the latest products', function () {
            // let productNames = StorePage.sortName(StorePage.sortByLatestTextOptionValue);
            cy.wrap(StorePage.sortName(StorePage.sortByLatestTextOptionValue)).as('productNames');
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortByLatest);
            });
        });

        it('5. After selecting the "Sort by price: low to high", the product names should be sorted according to price from low to high', function () {
            // let productNames = StorePage.sortName(StorePage.sortByPriceLowToHighTextOptionValue);
            cy.wrap(StorePage.sortName(StorePage.sortByPriceLowToHighTextOptionValue)).as('productNames');
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortByPriceLowToHigh);
            });

        });

        it('6. After selecting the "Sort by price: high to low", the product names should be sorted according to price from high to low', function () {
            // let productNames = StorePage.sortName(StorePage.sortByPriceHighToLowTextOptionValue);
            cy.wrap(StorePage.sortName(StorePage.sortByPriceHighToLowTextOptionValue)).as('productNames');
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortByPriceHighToLow);
            });
        });

        //todo
        it('7. After selecting the "Sort by price: low to high", the product prices should be sorted according to price from low to high', function () {
            let isPriceSorted = StorePage.sortPrice(StorePage.sortByPriceLowToHighTextOptionValue);
            // cy.wrap(StorePage.sortPrice(StorePage.sortByPriceLowToHighTextOptionValue)).as('isPriceSorted');
            expect(isPriceSorted).to.be.true;
        });

        //todo
        it('8. After selecting the "Sort by price: high to low", the products prices should be sorted according to price from high to low', function () {
            let isPriceSorted = StorePage.sortPrice(StorePage.sortByPriceHighToLowTextOptionValue);
            // cy.wrap(StorePage.sortPrice(StorePage.sortByPriceHighToLowTextOptionValue)).as('isPriceSorted');
            expect(this.isPriceSorted).to.be.true;
        });
    });
});
