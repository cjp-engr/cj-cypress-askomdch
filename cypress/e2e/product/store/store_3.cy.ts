import { StorePage } from "../../../pages/product/Store";
import { StoreSortingTD, StoreTD } from "../../model";

describe('Store Page', () => {
    describe('Browse by categories Scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store_1.json').as('store');
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        it('1. After selecting the "Accessories", the url field should display the Accessories link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesAccessoriesTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['accessories']}`);
            });
        });

        it('2. After selecting the "Men", the url field should display the Men link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesMenTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['men']}`);
            });
        });
        it('3. After selecting the "Men\'s Jeans", the url field should display the Men\'s Jeans link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesMensJeanTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['mensJean']}`);
            });
        });
        it('4. After selecting the "Men\'s Shirts", the url field should display the Men\'s Shirts link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesMensShirtTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['mensShirt']}`);
            });
        });
        it('5. After selecting the "Men\'s Shoes", the url field should display the Men\'s Shoes link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesMensShoesTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['mensShoes']}`);
            });
        });
        it('6. After selecting the "Purses And Handbags", the url field should display the Purses And Handbags link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesPursesAndHandBagsTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['pursesAndHandBags']}`);
            });
        });
        it('7. After selecting the "Women", the url field should display the Women link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesWomenTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['women']}`);
            });
        });
        it('8. After selecting the "Women\'s Jeans", the url field should display the Women\'s Jeans link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesWomensJeanTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['womensJean']}`);
            });
        });

        it('9. After selecting the "Women\'s Shirts", the url field should display the Women\'s Shirts link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesWomensShirtTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['womensShirt']}`);
            });
        });

        it('10. After selecting the "Women\'s Shoes", the url field should display the Women\'s Shoes link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesWomensShoesTextOptionValue);
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['womensShoes']}`);
            });
        });

        it('11. After unselecting any selected category, the url field should display the store link', () => {
            StorePage.categoriesSelectFieldElement.select(StorePage.categoriesWomensShoesTextOptionValue);
            StorePage.categoriesClearButtonElement.click();
            cy.get<StoreTD>('@store').then((data) => {
                cy.url().should('eq', `${Cypress.env('onlineStore')}${data.browserLink['store']}`);
            });
        });
    });
});
