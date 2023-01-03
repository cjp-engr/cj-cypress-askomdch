class Products {
    private searchProductsTextField: string = "";
    private searchButton: string = "";

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
    private sortingField: string = "select.orderby";
    private defaultSortingText: string = "";
    private sortByPopularityText: string = "";
    private sortByAverageRatingText: string = "";
    private sortByLatestText: string = "";
    private sortByPriceLowToHighText: string = "";
    private sortByPriceHighToLowText: string = "";

    private productImages: string;
    private productNameText: string;
    private productCategoriesText: string;
    private productPricesText: string;
    private productStarRatings: string;
    private productAddToCartButton: string;

}

export const ProductsPage = new Products();