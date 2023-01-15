import { Products } from "./00_Products";

class ProductInfo extends Products {
    private productBreadCrumb: string = ".woocommerce-breadcrumb";
    private productNameText: string = ".product_title.entry-title";
    // private productPriceText: string = "div[class='summary entry-summary'] bdi:nth-child(1)";
    private productSalePriceText: string = ".summary > .price > ins > .woocommerce-Price-amount > bdi";
    private productNoSalePriceText: string = "p[class='price'] bdi";
    private productImage: string = "img[role='presentation']";
    private productDescriptionText: string = "div[class='woocommerce-product-details__short-description'] p";
    private productAddToCartButton: string = "button[name='add-to-cart']";
    private numberOfItemsTextField: string = ".quantity input[type='number']";
    private categories: string = ".posted_in";
    private descriptionTab: string = "a[href='#tab-description']";
    private descriptionTabText: string = "div[id='tab-description'] p";

    private additionalInformationTab: string = "a[href='#tab-additional_information']";
    private additionalInformationWeightText: string = "tr[class*='-item--weight'] td[class*='attributes-item__value']";
    private additionalInformationDimensionsText: string = "tr[class*='-item--dimensions'] td[class*='attributes-item__value']";
    private reviewsTab: string = "a[href='#tab-reviews']";

    private cartBadge: string = "div[class='site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container'] span[class='count']";

    private productInfoViewCartButton: string = ".woocommerce-message  a[href*='/cart/']";
    private successMessageText: string = "div[role='alert']";

    private productID: string;


    get productBreadCrumbElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productBreadCrumb);
    }

    get productNameTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productNameText);
    }

    get productNoSalePriceTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productNoSalePriceText);
    }

    get productSalePriceTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productSalePriceText);
    }

    // get productPriceTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.productPriceText);
    // }

    get productImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productImage);
    }

    get productDescriptionTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productDescriptionText);
    }

    get productAddToCartButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productAddToCartButton);
    }

    get numberOfItemsTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.numberOfItemsTextField);
    }

    get categoriesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.categories);
    }

    get descriptionTabElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.descriptionTab);
    }

    get descriptionTabTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.descriptionTabText);
    }

    get additionalInformationTabElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.additionalInformationTab);
    }

    get additionalInformationWeightTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.additionalInformationWeightText);
    }

    get additionalInformationDimensionsTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.additionalInformationDimensionsText);
    }

    get reviewsTabElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.reviewsTab);
    }

    get cartBadgeElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartBadge);
    }

    get productInfoViewCartButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productInfoViewCartButton);
    }

    get successMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.successMessageText);
    }

    set setProductID(id: string) {
        this.productID = id;
        console.log(this.productID);
    }

    get dynamicProductIDElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.productID} > .onsale`);
    }

    get getCartBadgeTotalItems(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("div[class='site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container']").find("span[class='count']");
    }

    emptyTheCartIfNotEmpty() {
        ProductInfoPage.cartProductsListElement.then(($body) => {
            if ($body.find('li').length > 0) {
                //element exists do something
                ProductInfoPage.cartProductsListElement.find('li')
                    .then((row) => {
                        if (row.length != 0) {
                            for (let x = 1; x <= row.length; x++) {
                                ProductInfoPage.cartFirstRemoveButtonElement.click();
                            }
                        }
                    });
            } else {
                ProductInfoPage.cartEmptyMessageTextElement.each(($el, index, $list) => {
                    expect($el.text().trim()).to.equal('No products in the cart.')

                });
            }
        });
    }

}

export const ProductInfoPage = new ProductInfo();