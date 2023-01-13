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

    get logoutNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.logoutNavigationLink);
    }
}

export const AccountPage = new Account();
export { Account };