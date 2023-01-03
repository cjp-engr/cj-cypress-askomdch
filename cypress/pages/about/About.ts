class About {
    private loginText: string = "";
    private loginUsernameOrEmailAddressTextField: string = "";
    private loginPasswordTextField: string = "";
    private loginRememberMeCheckBox: string = "";
    private loginButton: string = "";
    private loginLostYourPasswordLink: string = "";

    private registerText: string = "";
    private registerUsernameTextField: string = "";
    private registerEmailAddressTextField: string = "";
    private registerPasswordTextField: string = "";
    private registerButton: string = "";

    //todo
    private errorMessageText: string = "";

    private dashboardNavigationLink: string = "";
    private dashboardLogOutLink: string = "";

    private ordersNavigationLink: string = "";
    private noOrderHasBeenMadeYetText: string = "";

    private downloadsNavigationLink: string = "";
    private noDownloadsAvailableYetText: string = "";

    private addressesNavigationLink: string = "";
    private billingAddressText: string = "";
    private billingAddressAddButton: string = "";
    private billingAddressFirstNameTextField: string = "";
    private billingAddressLastNameTextField: string = "";
    private billingAddressCompanyNameTextField: string = "";
    private billingAddressCountryRegionTextField: string = "";
    private billingAddressStreetAddressFirstTextField: string = "";
    private billingAddressStreetAddressSecondTextField: string = "";
    private billingAddressTownCityTextField: string = "";
    private billingAddressStateTextField: string = "";
    private billingAddressZipCodeTextField: string = "";
    private billingAddressPhoneTextField: string = "";
    private billingAddressEmailAddressTextField: string = "";
    private billingAddressSaveAddressButton: string = "";

    private shippingAddressText: string = "";
    private shippingAddressAddButton: string = "";
    private shippingAddressFirstNameTextField: string = "";
    private shippingAddressLastNameTextField: string = "";
    private shippingAddressCompanyNameTextField: string = "";
    private shippingAddressCountryRegionTextField: string = "";
    private shippingAddressStreetAddressFirstTextField: string = "";
    private shippingAddressStreetAddressSecondTextField: string = "";
    private shippingAddressTownCityTextField: string = "";
    private shippingAddressStateTextField: string = "";
    private shippingAddressZipCodeTextField: string = "";
    private shippingAddressSaveAddressButton: string = "";

    private accountDetailsNavigationLink: string = "";
    private accountDetailsFirstNameTextField: string = "";
    private accountDetailsLastNameTextField: string = "";
    private accountDetailsDisplayNameTextField: string = "";
    private accountDetailsEmailAddressTextField: string = "";
    private accountDetailsCurrentPasswordTextField: string = "";
    private accountDetailsNewPasswordTextField: string = "";
    private accountDetailsConfirmNewPasswordTextField: string = "";
    private accountDetailsSaveChangesButton: string = "";

    private logoutNavigationLink: string = "";

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

    get addressesNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addressesNavigationLink);
    }

    get billingAddressTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressText);
    }
    get billingAddressAddButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressAddButton);
    }

    get billingAddressFirstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressFirstNameTextField);
    }

    get billingAddressLastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressLastNameTextField);
    }

    get billingAddressCompanyNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressCompanyNameTextField);
    }

    get billingAddressCountryRegionTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressCountryRegionTextField);
    }
    get billingAddressStreetAddressFirstTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressStreetAddressFirstTextField);
    }

    get billingAddressStreetAddressSecondTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressStreetAddressSecondTextField);
    }

    get billingAddressTownCityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressTownCityTextField);
    }

    get billingAddressStateTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressStateTextField);
    }

    get billingAddressZipCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressZipCodeTextField);
    }
    get billingAddressPhoneTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressPhoneTextField);
    }

    get billingAddressEmailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressEmailAddressTextField);
    }

    get billingAddressSaveAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.billingAddressSaveAddressButton);
    }

    get shippingAddressTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressText);
    }

    get shippingAddressAddButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressAddButton);
    }
    get shippingAddressFirstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressFirstNameTextField);
    }

    get shippingAddressLastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressLastNameTextField);
    }

    get shippingAddressCompanyNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressCompanyNameTextField);
    }

    get shippingAddressCountryRegionTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressCountryRegionTextField);
    }

    get shippingAddressStreetAddressFirstTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressStreetAddressFirstTextField);
    }
    get shippingAddressStreetAddressSecondTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressStreetAddressSecondTextField);
    }

    get shippingAddressTownCityTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressTownCityTextField);
    }

    get shippingAddressStateTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressStateTextField);
    }

    get shippingAddressZipCodeTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressZipCodeTextField);
    }

    get shippingAddressSaveAddressButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.shippingAddressSaveAddressButton);
    }
    get accountDetailsNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsNavigationLink);
    }

    get accountDetailsFirstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsFirstNameTextField);
    }

    get accountDetailsLastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsLastNameTextField);
    }

    get accountDetailsDisplayNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsDisplayNameTextField);
    }

    get accountDetailsEmailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsEmailAddressTextField);
    }

    get accountDetailsCurrentPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsCurrentPasswordTextField);
    }

    get accountDetailsNewPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsNewPasswordTextField);
    }
    get accountDetailsConfirmNewPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsConfirmNewPasswordTextField);
    }

    get accountDetailsSaveChangesButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.accountDetailsSaveChangesButton);
    }

    get logoutNavigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.logoutNavigationLink);
    }

}

export const AboutPage = new About();