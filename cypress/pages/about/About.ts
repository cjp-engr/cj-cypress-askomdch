import { Main } from "../Main";

class About extends Main {
    private aboutUsHeaderText: string = "";
    private aboutUsText: string = "";
    private aboutUsDescriptionText: string = "";
    private aboutUsImage: string = "";
    private ourTeamText: string = "";
    private ourTeamDescriptionText: string = "";
    // private allTeamNamesText: string = "";
    // private allTeamImages: string = "";
    // private allTeamTitleText: string = "";
    private linkedInIcon: string = "";
    private youtubeIcon: string = "";
    private udemyIcon: string = "";

    get aboutUsHeaderTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.aboutUsHeaderText);
    }

    get aboutUsTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.aboutUsText);
    }

    get aboutUsDescriptionTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.aboutUsDescriptionText);
    }

    get aboutUsImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.aboutUsImage);
    }

    get ourTeamTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.ourTeamText);
    }

    get ourTeamDescriptionTextElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.ourTeamDescriptionText);
    }

    get linkedInIconElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.linkedInIcon);
    }

    get youtubeIconElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.youtubeIcon);
    }

    get udemyIconElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.udemyIcon);
    }

}

export const AboutPage = new About();