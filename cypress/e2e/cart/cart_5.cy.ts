import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('', () => {
    describe('', () => {
        beforeEach(() => {
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    // this.data = data;
                    cy.wrap(data).as('data');
                });
            cy.wrap(1).as('quantity');
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
        });

        it('27. The total should be computed correctly after deleting a product', () => {

        });

        it('28. The total should be computed correctly after deleting products', () => {

        });

        it('29. The total should be computed correctly after updating a product\'s quantity', () => {

        });

        it('30. The total should be computed correctly after updating each product\'s quantity', () => {

        });

        it('31. The total should be computed correctly after selecting a US country', () => {

        });

        it('32. The total should be computed correctly after selecting not a US country', () => {

        });
    });
});