import { StorePage } from "../../../pages/product/Store";

describe('Store Page', () => {
    describe('Filter by price scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store.json').as('store')
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        it('1. After filtering the price to "$10 - $30", all the products within the $10 - $30 should be displayed', () => {
            let minPrice: number = 10;
            let maxPrice: number = 30;

            StorePage.sliderRightToLeft(12);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);

        });

        it('2. After filtering the price to "$140 - $150", all the products within the $140 - $150 should be displayed', () => {
            let minPrice: number = 140;
            let maxPrice: number = 150;
            StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
        });

        it('3. After filtering the price to "$10", all the products that are worth $10 should be displayed', () => {
            let minPrice: number = 10;
            let maxPrice: number = 10;
            StorePage.sliderRightToLeft(14);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
        });

        it('4. After filtering the price to "$100", all the products that are worth $100 should be displayed', () => {
            let minPrice: number = 100;
            let maxPrice: number = 100;
            StorePage.sliderLeftToRight(9);
            StorePage.sliderRightToLeft(5);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            StorePage.checkIfPricesAreWithinTheRange(minPrice, maxPrice);
        });
    });
});