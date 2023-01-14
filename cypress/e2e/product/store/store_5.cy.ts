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
            // let productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            //TODO
            // StorePage.sliderRightToLeft(12);
            // StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
            cy.get<StoreSortingTD>('@store').then((data) => {
                //TODO
                // expect(productNames).to.deep
                //     .equal(data.defaultSorting);
            });
        });

        it('2. After filtering the price to "$60 - $100" and selecting the "Sort by popularity", the products should be sorted according to popularity', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            // let productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            //TODO
            // StorePage.sliderRightToLeft(12);
            // StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
            cy.get<StoreSortingTD>('@store').then((data) => {
                //TODO
                // expect(productNames).to.deep
                //     .equal(data.defaultSorting);
            });
        });

        it('3. After filtering the price to "$60 - $100" and selecting the "Sort by average rating", the products should be sorted according to the average rating', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            // let productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            //TODO
            // StorePage.sliderRightToLeft(12);
            // StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
            cy.get<StoreSortingTD>('@store').then((data) => {
                //TODO
                // expect(productNames).to.deep
                //     .equal(data.defaultSorting);
            });
        });

        it('4. After filtering the price to "$60 - $100" and selecting the "Sort by latest", the products should be sorted according to what are the latest products', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            // let productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            //TODO
            // StorePage.sliderRightToLeft(12);
            // StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
            cy.get<StoreSortingTD>('@store').then((data) => {
                //TODO
                // expect(productNames).to.deep
                //     .equal(data.defaultSorting);
            });
        });

        it('5. After filtering the price to "$60 - $100" and selecting the "Sort by price: low to high", the products should be sorted according to price from low to high', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            // let productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            //TODO
            // StorePage.sliderRightToLeft(12);
            // StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
            cy.get<StoreSortingTD>('@store').then((data) => {
                //TODO
                // expect(productNames).to.deep
                //     .equal(data.defaultSorting);
            });
        });

        it('6. After filtering the price to "$60 - $100" and selecting the "Sort by price: high to low", the products should be sorted according to price from high to low', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            // let productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            //TODO
            // StorePage.sliderRightToLeft(12);
            // StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
            cy.get<StoreSortingTD>('@store').then((data) => {
                //TODO
                // expect(productNames).to.deep
                //     .equal(data.defaultSorting);
            });
        });

        it('7. After filtering the price to "$10" and selecting the "Default sorting", the products should be sorted in alphabetically and ascending order', () => {
            let minPrice: number = 60;
            let maxPrice: number = 100;
            // let productNames = StorePage.nameSorted(StorePage.defaultSortingTextOptionValue);
            //TODO
            // StorePage.sliderRightToLeft(12);
            // StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
            cy.get<StoreSortingTD>('@store').then((data) => {
                //TODO
                // expect(productNames).to.deep
                //     .equal(data.defaultSorting);
            });
        });
    });
});