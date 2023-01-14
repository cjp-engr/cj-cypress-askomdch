class ProductInfo {
    private productBreadCrumb: string = ".woocommerce-breadcrumb";
    private productNameText: string = ".product_title.entry-title";
    private productPriceText: string = "div[class='summary entry-summary'] bdi:nth-child(1)";
    private productImageText: string = "img[role='presentation']";
    private productDescriptionText: string = "div[class='woocommerce-product-details__short-description'] p";
    private productAddToCartButton: string = "button[name='add-to-cart']";
    private numberOfItemsTextField: string = "#quantity_63c26ae407dee";
    private categories: string = ".posted_in";
    private descriptionTab: string = "a[href='#tab-description']";

    private additionalInformationTab: string = "a[href='#tab-additional_information']";
    private reviewsTab: string = "a[href='#tab-reviews']";
    private allRelatedProducts: string = "";

    get productBreadCrumbElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productBreadCrumb);
    }

    get productNameTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productNameText);
    }

    get productPriceTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productPriceText);
    }

    get productImageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productImageText);
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


    get descriptionTabElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.descriptionTab);
    }

    get additionalInformationTabElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.additionalInformationTab);
    }

    get reviewsTabElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.reviewsTab);
    }

}