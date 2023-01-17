import { StorePage } from "../../../pages/product/Store";
import { StoreSortingTD } from "../../model";

describe('Store Page', () => {
    describe('Filter by price and Sorting', () => {
        beforeEach(() => {
            cy.fixture('product/store_1.json').as('store');
            cy.wrap(60).as('minPrice');
            cy.wrap(100).as('maxPrice');
            cy.wrap(5).as('sliderMoveToLeft');
            cy.wrap(5).as('sliderMoveToRight');
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        it('1. After filtering the price to "$60 - $100" and selecting the "Default sorting", the products should be sorted in alphabetically and ascending order', function () {

            StorePage.sliderRightToLeft(this.sliderMoveToLeft);
            StorePage.sliderLeftToRight(this.sliderMoveToRight);

            StorePage.filterByPriceButtonElement.contains('Filter').click();
            cy.wrap(StorePage.sortName(StorePage.defaultSortingTextOptionValue)).as('productNames');
            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(this.minPrice, this.maxPrice);
                    });
                }
            });

            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.defaultSorting60to100);
            });


        });

        it('2. After filtering the price to "$60 - $100" and selecting the "Sort by popularity", the products should be sorted according to popularity', function () {
            StorePage.sliderRightToLeft(this.sliderMoveToLeft);
            StorePage.sliderLeftToRight(this.sliderMoveToRight);

            StorePage.filterByPriceButtonElement.contains('Filter').click();
            cy.wrap(StorePage.sortName(StorePage.sortByPopularityTextOptionValue)).as('productNames');
            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(this.minPrice, this.maxPrice);
                    });
                }
            });

            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortPopularity60to100);
            });


        });

        it('3. After filtering the price to "$60 - $100" and selecting the "Sort by average rating", the products should be sorted according to the average rating', function () {
            StorePage.sliderRightToLeft(this.sliderMoveToLeft);
            StorePage.sliderLeftToRight(this.sliderMoveToRight);

            StorePage.filterByPriceButtonElement.contains('Filter').click();
            cy.wrap(StorePage.sortName(StorePage.sortByAverageRatingTextOptionValue)).as('productNames');
            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(this.minPrice, this.maxPrice);
                    });
                }
            });

            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortByAverageRating60to100);
            });

        });

        it('4. After filtering the price to "$60 - $100" and selecting the "Sort by latest", the products should be sorted according to what are the latest products', function () {

            StorePage.sliderRightToLeft(this.sliderMoveToLeft);
            StorePage.sliderLeftToRight(this.sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            cy.wrap(StorePage.sortName(StorePage.sortByLatestTextOptionValue)).as('productNames');
            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(this.minPrice, this.maxPrice);
                    });
                }
            });

            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortByLatest60to100);
            });

        });

        it('5. After filtering the price to "$60 - $100" and selecting the "Sort by price: low to high", the products should be sorted according to price from low to high', function () {

            StorePage.sliderRightToLeft(this.sliderMoveToLeft);
            StorePage.sliderLeftToRight(this.sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            cy.wrap(StorePage.sortName(StorePage.sortByPriceLowToHighTextOptionValue)).as('productNames');
            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(this.minPrice, this.maxPrice);
                    });
                }
            });

            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortByPriceLowToHigh60to100);
            });

        });

        it('6. After filtering the price to "$60 - $100" and selecting the "Sort by price: high to low", the products should be sorted according to price from high to low', function () {

            StorePage.sliderRightToLeft(this.sliderMoveToLeft);
            StorePage.sliderLeftToRight(this.sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            cy.wrap(StorePage.sortName(StorePage.sortByPriceHighToLowTextOptionValue)).as('productNames');
            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(this.minPrice, this.maxPrice);
                    });
                }
            });
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.sortByPriceHighToLow60to100);
            });

        });

        it('7. After filtering the price to "$10" and selecting the "Default sorting", the products should be sorted in alphabetically and ascending order', function () {
            cy.wrap(10).as('price');
            cy.wrap(14).then((value) => {
                StorePage.sliderRightToLeft(value);
            });

            StorePage.filterByPriceButtonElement.contains('Filter').click();
            // productNames = StorePage.sortName(StorePage.defaultSortingTextOptionValue);
            cy.wrap(StorePage.sortName(StorePage.defaultSortingTextOptionValue)).as('productNames');
            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.least(this.price);
                    })
                }
            });

            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(this.productNames).to.deep
                    .equal(data.defaultSorting10);
            });

        });
    });
});