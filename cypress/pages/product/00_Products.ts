import { Main } from "../Main";

class Products extends Main {
    private parentContainer = ".ast-woocommerce-container";
    private searchProductsTextField: string = "#woocommerce-product-search-field-0";
    private searchButton: string = "button[value='Search']";

    private ourBestSellersText: string = "";
    private bestSellersProductTitle: string;
    private bestSellersImage: string;
    private bestSellersStarRating: string;
    private bestSellersPrice: string;

    private browseByCategoriesText: string = "";
    private categoriesSelectField: string = "#product_cat";
    private categoriesAccessoriesText: string = "accessories";
    private categoriesMenText: string = "men";
    private categoriesMensJeanText: string = "mens-jeans";
    private categoriesMensShirtText: string = "mens-shirts";
    private categoriesMensShoesText: string = "mens-shoes";
    private categoriesPursesAndHandBagsText: string = "purses-and-handbags";
    private categoriesWomenText: string = "women";
    private categoriesWomensJeanText: string = "womens-jeans";
    private categoriesWomensShirtText: string = "womens-shirts";
    private categoriesWomensShoesText: string = "womens-shoes";
    private categoriesClearButton: string = ".select2-selection__clear";
    // private categoriesTextField: string = "";
    private selectCategoriesdropdownItem: string = "";

    private filterbyPriceText: string = "";
    private filterbyPriceLeftSlider: string = "div.price_slider > span:nth-child(2)";
    private filterbyPriceRightSlider: string = "div.price_slider > span:nth-child(3)";
    private filterByPriceButton: string = "div.price_slider_amount > button";

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

    private allProductImages: string = "div.astra-shop-thumbnail-wrap > a > img";
    private allProductNameText: string = ".woocommerce-loop-product__title";
    private allProductCategoriesText: string = ".ast-woo-product-category";
    private allProductPrices: string = "div.astra-shop-summary-wrap > span.price";
    private allProductStarRatings: string;
    private allProductAddToCartButton: string;

    private pageOneButton: string = "ul > li:nth-child(2) > a[href*='page/1/']";
    private pageTwoButton: string = "ul > li:nth-child(2) > a[href*='page/2/']";
    private paginationButtons: string = ".page-numbers";

    private allViewCartButton: string = "a[title='View cart']";



    get parentContainerElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.parentContainer);
    }

    get searchProductsTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.searchProductsTextField);
    }

    get searchButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.searchButton);
    }

    get categoriesSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.categoriesSelectField);
    }

    get categoriesAccessoriesTextOptionValue(): string {
        return this.categoriesAccessoriesText;
    }

    get categoriesMenTextOptionValue(): string {
        return this.categoriesMenText;
    }

    get categoriesMensJeanTextOptionValue(): string {
        return this.categoriesMensJeanText;
    }

    get categoriesMensShirtTextOptionValue(): string {
        return this.categoriesMensShirtText;
    }

    get categoriesMensShoesTextOptionValue(): string {
        return this.categoriesMensShoesText;
    }

    get categoriesPursesAndHandBagsTextOptionValue(): string {
        return this.categoriesPursesAndHandBagsText;
    }

    get categoriesWomenTextOptionValue(): string {
        return this.categoriesWomenText;
    }

    get categoriesWomensJeanTextOptionValue(): string {
        return this.categoriesWomensJeanText;
    }

    get categoriesWomensShirtTextOptionValue(): string {
        return this.categoriesWomensShirtText;
    }

    get categoriesWomensShoesTextOptionValue(): string {
        return this.categoriesWomensShoesText;
    }

    get categoriesClearButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.categoriesClearButton);
    }

    get filterbyPriceLeftSliderElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.filterbyPriceLeftSlider);
    }

    get filterbyPriceRightSliderElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.filterbyPriceRightSlider);
    }

    get filterByPriceButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.filterByPriceButton);
    }

    get productHeaderTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productHeaderText);
    }

    get sortingFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.sortingField);
    }

    get defaultSortingTextOptionValue(): string {
        return this.defaultSortingText;
    }

    get sortByPopularityTextOptionValue(): string {
        return this.sortByPopularityText;
    }

    get sortByAverageRatingTextOptionValue(): string {
        return this.sortByAverageRatingText;
    }

    get sortByLatestTextOptionValue(): string {
        return this.sortByLatestText;
    }

    get sortByPriceLowToHighTextOptionValue(): string {
        return this.sortByPriceLowToHighText;
    }

    get sortByPriceHighToLowTextOptionValue(): string {
        return this.sortByPriceHighToLowText;
    }

    get pageOneButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.pageOneButton);
    }

    get pageTwoButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.pageTwoButton);
    }

    get paginationButtonsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.paginationButtons);
    }

    get allViewCartButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allViewCartButton);
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