import { StorePage } from "../../../pages/product/Store";

describe('Store Page', () => {
    describe('Filter by price scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store_1.json').as('store');
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        it('1. After filtering the price to "$10 - $30", all the products within the $10 - $30 should be displayed', function () {
            cy.wrap(10).as('minPrice');
            cy.wrap(30).as('maxPrice');

            StorePage.sliderRightToLeft(12);
            StorePage.filterByPriceButtonElement.contains('Filter').click();
            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(this.minPrice, this.maxPrice);
                    })
                }
            });
        });

        it('2. After filtering the price to "$140 - $150", all the products within the $140 - $150 should be displayed', function () {
            cy.wrap(140).as('minPrice');
            cy.wrap(150).as('maxPrice');

            StorePage.sliderLeftToRight(13);
            StorePage.filterByPriceButtonElement.contains('Filter').click();

            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.within(this.minPrice, this.maxPrice);
                    })
                }
            });

        });

        it('3. After filtering the price to "$10", all the products that are worth $10 should be displayed', function () {
            cy.wrap(10).as('price');

            StorePage.sliderRightToLeft(14);
            StorePage.filterByPriceButtonElement.contains('Filter').click();

            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.least(this.price);
                    })
                }
            });

        });

        it('4. After filtering the price to "$100", all the products that are worth $100 should be displayed', function () {
            cy.wrap(100).as('price');

            StorePage.sliderLeftToRight(9);
            StorePage.sliderRightToLeft(5);
            StorePage.filterByPriceButtonElement.contains('Filter').click();

            cy.wrap(StorePage.convertStringToNumberPriceList()).then((priceList) => {
                for (let i = 0; i < priceList.length; i++) {
                    cy.wrap(i).then(() => {
                        expect(priceList[i]).to.be.least(this.price);
                    })
                }
            });
        });
    });
});