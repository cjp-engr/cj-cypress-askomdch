import { AddressBillingPage } from "../../../pages/account/AddressBilling";
import { AccountAddressBillingTD } from "../../model";

describe('Account Billing Address Page', () => {
    describe('Billing Page Scenario', () => {
        beforeEach(() => {
            cy.fixture('account/address_billing.json').as('billing');
            cy.login();
            AddressBillingPage.addressesNavigationLinkElement.click();
            AddressBillingPage.addButtonElement.click();
        });
        it('1. The information should be saved succesfully after the user entered data to all the required and optional fields', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                cy.url().should('contain', data.links['edit-address']);
                AddressBillingPage.successMessageTextElement.should('contain.text', data.successMessage);

                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['firstName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['lastName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['companyName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['countryRegion']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['streetAddressFirst']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['streetAddressSecond']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['townCity']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['stateCounty']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['postalCodeZip']);

            });

        });

        it('2. The information should not be saved if the "first name" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                // AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);

            });
        });

        it('3. The information should not be saved if the "last name" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                // AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);

            });
        });

        it('4. The information should not be saved if the "country/region" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                // AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
            });
        });

        it('5. The information should not be saved if the "street address first field" is empty but the other required fields are filled', () => {
            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                // AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);

            });
        });

        it('6. The information should not be saved if the "town/city" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                // AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);

            });
        });

        it('7. The information should not be saved if the "state" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                // AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);

            });
        });

        it('8. The information should not be saved if the "zip code" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                // AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                AddressBillingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);

            });
        });

        it('9. The information should not be saved if the "email address" is empty but the other required fields are filled', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.emailAddressTextFieldElement.clear();
                AddressBillingPage.saveAddressButtonElement.click();
                AddressBillingPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);

            });
        });

        it('10. The information should be saved succesfully after the user entered data to all the required fields but all the optional fields are empty', () => {

            AddressBillingPage.clearAllFields();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameTextFieldElement.type(data.user['firstName']);
                AddressBillingPage.lastNameTextFieldElement.type(data.user['lastName']);
                // AddressBillingPage.companyNameTextFieldElement.type(data.user['companyName']);
                AddressBillingPage.countryRegionSelectFieldElement.select(data.user['countryRegion']);
                AddressBillingPage.streetAddressFirstTextFieldElement.type(data.user['streetAddressFirst']);
                // AddressBillingPage.streetAddressSecondTextFieldElement.type(data.user['streetAddressSecond']);
                AddressBillingPage.townCityTextFieldElement.type(data.user['townCity']);
                AddressBillingPage.stateSelectFieldElement.select(data.user['stateCounty']);
                AddressBillingPage.zipCodeTextFieldElement.type(data.user['postalCodeZip']);
                // AddressBillingPage.phoneTextFieldElement.type(data.user['phone']);
                AddressBillingPage.saveAddressButtonElement.click();

                cy.url().should('contain', data.links['edit-address']);
                AddressBillingPage.successMessageTextElement.should('contain.text', data.successMessage);

                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['firstName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['lastName']);
                // AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['companyName']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['countryRegion']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['streetAddressFirst']);
                // AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['streetAddressSecond']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['townCity']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['stateCounty']);
                AddressBillingPage.billingAddressDetailsTextElement.should('contain.text', data.user['postalCodeZip']);

            });
        });

        it.only('10-1. The information should not be saved if all the required fields are empty', () => {

            AddressBillingPage.clearAllFields();
            AddressBillingPage.emailAddressTextFieldElement.type('{selectAll}{backspace}');
            AddressBillingPage.saveAddressButtonElement.click();
            cy.get<AccountAddressBillingTD>('@billing').then((data) => {

                AddressBillingPage.firstNameErrorMessageTextElement.should('contain.text', data.errorMessage['firstName']);
                AddressBillingPage.lastNameErrorMessageTextElement.should('contain.text', data.errorMessage['lastName']);
                AddressBillingPage.countryRegionErrorMessageTextElement.should('contain.text', data.errorMessage['countryRegion']);
                AddressBillingPage.streetAddressErrorMessageTextElement.should('contain.text', data.errorMessage['streetAddressFirst']);
                AddressBillingPage.townCityErrorMessageTextElement.should('contain.text', data.errorMessage['townCity']);
                AddressBillingPage.stateErrorMessageTextElement.should('contain.text', data.errorMessage['stateCounty']);
                AddressBillingPage.zipCodeErrorMessageTextElement.should('contain.text', data.errorMessage['postalCodeZip']);
                AddressBillingPage.emailAddressErrorMessageTextElement.should('contain.text', data.errorMessage['emailAddress']);

            });
        });

        it('24. The information should not be saved if the "country/region" and "first name" are empty but the other required fields are filled', () => {

        });

        it('25. The information should not be saved if the "country/region" and "last name" are empty but the other required fields are filled', () => {

        });

        it('26. The information should not be saved if the "country/region" and "street address" are empty but the other required fields are filled', () => {

        });

        it('27. The information should not be saved if the "country/region" and "town/city" are empty but the other required fields are filled', () => {

        });

        it('28. The information should not be saved if the "country/region" and "state/county" are empty but the other required fields are filled', () => {

        });

        it('29. The information should not be saved if the "country/region" and "postcode/zip" are empty but the other required fields are filled', () => {

        });

        it('30. The information should not be saved if the "country/region" and "email address" are empty but the other required fields are filled', () => {

        });

        it('31. The information should not be saved if the "street address" and "first name" are empty but the other required fields are filled', () => {

        });

        it('32. The information should not be saved if the "street address" and "last name" are empty but the other required fields are filled', () => {

        });

        it('33. The information should not be saved if the "street address" and "country/region" are empty but the other required fields are filled', () => {

        });

        it('34. The information should not be saved if the "street address" and "town/city" are empty but the other required fields are filled', () => {

        });

        it('35. The information should not be saved if the "street address" and "state/county" are empty but the other required fields are filled', () => {

        });

        it('36. The information should not be saved if the "street address" and "postcode/zip" are empty but the other required fields are filled', () => {

        });

        it('37. The information should not be saved if the "street address" and "email address" are empty but the other required fields are filled', () => {

        });

        it('38. The information should not be saved if the "town/city" and "first name" are empty but the other required fields are filled', () => {

        });

        it('39. The information should not be saved if the "town/city" and "last name" are empty but the other required fields are filled', () => {

        });

        it('40. The information should not be saved if the "town/city" and "country/region" are empty but the other required fields are filled', () => {

        });

        it('41. The information should not be saved if the "town/city" and "street address" are empty but the other required fields are filled', () => {

        });

        it('42. The information should not be saved if the "town/city" and "state/county" are empty but the other required fields are filled', () => {

        });

        it('43. The information should not be saved if the "town/city" and "postcode/zip" are empty but the other required fields are filled', () => {

        });

        it('44. The information should not be saved if the "town/city" and "email address" are empty but the other required fields are filled', () => {

        });

        it('45. The information should not be saved if the "state/county" and "first name" are empty but the other required fields are filled', () => {

        });

        it('46. The information should not be saved if the "state/county" and "last name" are empty but the other required fields are filled', () => {

        });

        it('47. The information should not be saved if the "state/county" and "country/region" are empty but the other required fields are filled', () => {

        });

        it('48. The information should not be saved if the "state/county" and "street address" are empty but the other required fields are filled', () => {

        });

        it('49. The information should not be saved if the "state/county" and "town/city" are empty but the other required fields are filled', () => {

        });

        it('50. The information should not be saved if the "state/county" and "postcode/zip" are empty but the other required fields are filled', () => {

        });

        it('51. The information should not be saved if the "state/county" and "email address" are empty but the other required fields are filled', () => {

        });

        it('52. The information should not be saved if the "postcode/zip" and "first name" are empty but the other required fields are filled', () => {

        });

        it('53. The information should not be saved if the "postcode/zip" and "last name" are empty but the other required fields are filled', () => {

        });

        it('54. The information should not be saved if the "postcode/zip" and "country/region" are empty but the other required fields are filled', () => {

        });

        it('55. The information should not be saved if the "postcode/zip" and "street address" are empty but the other required fields are filled', () => {

        });

        it('56. The information should not be saved if the "postcode/zip" and "town/city" are empty but the other required fields are filled', () => {

        });

        it('57. The information should not be saved if the "postcode/zip" and "state/county" are empty but the other required fields are filled', () => {

        });

        it('58. The information should not be saved if the "postcode/zip" and "email address" are empty but the other required fields are filled', () => {

        });

        it('59. The information should not be saved if the "email address" and "first name" are empty but the other required fields are filled', () => {

        });

        it('60. The information should not be saved if the "email address" and "last name" are empty but the other required fields are filled', () => {

        });

        it('61. The information should not be saved if the "email address" and "country/region" are empty but the other required fields are filled', () => {

        });

        it('62. The information should not be saved if the "email address" and "street address" are empty but the other required fields are filled', () => {

        });

        it('63. The information should not be saved if the "email address" and "town/city" are empty but the other required fields are filled', () => {

        });

        it('64. The information should not be saved if the "email address" and "state/county" are empty but the other required fields are filled', () => {

        });

        it('65. The information should not be saved if the "email address" and "postcode/zip" are empty but the other required fields are filled', () => {

        });

        it('', () => {

        });

    });
});