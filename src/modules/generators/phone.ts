import countryCodes from "../providers/phone/country-codes"
import ICountryCodes, { countryCodesArr } from "../providers/phone/country-codes-interface"
import randomDigit from "../utils/random-digit"
import selectFromArray from "../utils/select-from-array"

function patternExchange(pattern: string): string {
    const patternArr = pattern.split('')
    patternArr.forEach( (char, i) => {
        if (char === "#") {
            patternArr[i] = randomDigit().toString()
        }
    })
    return patternArr.join('')
}

function number(pattern?: string): string {
    if (pattern) return patternExchange(pattern);
    const defaultPattern = "###-###-####"
    return this.pattern(defaultPattern)
}

function countryCode(isoCode?: ICountryCodes): string {
    if (!isoCode) return `+${countryCodes[countryCodesArr[Math.floor(Math.random() * countryCodesArr.length)]]}`
    return `+${countryCodes[isoCode]}`
}

export default {
    number,
    countryCode
}