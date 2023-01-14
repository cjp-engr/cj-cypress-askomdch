import { OrdersPage } from "../../../pages/account/Orders";


describe('Orders Page', () => {
    describe('--', () => {
        beforeEach(() => {
            cy.login();
            OrdersPage.navigationLinkElement.click();
        });

        it('1. The "order number" in the Orders Page should match on the View Orders Page', function () {
            OrdersPage.orderTableFindElement
                .then((row) => {
                    for (let x = 1; x <= row.length; x++) {
                        OrdersPage.checkOrderNumber(x);
                    }
                });

        });

        it('2. The "order date" in the Orders Page should match on the View Orders Page', () => {
            OrdersPage.orderTableFindElement
                .then((row) => {
                    for (let x = 1; x <= row.length; x++) {
                        OrdersPage.checkDate(x);
                    }
                });
        });

        it('3. The "order status" in the Orders Page should match on the View Orders Page', () => {
            OrdersPage.orderTableFindElement
                .then((row) => {
                    for (let x = 1; x <= row.length; x++) {
                        OrdersPage.checkStatus(x);
                    }
                });
        });

        it('4. The "order total" in the Orders Page should match on the View Orders Page', () => {
            OrdersPage.orderTableFindElement
                .then((row) => {
                    for (let x = 1; x <= row.length; x++) {
                        OrdersPage.checkTotal(x);
                    }
                });
        });
    });
});