import { Main } from "../Main";

class AccountOrders extends Main {
    private navigationLink: string = ".woocommerce-MyAccount-navigation-link--orders";
    private orderTable: string = ".woocommerce-orders-table";
    // private rowNumberIndex: number;
    // private orderNumberIndex: number;
    // private dateIndex: number;
    // private statusIndex: number;
    // private totalIndex: number;
    // private viewActionsIndex: number;
    private viewOrderOrderDetails: string = "";
    private viewOrderOrderTotal: string = "";

    checkOrderNumber(x: number) {
        let orderNumber: string = '';
        cy.wrap(x).then(() => {
            cy.get('tbody')
                .find(`.order:nth-of-type(${x}) td:nth-of-type(${1})`)
                .each(($el) => {
                    orderNumber = $el.text().trim();
                    cy.get(`.order:nth-of-type(${x}) td:nth-of-type(${5})`)
                        .click();
                    cy.wrap(orderNumber).then(() => {
                        cy.get('div.wp-block-group.alignfull > div > div.woocommerce > div > p')
                            .should('contain.text', orderNumber)
                    });
                    AccountOrdersPage.navigationLinkElement.click();
                });

        });
    }

    checkDate(x: number) {
        let orderDate: string = '';
        cy.wrap(x).then(() => {
            cy.get('tbody')
                .find(`.order:nth-of-type(${x}) td:nth-of-type(${2})`)
                .each(($el) => {
                    orderDate = $el.text().trim();
                    cy.get(`.order:nth-of-type(${x}) td:nth-of-type(${5})`)
                        .click();
                    cy.wrap(orderDate).then(() => {
                        cy.get('div.wp-block-group.alignfull > div > div.woocommerce > div > p')
                            .should('contain.text', orderDate);
                    });
                    AccountOrdersPage.navigationLinkElement.click();
                });

        });
    }

    checkStatus(x: number) {
        let orderStatus: string = '';
        cy.wrap(x).then(() => {
            cy.get('tbody')
                .find(`.order:nth-of-type(${x}) td:nth-of-type(${3})`)
                .each(($el) => {
                    orderStatus = $el.text().trim();
                    cy.get(`.order:nth-of-type(${x}) td:nth-of-type(${5})`)
                        .click();
                    cy.wrap(orderStatus).then(() => {
                        cy.get('div.wp-block-group.alignfull > div > div.woocommerce > div > p')
                            .should('contain.text', orderStatus);
                    });
                    AccountOrdersPage.navigationLinkElement.click();
                });

        });
    }

    checkTotal(x: number) {
        let total: string = '';
        cy.wrap(x).then(() => {
            cy.get('tbody')
                .find(`.order:nth-of-type(${x}) td:nth-of-type(${4})`)
                .each(($el) => {
                    total = $el.text().trim();

                    cy.get(`.order:nth-of-type(${x}) td:nth-of-type(${5})`)
                        .click();
                    cy.wrap(total).then(() => {
                        cy.get('tr:nth-child(4) > td > span')
                            .should('contain.text', total.split(' ')[0]);
                    });
                    AccountOrdersPage.navigationLinkElement.click();
                });

        });
    }

    get navigationLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.navigationLink);
    }

    get orderTableFindElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.orderTable).find('tbody tr');
    }

    get viewOrderOrderTotalElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.viewOrderOrderTotal);
    }

    get viewOrderOrderDetailsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.viewOrderOrderDetails);
    }

}

export const AccountOrdersPage = new AccountOrders();