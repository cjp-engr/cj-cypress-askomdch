import { Products } from "./00_Products";

class Store extends Products {
    nameSorted(optionValue: string): string[] {
        let productNames: string[] = [];
        let pageTwoFirstIndex: number;
        StorePage.sortingFieldElement.select(optionValue);
        cy.wait(1000);
        StorePage.allProductNameTextElement.each(($el, index, list) => {
            productNames[index] = $el.text();
            if (index == list.length - 1) {
                pageTwoFirstIndex = index + 1;
            }

        });

        StorePage.pageTwoButtonElement.click();

        StorePage.allProductNameTextElement.each(($el, index, list) => {
            productNames[index + pageTwoFirstIndex] = $el.text();
        });

        return productNames;
    }

    priceSorted(optionValue: string): boolean {
        let productPrices: string[] = [];
        let productPricesNum: number[] = [];
        let pageTwoFirstIndex: number;
        let isSorted: boolean;
        StorePage.sortingFieldElement.select(optionValue);
        cy.wait(1000);

        StorePage.allProductPricesElement.each(($el, index, list) => {
            productPrices[index] = $el.text();
            if (index == list.length - 1) {
                pageTwoFirstIndex = index + 1;
            }

            if (productPrices[index].includes(' ')) {
                // x = productPrices[index].split(' ');
                productPricesNum[index] = parseFloat(productPrices[index].split(' ')[1].replace('$', ''));
            } else {
                productPricesNum[index] = parseFloat(productPrices[index].replace('$', ''));
            }

        });

        StorePage.pageTwoButtonElement.click();

        StorePage.allProductPricesElement.each(($el, index, list) => {
            productPrices[index + pageTwoFirstIndex] = $el.text();

            if (productPrices[index + pageTwoFirstIndex].includes(' ')) {
                // x = productPrices[index].split(' ');
                productPricesNum[index + pageTwoFirstIndex] = parseFloat(productPrices[index + pageTwoFirstIndex].split(' ')[1].replace('$', ''));
            }
        });

        console.log(productPricesNum);
        if (optionValue == StorePage.sortByPriceLowToHighTextOptionValue) {
            isSorted = productPricesNum.sort() === productPricesNum;

        } else {
            isSorted = productPricesNum.sort((one, two) => (one > two ? -1 : 1)) === productPricesNum;
        }

        return isSorted;
    }
}

export const StorePage = new Store();