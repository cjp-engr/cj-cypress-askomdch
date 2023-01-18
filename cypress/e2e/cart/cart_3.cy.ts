import { CartPage } from "../../pages/cart/Cart";
import { StorePage } from "../../pages/product/Store";
import { StoreProductListTD } from "../model";

describe('', () => {
    describe('', () => {
        beforeEach(function () {
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

        it('15. After the user selected a country and clicked the update button, the update should display', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();
            CartPage.countrySelectFieldElement.then(($el) => {
                CartPage.countrySelectFieldElement.click();
                if (($el.text().includes('United States'))) {
                    CartPage.countrySearchTextFieldElement.type('Philippines');
                    cy.wrap('Philippines').as('countrySelected');
                } else {
                    CartPage.countrySearchTextFieldElement.type('United Kingdom');
                    cy.wrap('United Kingdom').as('countrySelected');
                }
                CartPage.countryFirstInListElement.click();
            });
            CartPage.updateAddressButtonElement.click();
            CartPage.shippingAddressTextElement.then(($el) => {
                expect($el.text()).to.contain(this.countrySelected);
            });
        });

        it('16. After the user clicked the country field and entered a keyword, any match should display in the list', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();
            CartPage.countrySelectFieldElement.then(($el) => {
                CartPage.countrySelectFieldElement.click();
                if (($el.text().includes('United States'))) {
                    CartPage.countrySearchTextFieldElement.type('Philippines');
                    cy.wrap('Philippines').as('countrySelected');
                } else {
                    CartPage.countrySearchTextFieldElement.type('United Kingdom');
                    cy.wrap('United Kingdom').as('countrySelected');
                }
                CartPage.countryFirstInListElement.then(($el) => {
                    expect($el.text()).to.contain(this.countrySelected);
                });

            });
        });

        it('17. After the user selected a state and clicked the update button, the update should display', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();
            CartPage.countrySelectFieldElement.then(($country) => {
                CartPage.countrySelectFieldElement.click();
                if ($country.text().includes('United Kingdom')) {

                    CartPage.countrySearchTextFieldElement.type('Philippines');
                    CartPage.countryFirstInListElement.click();
                    CartPage.stateSelectFieldElement.click();
                    CartPage.stateSelectFieldElement.then(($state) => {
                        if ($state.text().includes('Abra')) {
                            CartPage.stateTextFieldElement.type('Davao Occidental');
                            cy.wrap('Davao Occidental').as('stateSelected');
                        } else if ($state.text().includes('Davao Occidental')) {
                            CartPage.stateSearchTextFieldElement.type('Abra');
                            cy.wrap('Abra').as('stateSelected');
                        } else {
                            CartPage.stateSearchTextFieldElement.type('Abra');
                            cy.wrap('Abra').as('stateSelected');
                        }
                        CartPage.stateFirstInListElement.click();
                    });
                } else {
                    CartPage.countrySearchTextFieldElement.type('United Kingdom');
                    CartPage.countryFirstInListElement.click();
                    CartPage.stateTextFieldElement.type('Testing');
                    cy.wrap('Testing').as('stateSelected');
                }
                CartPage.updateAddressButtonElement.click();
                cy.wait(1000);
                CartPage.shippingAddressTextElement.then(($el) => {
                    expect($el.text()).to.contain(this.stateSelected);
                });

            });
        });

        it('18. After the user clicked the state field and entered a keyword, any match should display in the list', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();
            CartPage.countrySelectFieldElement.then(($country) => {
                CartPage.countrySelectFieldElement.click();
                if ($country.text().includes('United States')) {

                    CartPage.countrySearchTextFieldElement.type('Philippines');
                    CartPage.countryFirstInListElement.click();
                    CartPage.stateSelectFieldElement.click();
                    CartPage.stateSelectFieldElement.then(($state) => {
                        if ($state.text().includes('Abra')) {
                            CartPage.stateTextFieldElement.type('Davao Occidental');
                            cy.wrap('Davao Occidental').as('stateSelected');
                        } else if ($state.text().includes('Davao Occidental')) {
                            CartPage.stateSearchTextFieldElement.type('Abra');
                            cy.wrap('Abra').as('stateSelected');
                        } else {
                            CartPage.stateSearchTextFieldElement.type('Abra');
                            cy.wrap('Abra').as('stateSelected');
                        }

                    });
                } else {
                    CartPage.countrySearchTextFieldElement.type('United States');
                    CartPage.countryFirstInListElement.click();
                    CartPage.stateSelectFieldElement.click();
                    CartPage.stateSelectFieldElement.then(($state) => {
                        if ($state.text().includes('Colorado')) {
                            CartPage.stateTextFieldElement.type('District Of Columbia');
                            cy.wrap('District Of Columbia').as('stateSelected');
                        } else if ($state.text().includes('District Of Columbia')) {
                            CartPage.stateSearchTextFieldElement.type('Colorado');
                            cy.wrap('Colorado').as('stateSelected');
                        } else {
                            CartPage.stateSearchTextFieldElement.type('Colorado');
                            cy.wrap('Colorado').as('stateSelected');
                        }

                    });
                }
                CartPage.stateFirstInListElement.then(($el) => {
                    expect($el.text()).to.contain(this.stateSelected);
                });

            });
        });

        it.only('19. After the user entered a city and clicked the update button, the update should display', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();
            CartPage.countrySelectFieldElement.then(($country) => {
                CartPage.countrySelectFieldElement.click();
                if ($country.text().includes('United States')) {

                    CartPage.countrySearchTextFieldElement.type('Philippines');
                    CartPage.countryFirstInListElement.click();

                } else {
                    CartPage.countrySearchTextFieldElement.type('United States');
                    CartPage.countryFirstInListElement.click();

                }

            });
            cy.wrap('Gusto ko na magkawork').as('city').then((value) => {
                CartPage.cityTextFieldElement.type(`{selectAll}${value}`);
            });

            CartPage.updateAddressButtonElement.click();
            cy.wait(1000);
            CartPage.shippingAddressTextElement.then(($el) => {
                expect($el.text()).to.contain(this.city);
            });
            CartPage.changeAddressButtonElement.click();
            CartPage.cityTextFieldElement.invoke('val')
                .then((value) => {
                    expect(value.toString()).to.be.equal(this.city);
                });
        });

        it('20. After the user entered a zip and clicked the update button, the update should display', function () {
            StorePage.addProductToCart(`“${this.data[0].name}”`, this.quantity);
            StorePage.cartButtonElement.click();
            CartPage.changeAddressButtonElement.click();
            CartPage.countrySelectFieldElement.then(($country) => {
                CartPage.countrySelectFieldElement.click();
                if ($country.text().includes('United States')) {

                    CartPage.countrySearchTextFieldElement.type('Philippines');
                    CartPage.countryFirstInListElement.click();

                } else {
                    CartPage.countrySearchTextFieldElement.type('United States');
                    CartPage.countryFirstInListElement.click();

                }

            });
            cy.wrap('12345').as('zip').then((value) => {
                CartPage.zipCodeTextFieldElement.type(`{selectAll}${value}`);
            });

            CartPage.updateAddressButtonElement.click();
            cy.wait(1000);
            CartPage.changeAddressButtonElement.click();
            CartPage.zipCodeTextFieldElement.invoke('val')
                .then((value) => {
                    expect(value.toString()).to.be.equal(this.zip);
                });
        });
    });


});