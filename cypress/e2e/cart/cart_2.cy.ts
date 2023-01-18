import { CartPage } from "../../pages/cart/Cart";
import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('', () => {
    describe('', () => {
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

        it('9. After the user updated the quantity of random product, the "update cart" should be enabled', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.quantityTextFieldElement.type('{selectAll}20');
            CartPage.updateCartButtonElement.should('be.enabled');
        });

        it('10. If the user did not update the quantity of random product, the "update cart" should be disabled', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.updateCartButtonElement.should('not.be.enabled');
        });

        it('11. If the user deleted a product, it should display “Product name” removed. Undo?', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.removeProductFirstButtonElement.click();
            CartPage.removeProductMessageTextElement.should('be.visible');
        });

        it('12. If the user clicked the Undo button, the product should be listed again', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.removeProductFirstButtonElement.click();
            CartPage.undoButtonElement.click();
            CartPage.productNameFirstTextElement.should('have.text', this.data[0].name);
            CartPage.productPriceFirstTextElement.should('have.text', this.data[0].price);
            CartPage.quantityTextFieldElement.invoke('val')
                .then((value) => {
                    expect(value.toString()).to.be.equal(this.quantity.toString());
                });
            CartPage.productSubtotalFirstTextElement.each(($el) => {
                cy.wrap(Number(this.data[0].price.replace('$', ''))).then((test) => {
                    expect(Number($el.text().replace('$', ''))).to.be.equal(test * this.quantity);
                });

            });
        });

        it('13. The Flat rate should display "$5.00" if the address is in US', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();

            CartPage.countrySelectFieldElement.then(($el) => {
                if (!($el.text().includes('United States'))) {
                    CartPage.countrySelectFieldElement.click();
                    CartPage.countrySearchTextFieldElement.type('United States');
                    CartPage.countryFirstInListElement.click();
                }
            });
            CartPage.updateAddressButtonElement.click();
            CartPage.flatRateTextElement.should('have.text', '$5.00');
        });

        it('14. The Flat rate should display "$10.00" if the address is outside US', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();

            CartPage.countrySelectFieldElement.then(($el) => {
                if (($el.text().includes('United States'))) {
                    CartPage.countrySelectFieldElement.click();
                    CartPage.countrySearchTextFieldElement.type('Philippines');
                    CartPage.countryFirstInListElement.click();
                }
            });
            CartPage.updateAddressButtonElement.click();
            CartPage.flatRateTextElement.should('have.text', '$10.00');
        });
    });
});