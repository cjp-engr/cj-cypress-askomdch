import { StorePage } from "../../../pages/product/Store";

describe('Store Page', () => {
    describe('Filter by price scenario', () => {
        beforeEach(() => {
            cy.fixture('product/store.json').as('store')
            cy.login();
            StorePage.navigationBarStoreElement.click();
        });

        it('1. After filtering the price to "$10 - $30", all the products within the $10 - $30 should be displayed', () => {

        });

        it('2. After filtering the price to "$140 - $150", all the products within the $140 - $150 should be displayed', () => {

        });

        it('3. After filtering the price to "$10", all the products that are worth $10 should be displayed', () => {

        });

        it('4. After filtering the price to "$100", all the products that are worth $100 should be displayed', () => {

        });
    });
});