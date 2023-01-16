class Main {

    //--start navigation bar--//
    private navigationBarHome: string = "ul[id='ast-hf-menu-1'] li[id='menu-item-1226']";
    private navigationBarStore: string = "ul[id='ast-hf-menu-1'] li[id='menu-item-1227']";
    private navigationBarMen: string = "ul[id='ast-hf-menu-1'] li[id='menu-item-1228']";
    private navigationBarWomen: string = "ul[id='ast-hf-menu-1'] li[id='menu-item-1229']";
    private navigationBarAccessories: string = "ul[id='ast-hf-menu-1'] li[id='menu-item-1230']";
    private navigationBarAccount: string = "ul[id='ast-hf-menu-1'] li[id='menu-item-1237']";
    private navigationBarAbout: string = "ul[id='ast-hf-menu-1'] li[id='menu-item-1232']";
    private navigationBarContactUs: string = "ul[id='ast-hf-menu-1'] li[id='menu-item-1233']";
    private headerTitle: string = "h1[itemprop='name'] a[href='https://askomdch.com/']";
    //--end navigation bar--//

    //--start footer--//
    private quickLinkHome: string = "ul[id='menu-quick-links'] li[id='menu-item-1254']";
    private quickLinkAbout: string = "ul[id='menu-quick-links'] li[id='menu-item-1255']";
    private quickLinkMyAccount: string = "ul[id='menu-quick-links'] li[id='menu-item-1256']";
    private quickLinkCart: string = "ul[id='menu-quick-links'] li[id='menu-item-1257']";
    private quickLinkContactUs: string = "ul[id='menu-quick-links'] li[id='menu-item-1258']";

    private menuForHerWomen: string = "ul[id='menu-for-her'] li[id='menu-item-1264']";
    private menuForHerWomensJeans: string = "ul[id='menu-for-her'] li[id='menu-item-1266']";
    private menuForHerWomensShirts: string = "ul[id='menu-for-her'] li[id='menu-item-1265']";
    private menuForHerWomensShoes: string = "ul[id='menu-for-her'] li[id='menu-item-1267']";
    private menuForHerAccessories: string = "ul[id='menu-for-her'] li[id='menu-item-1268']";

    private menuForHimMen: string = "ul[id='menu-for-him'] li[id='menu-item-1263']";
    private menuForHimMensJeans: string = "ul[id='menu-for-him'] li[id='menu-item-1259']";
    private menuForHimMensShirts: string = "ul[id='menu-for-him'] li[id='menu-item-1260']";
    private menuForHimMensShoes: string = "ul[id='menu-for-him'] li[id='menu-item-1261']";
    private menuForHimAccessories: string = "ul[id='menu-for-him'] li[id='menu-item-1262']";

    private cart: string = "div[class='site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container'] a[title='View your shopping cart']";
    private cartFirstRemoveButton: string = "div[id='ast-desktop-header'] div[class='ast-builder-layout-element site-header-focus-item ast-header-woo-cart'] li:nth-child(1) a:nth-child(1)";
    private cartViewCartButton: string = "";
    private cartCheckoutButton: string = "";
    private cartEmptyMessageText: string = "div[class='site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container'] p[class='woocommerce-mini-cart__empty-message']";
    private cartProductsList: string = "div[id='ast-desktop-header'] div[class='ast-builder-layout-element site-header-focus-item ast-header-woo-cart']";

    private productIndex: number;

    //--end footer--//

    get navigationBarHomeElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationBarHome);
    }

    get navigationBarStoreElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationBarStore);
    }

    get navigationBarMenElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationBarMen);
    }

    get navigationBarWomenElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationBarWomen);
    }

    get navigationBarAccessoriesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationBarAccessories);
    }

    get navigationBarAccountElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationBarAccount);
    }

    get navigationBarAboutElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationBarAbout);
    }

    get navigationBarContactUsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationBarContactUs);
    }

    get cartElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cart);
    }

    get headerTitleElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.headerTitle);
    }

    get quickLinkHomeElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.quickLinkHome);
    }

    get quickLinkAboutElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.quickLinkAbout);
    }

    get quickLinkMyAccountElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.quickLinkMyAccount);
    }

    get quickLinkCartElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.quickLinkCart);
    }

    get quickLinkContactUsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.quickLinkContactUs);
    }

    get menuForHerWomenElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHerWomen);
    }

    get menuForHerWomensJeansElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHerWomensJeans);
    }

    get menuForHerWomensShirtsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHerWomensShirts);
    }

    get menuForHerWomensShoesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHerWomensShoes);
    }

    get menuForHerAccessoriesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHerAccessories);
    }

    get menuForHimMenElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHimMen);
    }

    get menuForHimMensJeansElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHimMensJeans);
    }

    get menuForHimMensShirtsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHimMensShirts);
    }

    get menuForHimMensShoesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHimMensShoes);
    }

    get menuForHimAccessoriesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.menuForHimAccessories);
    }

    get cartFirstRemoveButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartFirstRemoveButton);
    }

    get cartViewCartButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartViewCartButton);
    }

    get cartCheckoutButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartCheckoutButton);
    }

    get cartEmptyMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartEmptyMessageText);
    }

    get cartProductsListElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartProductsList);
    }

    set setProductIndex(index: number) {
        this.productIndex = index;
    }

    get dynamicCartListProductName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`div[id='ast-desktop-header'] li:nth-child(${this.productIndex}) a:nth-child(2)`);
    }

    get dynamicCartListProductPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.ast-builder-layout-element:nth-child(2) > #ast-site-header-cart .woocommerce-mini-cart-item:nth-child(${this.productIndex}) bdi`);
    }

    get dynamicCartListProductQuantity(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.ast-builder-layout-element:nth-child(2) > #ast-site-header-cart .woocommerce-mini-cart-item:nth-child(${this.productIndex}) > .quantity`);
    }

    get getCartBadgeTotalItems(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("div[class='site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container']").find("span[class='count']");
    }

    //desktop
    get dynamicCartRemoveButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("div[id='ast-desktop-header'] div[class='ast-builder-layout-element site-header-focus-item ast-header-woo-cart'] li:nth-child(1) a:nth-child(1)");
    }

}

export { Main };