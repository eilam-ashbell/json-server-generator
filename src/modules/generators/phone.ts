import countryCodes from "../providers/phone/country-codes";
import randomDigit from "../utils/random-digit";
import selectFromArray from "../utils/select-from-array";

// Takes user's pattern and replace every '#' with a random digit
function patternExchange(pattern: string): string {
    const patternArr = pattern.split("");
    patternArr.forEach((char, i) => {
        if (char === "#") {
            patternArr[i] = randomDigit().toString();
        }
    });
    return patternArr.join("");
}

// Generates random phone number of 10 digits.
// User can provide desire pattern and receive number according to it.
function number(pattern?: string): string {
    if (pattern) return patternExchange(pattern);
    const defaultPattern = "###-###-####";
    return this.pattern(defaultPattern);
}

// Generates random phone number country code.
// User can decide on specific country if needed.
function countryCode(isoCode?: keyof typeof countryCodes): string {
    if (!isoCode)
        return `+${
            countryCodes[
                Object.keys(countryCodes)[
                    Math.floor(Math.random() * Object.keys(countryCodes).length)
                ]
            ]
        }`;
    return `+${countryCodes[isoCode]}`;
}

export default {
    number,
    countryCode,
};
