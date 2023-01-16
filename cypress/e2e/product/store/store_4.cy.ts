import { StorePage } from "../../../pages/product/Store";

describe('Store Page', () => {
    describe('Filter by price scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store.json').as('store');
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        it('1. After filtering the price to "$10 - $30", all the products within the $10 - $30 should be displayed', () => {
            let minPrice: number = 10;
            let maxPrice: number = 30;
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(12);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(minPrice, maxPrice);
                    })
                }
            });

        });

        it('2. After filtering the price to "$140 - $150", all the products within the $140 - $150 should be displayed', () => {
            let minPrice: number = 140;
            let maxPrice: number = 150;
            let priceList: number[] = [];

            StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(minPrice, maxPrice);
                    })
                }
            });
        });

        it('3. After filtering the price to "$10", all the products that are worth $10 should be displayed', () => {
            let minPrice: number = 10;
            let maxPrice: number = 10;
            let priceList: number[] = [];

            StorePage.sliderRightToLeft(14);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            priceList = StorePage.convertedToNumberPriceList();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.least(minPrice);
                    })
                }
            });
        });

        it('4. After filtering the price to "$100", all the products that are worth $100 should be displayed', () => {
            let minPrice: number = 100;
            let maxPrice: number = 100;
            let priceList: number[] = [];
            StorePage.sliderLeftToRight(9);
            StorePage.sliderRightToLeft(5);
            StorePage.filterByPriceButtonElement.contains('Filter').click();

            cy.wrap(priceList.length).then(() => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.least(minPrice);
                    })
                }
            });
        });
    });
});