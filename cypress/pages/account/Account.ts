import { Main } from '../Main';

class Account extends Main {
    private loginText: string = "div[class='u-column1 col-1'] h2";
    private loginUsernameOrEmailAddressTextField: string = "#username";
    private loginPasswordTextField: string = "#password";
    private loginRememberMeCheckBox: string = "#rememberme";
    private loginButton: string = "button[value='Log in']";
    private loginLostYourPasswordLink: string = "a[href*='/lost-password']";

    private registerText: string = "";
    private registerUsernameTextField: string = "#reg_username";
    private registerEmailAddressTextField: string = "#reg_email";
    private registerPasswordTextField: string = "#reg_password";
    private registerButton: string = "button[value='Register']";

    //error message for both login and register
    private errorMessageText: string = "ul[role='alert'] li";

    private dashboardNavigationLink: string = ".woocommerce-MyAccount-navigation-link--dashboard";
    private dashboardLogOutLink: string = "p:nth-child(2) > a[href*='logout']:nth-child(3)";
    private dashboardFirstBodyText: string = "div.woocommerce-MyAccount-content p:nth-child(2)";
    private dashboardSecondBodyText: string = "div.woocommerce-MyAccount-content p:nth-child(3)";

    private ordersNavigationLink: string = ".woocommerce-MyAccount-navigation-link--orders";
    private noOrderHasBeenMadeYetText: string = "";

    private downloadsNavigationLink: string = ".woocommerce-MyAccount-navigation-link--downloads";
    private noDownloadsAvailableYetText: string = "";

    // private shippingAddressText: string = "";
    // private shippingAddressAddButton: string = "a[href*='/edit-address/shipping']";
    // private shippingAddressFirstNameTextField: string = "#shipping_first_name";
    // private shippingAddressLastNameTextField: string = "#shipping_last_name";
    // private shippingAddressCompanyNameTextField: string = "#shipping_company";
    // private shippingAddressCountryRegionSelectField: string = "select[name='shipping_country']";
    // private shippingAddressStreetAddressFirstTextField: string = "#shipping_address_1";
    // private shippingAddressStreetAddressSecondTextField: string = "#shipping_address_2";
    // private shippingAddressTownCityTextField: string = "#shipping_city";
    // private shippingAddressStateSelectField: string = "#shipping_state";
    // private shippingAddressZipCodeTextField: string = "#shipping_postcode";
    // private shippingAddressSaveAddressButton: string = "button[name='save_address']";

    // private accountDetailsNavigationLink: string = ".woocommerce-MyAccount-navigation-link--edit-account";
    // private accountDetailsFirstNameTextField: string = "#account_first_name";
    // private accountDetailsLastNameTextField: string = "#account_last_name";
    // private accountDetailsDisplayNameTextField: string = "#account_display_name";
    // private accountDetailsEmailAddressTextField: string = "#account_email";
    // private accountDetailsCurrentPasswordTextField: string = "#password_current";
    // private accountDetailsNewPasswordTextField: string = "#password_1";
    // private accountDetailsConfirmNewPasswordTextField: string = "#password_2";
    // private accountDetailsSaveChangesButton: string = "button[value='Save changes']";

    private logoutNavigationLink: string = ".woocommerce-MyAccount-navigation-link--customer-logout";

    get loginTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginText);
    }

    get loginUsernameOrEmailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginUsernameOrEmailAddressTextField);
    }

    get loginPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginPasswordTextField);
    }

    get loginRememberMeCheckBoxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginRememberMeCheckBox);
    }

    get loginButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginButton);
    }

    get loginLostYourPasswordLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginLostYourPasswordLink);
    }

    get registerTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.registerText);
    }

    get registerUsernameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.registerUsernameTextField);
    }

    get registerEmailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.registerEmailAddressTextField);
    }

    get registerPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.registerPasswordTextField);
    }
    get registerButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.registerButton);
    }

    get errorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.errorMessageText);
    }

    get dashboardNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.dashboardNavigationLink);
    }

    get dashboardLogOutLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.dashboardLogOutLink);
    }

    get dashboardFirstBodyTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.dashboardFirstBodyText);
    }

    get dashboardSecondBodyTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.dashboardSecondBodyText);
    }

    get ordersNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.ordersNavigationLink);
    }
    get noOrderHasBeenMadeYetTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.noOrderHasBeenMadeYetText);
    }

    get downloadsNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.downloadsNavigationLink);
    }

    get noDownloadsAvailableYetTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.noDownloadsAvailableYetText);
    }

    // get shippingAddressTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressText);
    // }

    // get shippingAddressAddButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressAddButton);
    // }
    // get shippingAddressFirstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressFirstNameTextField);
    // }

    // get shippingAddressLastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressLastNameTextField);
    // }

    // get shippingAddressCompanyNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressCompanyNameTextField);
    // }

    // get shippingAddressCountryRegionSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressCountryRegionSelectField);
    // }

    // get shippingAddressStreetAddressFirstTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressStreetAddressFirstTextField);
    // }
    // get shippingAddressStreetAddressSecondTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressStreetAddressSecondTextField);
    // }

    // get shippingAddressTownCityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressTownCityTextField);
    // }

    // get shippingAddressStateSelectFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressStateSelectField);
    // }

    // get shippingAddressZipCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressZipCodeTextField);
    // }

    // get shippingAddressSaveAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.shippingAddressSaveAddressButton);
    // }
    // get accountDetailsNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsNavigationLink);
    // }

    // get accountDetailsFirstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsFirstNameTextField);
    // }

    // get accountDetailsLastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsLastNameTextField);
    // }

    // get accountDetailsDisplayNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsDisplayNameTextField);
    // }

    // get accountDetailsEmailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsEmailAddressTextField);
    // }

    // get accountDetailsCurrentPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsCurrentPasswordTextField);
    // }

    // get accountDetailsNewPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsNewPasswordTextField);
    // }
    // get accountDetailsConfirmNewPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsConfirmNewPasswordTextField);
    // }

    // get accountDetailsSaveChangesButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //     return cy.get(this.accountDetailsSaveChangesButton);
    // }

    get logoutNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.logoutNavigationLink);
    }
}

export const AccountPage = new Account();
export { Account };