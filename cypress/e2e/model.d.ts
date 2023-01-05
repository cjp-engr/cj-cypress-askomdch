export interface AccountTestData extends AccountErrorMessage, AccountLinks {
    credentials: any;
    accountLogoutLink: string;
    dashboardSecondBodyText: string;
    hello: string;
}

interface AccountErrorMessage {
    unregisteredErrorMessage: string;
    passwordEmptyErrorMessage: string;
}

interface AccountLinks {
    accountLink: string;
    accountOrdersLink: string;
    accountDownloadsLink: string;
    accountAddressesLink: string;
    accountBillingAddressLink: string;
    accountShippingAddressLink: string;
    accountAccountDetailsLink: string;
}
