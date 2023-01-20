import { AccountOrdersPage } from "../../../pages/account/Orders";


describe('Account Orders Page', () => {
    describe('--', () => {
        beforeEach(() => {
            cy.login();
            AccountOrdersPage.navigationLinkElement.click();
        });

        afterEach(() => {
            cy.logout();
        });

        it('1. The "order number" in the Orders Page should match on the View Orders Page', function () {
            AccountOrdersPage.orderTableFindElement
                .then((row) => {
                    for (let x = 1; x <= row.length; x++) {
                        AccountOrdersPage.checkOrderNumber(x);
                    }
                });

        });

        it('2. The "order date" in the Orders Page should match on the View Orders Page', () => {
            AccountOrdersPage.orderTableFindElement
                .then((row) => {
                    for (let x = 1; x <= row.length; x++) {
                        AccountOrdersPage.isActualDateMatchExpected(x);
                    }
                });
        });

        it('3. The "order status" in the Orders Page should match on the View Orders Page', () => {
            AccountOrdersPage.orderTableFindElement
                .then((row) => {
                    for (let x = 1; x <= row.length; x++) {
                        AccountOrdersPage.isActualOrderStatusMatchExpected(x);
                    }
                });
        });

        it('4. The "order total" in the Orders Page should match on the View Orders Page', () => {
            AccountOrdersPage.orderTableFindElement
                .then((row) => {
                    for (let x = 1; x <= row.length; x++) {
                        AccountOrdersPage.isActualTotalMatchExpected(x);
                    }
                });
        });
    });
});