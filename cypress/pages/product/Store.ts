import { Products } from "./00_Products";



class Store extends Products {

    sortName(optionValue: string): string[] {
        let productNames: string[] = [];
        let pageTwoFirstIndex: number;
        StorePage.sortingFieldElement.select(optionValue);
        cy.wait(1000);
        StorePage.allProductNameTextElement.each(($el, index, list) => {
            productNames[index] = $el.text();
            if (index == list.length - 1) {
                pageTwoFirstIndex = index + 1;
            }

        });

        StorePage.parentContainerElement.then(($ele) => {
            if ($ele.find('.page-numbers').length > 0) {
                cy.log('With Pagination');
                StorePage.pageTwoButtonElement.click();
                StorePage.allProductNameTextElement.each(($el, index, list) => {
                    productNames[index + pageTwoFirstIndex] = $el.text();
                });

            } else {
                cy.log('No Pagination');
            }
        });

        return productNames;
    }

    clickIfPaginationIsVisible() {
        StorePage.parentContainerElement.then(($ele) => {
            if ($ele.find('.page-numbers').length > 0) {
                cy.log('With Pagination');
                StorePage.pageTwoButtonElement.click();

            } else {
                cy.log('No Pagination');
            }
        });
    }

    sortPrice(optionValue: string): boolean {
        let productPrices: string[] = [];
        let productPricesNum: number[] = [];
        let pageTwoFirstIndex: number;
        let isSorted: boolean;
        StorePage.sortingFieldElement.select(optionValue);
        cy.wait(1000);

        StorePage.allProductPricesElement.each(($el, index, list) => {
            productPrices[index] = $el.text();
            if (index == list.length - 1) {
                pageTwoFirstIndex = index + 1;
            }

            if (productPrices[index].includes(' ')) {
                // x = productPrices[index].split(' ');
                productPricesNum[index] = parseFloat(productPrices[index].split(' ')[1].replace('$', ''));
            } else {
                productPricesNum[index] = parseFloat(productPrices[index].replace('$', ''));
            }

        });

        StorePage.pageTwoButtonElement.click();

        StorePage.allProductPricesElement.each(($el, index, list) => {
            productPrices[index + pageTwoFirstIndex] = $el.text();

            if (productPrices[index + pageTwoFirstIndex].includes(' ')) {
                // x = productPrices[index].split(' ');
                productPricesNum[index + pageTwoFirstIndex] = parseFloat(productPrices[index + pageTwoFirstIndex].split(' ')[1].replace('$', ''));
            }
        });

        if (optionValue == StorePage.sortByPriceLowToHighTextOptionValue) {
            isSorted = productPricesNum.sort() === productPricesNum;

        } else {
            isSorted = productPricesNum.sort((one, two) => (one > two ? -1 : 1)) === productPricesNum;
        }

        return isSorted;
    }

    sliderLeftToRight(moveToRight: number) {
        let sliderLeft: string = '';
        for (let i = 0; i < moveToRight; i++) {
            sliderLeft = sliderLeft + '{rightarrow}';
        }
        StorePage.filterbyPriceLeftSliderElement
            .type(sliderLeft);
    }

    sliderRightToLeft(moveToLeft: number) {
        let sliderRight: string = '';
        for (let i = 0; i < moveToLeft; i++) {
            sliderRight = sliderRight + '{leftarrow}';
        }
        StorePage.filterbyPriceRightSliderElement
            .type(sliderRight);
    }


    convertStringToNumberPriceList(): number[] {
        let productPrices: string[] = [];
        let productPricesNum: number[] = [];

        StorePage.allProductPricesElement.each(($el, index, list) => {
            productPrices[index] = $el.text();

            if (productPrices[index].includes(' ')) {
                productPricesNum[index] = parseFloat(productPrices[index].split(' ')[1].replace('$', ''));
            } else {
                productPricesNum[index] = parseFloat(productPrices[index].replace('$', ''));
            }
            // expect(minPrice <= productPricesNum[index] && maxPrice >= productPricesNum[index]).to.be.true
        });
        return productPricesNum;
    }

    emptyTheCartIfNotEmpty() {
        StorePage.cartProductsListElement.then(($body) => {
            if ($body.find('li').length > 0) {
                //element exists do something
                StorePage.cartProductsListElement.find('li')
                    .then((row) => {
                        if (row.length != 0) {
                            for (let x = 1; x <= row.length; x++) {
                                StorePage.cartFirstRemoveButtonElement.click();
                            }
                        }
                    });
            } else {
                StorePage.cartEmptyMessageTextElement.each(($el, index, $list) => {
                    expect($el.text().trim()).to.equal('No products in the cart.')

                });
            }
        });
    }

    addProductToCart(product: string, numberOfClicks: number) {
        cy.get('.add_to_cart_button').each(($el, index, list) => {

            cy.wrap($el).invoke('attr', 'aria-label')
                .then(($el) => {
                    if ($el.includes(product)) {
                        cy.wrap(numberOfClicks).then(() => {
                            for (let i = 0; i < numberOfClicks; i++) {
                                cy.get(`a[aria-label='Add ${product} to your cart']`, { timeout: 5000 }).click();

                            }
                        });
                    }
                });
        });
    }

    isActualDetailsMatchExpected(index: number, productName: string, quantity: number, price: string) {
        this.isActualNameMatchExpected(index, productName);
        this.isActualQuantityMatchExpected(index, quantity);
        this.isActualPriceMatchExpected(index, price);
    }

    isActualNameMatchExpected(index: number, productName: string) {
        StorePage.setProductIndex = index;
        StorePage.dynamicCartListProductName.each(($el, index, list) => {
            expect($el.text().trim()).to.equal(productName);
        });
    }

    isActualQuantityMatchExpected(index: number, quantity: number) {
        StorePage.setProductIndex = index;
        StorePage.dynamicCartListProductQuantity.each(($el, index, list) => {
            expect(Number($el.text().trim().split(' ')[0])).to.equal(quantity);
        });
    }

    isActualPriceMatchExpected(index: number, price: string) {
        StorePage.setProductIndex = index;
        StorePage.dynamicCartListProductPrice.each(($el, index, list) => {
            expect($el.text().trim()).to.equal(price);
        });
    }

    isActualSubtotalMatchExpected() {
        let subtotal: number = 0;
        StorePage.cartAllProductDetailsElement.then(($body) => {
            if ($body.find('li').length > 0) {
                StorePage.cartAllProductDetailsElement.find('li')
                    .then((row) => {
                        if (row.length != 0) {
                            cy.wrap(row.length).then(() => {
                                for (let i = 1; i <= row.length; i++) {
                                    cy.wrap(i).then(() => {
                                        StorePage.setProductIndex = i;
                                        StorePage.dynamicCartListProductPrice.each(($el, index, list) => {
                                            subtotal += (Number($el.text().replace('$', '')) * 4);
                                            if (i == row.length) {
                                                cy.log(subtotal.toString());
                                                expect(subtotal).to.be.equal(872);
                                            }
                                        });

                                    });
                                }
                            });
                        }
                    });
            }
        });
    }

}

export const StorePage = new Store();