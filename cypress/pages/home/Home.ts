class Home {

    //--start header--//
    private headerTitle: string = ".alignwide.has-text-align-center.has-white-color.has-text-color.has-huge-font-size";
    private headerSubtitle: string = ".has-text-align-center.has-white-color.has-text-color.has-medium-font-size";
    private headerShopNowButton: string = ".wp-block-button__link[href='/store']";
    private headerFindMoreButton: string = ".wp-block-button__link[href*='/contact-us']";
    //--end header--//

    //--start body featured categories--//
    private featuredCategoriesWomenButton: string = ".wp-block-button__link[href*='/women']";
    private featuredCategoriesMenButton: string = ".wp-block-button__link[href*='/men']";
    private featuredCategoriesAccessoriesButton: string = ".wp-block-button__link[href*='/accessories']";
    private featuredCategoriesTitle: string;
    private featuredCategoriesSubtitle: string;
    //--end body featured categories--//

    //--start body featured products--//
    private featuredProductsText: string = "h2[class='has-text-align-center']";
    private featuredProductsImage: string;
    private featuredProductsSaleThumbnail: string;
    private featuredProductsName: string;
    private featuredProductsCategory: string;
    private featuredProductsPrice: string;
    private featuredProductsRating: string;
    private featuredProductsAddToCart: string;
    //--end body featured products--//

    get headerTitleElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.headerTitle);
    }

    get headerSubtitleElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.headerSubtitle);
    }

    get headerShopNowButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.headerShopNowButton);
    }

    get headerFindMoreButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.headerFindMoreButton);
    }

    get featuredCategoriesWomenButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.featuredCategoriesWomenButton);
    }

    get featuredCategoriesMenButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.featuredCategoriesMenButton);
    }

    get featuredCategoriesAccessoriesButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.featuredCategoriesAccessoriesButton);
    }

    get featuredProductsTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.featuredProductsText);
    }
}

export const HomePage = new Home();