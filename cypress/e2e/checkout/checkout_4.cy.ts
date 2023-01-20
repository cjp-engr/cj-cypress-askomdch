import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('Checkout Page', () => {
    describe('Product details', () => {
        beforeEach(function () {
            cy.fixture<{ data: StoreProductListTD[] }>('product/store_2.json')
                .its("products")
                .then((data) => {
                    this.data = data;
                });
            cy.wrap(5).as('quantity');
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
        });

        afterEach(() => {
            cy.logout();
        });

        it('17. The products details from cart should display correctly', function () {

        });

        it('18. The user should be able to select "Direct bank transfer"', function () {

        });

        it('19. The user should be able to select "Cash on delivery"', function () {

        });

        it('20. The shipping form should display after checking the "Ship to a different address?"', function () {

        });

        it('21. The "Product subtotal" should be computed correctly', function () {

        });

        it('22. The "Total subtotal" should be computed correctly', function () {

        });

        it('23. The "Flat Rate" should be displayed correctly', function () {

        });

        it('24. The "Total" should be computed correctly', function () {

        });
    });

});