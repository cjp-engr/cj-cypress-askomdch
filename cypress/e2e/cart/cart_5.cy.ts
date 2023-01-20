import { CartPage } from "../../pages/cart/Cart";
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
            cy.wrap(2).as('quantity');
            cy.login();
            StorePage.navigationBarStoreElement.click();
            StorePage.cartButtonElement.realHover();
            StorePage.emptyTheCartIfNotEmpty();
            StorePage.sortingFieldElement.select(StorePage.defaultSortingTextOptionValue);
        });

        afterEach(() => {
            cy.logout();
        });

        it('29. The total should be computed correctly after deleting a product', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.firstProductRemoveButtonElement.click();
            CartPage.isActualTotalMatchExpected();
        });

        it('30. The total should be computed correctly after deleting products', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.thirdProductRemoveButtonElement.click();
            CartPage.firstProductRemoveButtonElement.click();
            CartPage.isActualTotalMatchExpected();
        });

        it('31. The total should be computed correctly after updating a product\'s quantity', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.thirdQuantityTextFieldElement.type('{selectAll}10');
            CartPage.updateCartButtonElement.click();
            CartPage.isActualTotalMatchExpected();
        });

        it('32. The total should be computed correctly after updating each product\'s quantity', function () {
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[3].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.updateEachProductQuantity();
            CartPage.updateCartButtonElement.click();
            CartPage.isActualTotalMatchExpected();
        });

        it('33. The total should be computed correctly after updating the country (Flat rate US: $5.00, others: $10.00)', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();
            CartPage.countrySelectFieldElement.then(($el) => {
                CartPage.countrySelectFieldElement.click();
                if (($el.text().includes('United States'))) {
                    CartPage.countrySearchTextFieldElement.type('Philippines');
                    CartPage.countryFirstInListElement.click();
                } else {
                    CartPage.countrySearchTextFieldElement.type('United States');
                    CartPage.countryFirstInListElement.click();
                }
            });
            CartPage.updateAddressButtonElement.click();
            CartPage.isActualTotalMatchExpected();
        });

        it('34. The total should be computed correctly after adding products', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.pageTwoButtonElement.click();
            StorePage.addProductToCart(`“${this.data[1].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.addProductToCart(`“${this.data[2].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.isActualTotalMatchExpected();
        });
    });
});