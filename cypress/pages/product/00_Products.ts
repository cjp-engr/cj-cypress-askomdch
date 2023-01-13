import { Main } from "../Main";

class Products extends Main {
    private searchProductsTextField: string = "#woocommerce-product-search-field-0";
    private searchButton: string = "button[value='Search']";

    private ourBestSellersText: string = "";
    private bestSellersProductTitle: string;
    private bestSellersImage: string;
    private bestSellersStarRating: string;
    private bestSellersPrice: string;

    private browseByCategoriesText: string = "";
    private selectCategoriesField: string = "";
    private selectCategoriesTextField: string = "";
    private selectCategoriesdropdownItem: string = "";

    private filterbyPriceText: string = "";
    private filterbyPriceSlider: string = "";
    private filterByPriceButton: string = "";


    private productHeaderText: string = ".woocommerce-products-header__title";
    private showingNumberOfItemsResultsText: string = ".woocommerce-result-count";

    //start - sorting
    private sortingField: string = "select.orderby";
    //option values
    private defaultSortingText: string = "menu_order";
    private sortByPopularityText: string = "popularity";
    private sortByAverageRatingText: string = "rating";
    private sortByLatestText: string = "date";
    private sortByPriceLowToHighText: string = "price";
    private sortByPriceHighToLowText: string = "price-desc";
    //end - sorting

    private productImages: string = ".astra-shop-thumbnail-wrap";
    private allProductNameText: string = ".woocommerce-loop-product__title";
    private allProductCategoriesText: string = ".ast-woo-product-category";
    // private allProductPricesWithSaleText: string = "div.astra-shop-summary-wrap > span.price > ins > span > bdi";
    // private allProductPricesWithoutSaleText: string = "div.astra-shop-summary-wrap > span.price > span > bdi";
    private allProductPrices: string = "div.astra-shop-summary-wrap > span.price";
    private allProductStarRatings: string;
    private allProductAddToCartButton: string;

    private pageOneButton: string = "ul > li:nth-child(2) > a[href*='page/1/']";
    private pageTwoButton: string = "ul > li:nth-child(2) > a[href*='page/2/']";

    get sortingFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.sortingField);
    }

    get defaultSortingTextOptionValue(): string {
        return this.defaultSortingText;
    }

    get sortByPopularityTextOptionValue(): string {
        // return cy.get(this.sortByPopularityText);
        return this.sortByPopularityText;
    }

    get sortByAverageRatingTextOptionValue(): string {
        // return cy.get(this.sortByAverageRatingText);
        return this.sortByAverageRatingText;
    }

    get sortByLatestTextOptionValue(): string {
        // return cy.get(this.sortByLatestText);
        return this.sortByLatestText;
    }

    get sortByPriceLowToHighTextOptionValue(): string {
        // return cy.get(this.sortByPriceLowToHighText);
        return this.sortByPriceLowToHighText;
    }

    get sortByPriceHighToLowTextOptionValue(): string {
        // return cy.get(this.sortByPriceHighToLowText);
        return this.sortByPriceHighToLowText;
    }

    get pageOneButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.pageOneButton);
    }

    get pageTwoButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.pageTwoButton);
    }

    get allProductNameTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allProductNameText);
    }

    get allProductPricesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allProductPrices);
    }

}

export const ProductsPage = new Products();

export { Products };