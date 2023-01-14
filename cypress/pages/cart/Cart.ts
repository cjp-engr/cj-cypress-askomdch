import { Main } from "../Main";

class Cart extends Main {
    private cartHeaderText: string = "";
    private deleteProductButton: string = "";
    private nameText: string = "";
    private priceText: string = "";
    private quantityTextField: string = "";
    private productSubtotalText: string = "";
    private updateCartButton: string = "";

    private allProductsSubtotalText: string = "";
    private shippingFeeText: string = "";
    private changeAddressButton: string = "";
    private countrySelectField: string = "";
    private stateSelectField: string = "";
    private cityTextField: string = "";
    private zipCodeTextField: string = "";
    private updateAddressButton: string = "";

    private allTotal: string = "";

    private proceedToCheckoutButton: string = "";

    private couponCodeTextField: string = "";
    private applyCouponButton: string = "";

    get cartHeaderTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartHeaderText);
    }

    get deleteProductButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.deleteProductButton);
    }

    get nameTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.nameText);
    }

    get priceTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.priceText);
    }

    get quantityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.quantityTextField);
    }

    get productSubtotalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productSubtotalText);
    }

    get updateCartButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.updateCartButton);
    }

    get allProductsSubtotalTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allProductsSubtotalText);
    }

    get shippingFeeTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingFeeText);
    }

    get changeAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.changeAddressButton);
    }

    get countrySelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.countrySelectField);
    }

    get stateSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.stateSelectField);
    }

    get cityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cityTextField);
    }

    get zipCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.zipCodeTextField);
    }

    get updateAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.updateAddressButton);
    }

    get allTotalElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allTotal);
    }

    get proceedToCheckoutButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.proceedToCheckoutButton);
    }

    get couponCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.couponCodeTextField);
    }

    get applyCouponButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.applyCouponButton);
    }
}