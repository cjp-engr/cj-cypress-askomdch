import { Account } from "./00_Account";

class LostPassword extends Account {
    private resetPasswordUsernameOrEmailTextField: string = "#user_login";
    private resetPasswordButton: string = "button[value='Reset password']";
    private resetPasswordBodyText: string = ".lost_reset_password > p:nth-child(1)";
    private resetPasswordSentEmailText: string = "div[role='alert']";
    private resetPasswordErrorMessageText: string = "ul[role='alert'] li";

    get resetPasswordUsernameOrEmailTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.resetPasswordUsernameOrEmailTextField);
    }

    get resetPasswordButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.resetPasswordButton);
    }

    get resetPasswordBodyTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.resetPasswordBodyText);
    }

    get resetPasswordSentEmailTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.resetPasswordSentEmailText);
    }

    get resetPasswordErrorMessageTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.resetPasswordErrorMessageText);
    }
}

export const LostPasswordPage = new LostPassword();