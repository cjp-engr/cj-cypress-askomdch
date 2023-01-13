class ProductInfo {
    private productNameText: string = "";
    private productPriceText: string = "";
    private productImageText: string = "";
    private productDescriptionText: string = "";
    private productAddToCartButton: string = "";
    private numberOfItemsTextField: string = "";
    private categories: string = "";
    private descriptionTab: string = "";
    private additionalInformationTab: string = "";
    private reviewsTab: string = "";
    private allRelatedProducts: string = "";

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