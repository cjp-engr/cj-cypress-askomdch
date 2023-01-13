import { StorePage } from "../../pages/product/Store";
import { StoreTD } from "../model";

describe('Store Page', () => {
    describe('Sorting of products scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store.json').as('store')
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });
        it.skip('1. After selecting the "Default sorting", the products should be sorted in alphabetically and ascending order', () => {
            let optionsArrayPageOne = [];
            let optionsArrayPageTwo = [];
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
            StorePage.allProductNameTextElement.each(($el, index, list) => {
                cy.log('index' + index.toString());
                cy.log('list.length' + list.length.toString());
                optionsArrayPageOne[index] = $el.text();
            }).then(() => {
                cy.get<StoreTD>('@store').then((data) => {
                    expect(optionsArrayPageOne).to.deep
                        .equal(data.defaultSortingPageOne);

                });
            });

            StorePage.pageTwoButtonElement.click();
            optionsArrayPageTwo = [];
            StorePage.allProductNameTextElement.each(($el, index, list) => {
                optionsArrayPageTwo[index] = $el.text();
            }).then(() => {
                cy.get<StoreTD>('@store').then((data) => {
                    expect(optionsArrayPageTwo).to.deep
                        .equal(data.defaultSortingPageTwo);
                    console.log(data.defaultSortingPageTwo);

                });
            });

        });

        it('2. After selecting the "Sort by popularity", the products should be sorted according to popularity', () => {

        });

        it('3. After selecting the "Sort by average rating", the products should be sorted according to the average rating', () => {

        });

        it('4. After selecting the "Sort by latest", the products should be sorted according to what are the latest products', () => {

        });

        it('5. After selecting the "Sort by price: low to high", the products should be sorted according to price from low to high', () => {
            let optionsArray = [];
            let x = [];

            StorePage.allProductPricesElement.each(($el, index, list) => {

                optionsArray[index] = $el.text();
                if (optionsArray[index].includes(' ')) {
                    x = optionsArray[index].split(' ');
                    optionsArray[index] = x[1];
                }

                cy.log(optionsArray[index]);
            }).then(() => {

            });
        });

        it('6. After selecting the "Sort by price: high to low", the products should be sorted according to price from high to low', () => {

        });
    });
});