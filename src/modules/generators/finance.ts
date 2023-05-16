import finances from "../providers/finances";
import ICurrency from "../types/ICurrency";
import Ilocales from "../types/ILocales";
import { ccCompanies } from "../types/ccCompanies";
import selectFromArray from "../utils/select-from-array";
import math from "./math";
import person from "./person";

function currency(options?: {
    min?: number;
    max?: number;
    locale?: Ilocales;
    currency?: ICurrency;
    MSD?: number;
}): string {
    const randNum = math.number(options?.min || 0, options?.max || 100000);
    const formater = new Intl.NumberFormat(options?.locale || "en-US", {
        style: "currency",
        currency: options?.currency || "USD",
        maximumSignificantDigits: options?.MSD || undefined,
    });
    return formater.format(randNum);
}

function creditCardBrand(): ccCompanies {
    return selectFromArray(finances.ccCompanies);
}

function creditCardCVVCode(brand?: ccCompanies): number {
    if (!brand) brand = creditCardBrand()
    switch (brand) {
        case "american express":
            return Math.floor(Math.random() * 9000) + 1000;
        default:
            return Math.floor(Math.random() * 900) + 100;
    }
}

function creditCardExpirationDate(): string {
    const expirationMonth = Math.floor(Math.random() * 12) + 1;
    const expirationYear = new Date().getFullYear() + Math.floor(Math.random() * 6);
    return `${expirationMonth.toString().padStart(2, "0")}/${expirationYear}`;
  }

function currencyName(): string {
    return selectFromArray(finances.currencyName);
}

function creditCardNumber(brand?: ccCompanies): string {
    if (!brand) brand = creditCardBrand()
    let cardNumber = "";
    const brandPrefixes = {
      "visa": "4",
      "mastercard": "5",
      "discover": "6",
      "american express": "37",
    };

    const prefix = brandPrefixes[brand];
    if (!prefix) {
      throw new Error("Invalid card type");
    }
  
    // generate the main card number
    for (let i = 0; i < 15; i++) {
      cardNumber += Math.floor(Math.random() * 10);
    }
  
    // add prefix and check digit
    cardNumber = prefix + cardNumber;
    const checkDigit = generateCheckDigit(cardNumber);
    cardNumber += checkDigit;
  
    return cardNumber;
  }

// helper function to generate the check digit
function generateCheckDigit(cardNumber) {
    const digits = cardNumber.split("").map(Number);
    let sum = 0;
  
    for (let i = digits.length - 1; i >= 0; i -= 2) {
      sum += digits[i];
    }
  
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      let double = digits[i] * 2;
      if (double > 9) {
        double -= 9;
      }
      sum += double;
    }
  
    return (sum * 9) % 10;
  }

export default { 
    currency,
    creditCardBrand,
    creditCardCVVCode,
    creditCardExpirationDate,
    currencyName,
    creditCardNumber,
};
