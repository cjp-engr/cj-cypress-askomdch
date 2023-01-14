import { StorePage } from "../../../pages/product/Store";
import { StoreSortingTD } from "../../model";

describe('Store Page', () => {
    describe('Filter by price and Sorting', () => {
        beforeEach(() => {
            cy.fixture('product/store.json').as('store')
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        it('1. After filtering the price to "$60 - $100" and selecting the "Default sorting", the products should be sorted in alphabetically and ascending order', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            let sliderMoveToLeft: number = 5;
            let sliderMoveToRight: number = 5;
            let productNames: string[] = [];
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(sliderMoveToLeft);
            StorePage.sliderLeftToRight(sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(minPrice, maxPrice);
                    })
                }
            });

            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.defaultSorting60to100);
            });
        });

        it('2. After filtering the price to "$60 - $100" and selecting the "Sort by popularity", the products should be sorted according to popularity', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            let sliderMoveToLeft: number = 5;
            let sliderMoveToRight: number = 5;
            let productNames: string[] = [];
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(sliderMoveToLeft);
            StorePage.sliderLeftToRight(sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            productNames = StorePage.nameSorted(StorePage.sortByPopularityTextOptionValue);
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(minPrice, maxPrice);
                    })
                }
            });

            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortPopularity60to100);
            });
        });

        it('3. After filtering the price to "$60 - $100" and selecting the "Sort by average rating", the products should be sorted according to the average rating', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            let sliderMoveToLeft: number = 5;
            let sliderMoveToRight: number = 5;
            let productNames: string[] = [];
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(sliderMoveToLeft);
            StorePage.sliderLeftToRight(sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            productNames = StorePage.nameSorted(StorePage.sortByAverageRatingTextOptionValue);
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(minPrice, maxPrice);
                    })
                }
            });
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortByAverageRating60to100);
            });
        });

        it('4. After filtering the price to "$60 - $100" and selecting the "Sort by latest", the products should be sorted according to what are the latest products', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            let sliderMoveToLeft: number = 5;
            let sliderMoveToRight: number = 5;
            let productNames: string[] = [];
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(sliderMoveToLeft);
            StorePage.sliderLeftToRight(sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            productNames = StorePage.nameSorted(StorePage.sortByLatestTextOptionValue);
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(minPrice, maxPrice);
                    })
                }
            });
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortByLatest60to100);
            });
        });

        it('5. After filtering the price to "$60 - $100" and selecting the "Sort by price: low to high", the products should be sorted according to price from low to high', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            let sliderMoveToLeft: number = 5;
            let sliderMoveToRight: number = 5;
            let productNames: string[] = [];
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(sliderMoveToLeft);
            StorePage.sliderLeftToRight(sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            productNames = StorePage.nameSorted(StorePage.sortByPriceLowToHighTextOptionValue);
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(minPrice, maxPrice);
                    })
                }
            });
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortByPriceLowToHigh60to100);
            });
        });

        it('6. After filtering the price to "$60 - $100" and selecting the "Sort by price: high to low", the products should be sorted according to price from high to low', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            let sliderMoveToLeft: number = 5;
            let sliderMoveToRight: number = 5;
            let productNames: string[] = [];
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(sliderMoveToLeft);
            StorePage.sliderLeftToRight(sliderMoveToRight);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            productNames = StorePage.nameSorted(StorePage.sortByPriceHighToLowTextOptionValue);
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(minPrice, maxPrice);
                    })
                }
            });
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.sortByPriceHighToLow60to100);
            });
        });

        it('7. After filtering the price to "$10" and selecting the "Default sorting", the products should be sorted in alphabetically and ascending order', () => {
            let minPrice: number = 10;
            let maxPrice: number = 10;
            let sliderMoveToLeft: number = 14;
            let productNames: string[] = [];
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(sliderMoveToLeft);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.least(minPrice);
                    })
                }
            });
            cy.get<StoreSortingTD>('@store').then((data) => {
                expect(productNames).to.deep
                    .equal(data.defaultSorting10);
            });
        });
    });
});