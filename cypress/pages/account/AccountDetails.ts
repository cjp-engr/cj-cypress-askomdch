class AccountDetails {
    private navigationLink: string = ".woocommerce-MyAccount-navigation-link--edit-account";
    private firstNameTextField: string = "#account_first_name";
    private lastNameTextField: string = "#account_last_name";
    private displayNameTextField: string = "#account_display_name";
    private emailAddressTextField: string = "#account_email";
    private currentPasswordTextField: string = "#password_current";
    private newPasswordTextField: string = "#password_1";
    private confirmNewPasswordTextField: string = "#password_2";
    private saveChangesButton: string = "button[value='Save changes']";

    get navigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationLink);
    }

    get firstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstNameTextField);
    }

    get lastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastNameTextField);
    }

    get displayNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.displayNameTextField);
    }

    get emailAddressTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.emailAddressTextField);
    }

    get currentPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.currentPasswordTextField);
    }

    get newPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.newPasswordTextField);
    }
    get confirmNewPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.confirmNewPasswordTextField);
    }

    get saveChangesButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.saveChangesButton);
    }
}

export const AccountDetailsPage = new AccountDetails();