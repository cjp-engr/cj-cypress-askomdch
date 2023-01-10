//TD => TestData
export interface AccountTD {
    hello: any;
    credentials: any;
    links: any;
    errorMessage: any;
    successMessage: any;
    text: any;
}

export interface AccountDetailsTD {
    errorMessage: any;
    successMessage: string;
}

export interface AccountLostPasswordTD {
    bodyText: string;
    successMessage: string;
    errorMessage: string;
    unregisteredEmail: string;
    unregisteredUsername: string;
}

export interface AccountDetailsUserTD {
    valid: boolean;
    firstName: string;
    lastName: string;
    displayName: string;
    emailAddress: string;
}

export interface AccountAddressBillingTD {
    user: any;
    links: any;
    successMessage: string;
    errorMessage: string;
}

export interface AccountAddressShippingTD {
    user: any;
    links: any;
    successMessage: string;
    errorMessage: string;
}

