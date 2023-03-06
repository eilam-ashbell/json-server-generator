import characters from "../providers/random/characters";
import selectFromArray from "../utils/select-from-array";

// Generate new number between min & max values (default 0-1000)
// Option to add padding to match number of digits for all numbers
// by default, padding is off. if turned on you can choose with which digit to pad and how much (by default as 'max' number of digits)
function number(min: number = 0, max: number = 1000, padding?: {digit: number, amount?: number}): number {
    let randNumber = min + Math.random() * (max - min);
    randNumber = Math.round(randNumber)
    if (padding?.digit) {
        randNumber = +randNumber.toString().padStart((padding.amount ? padding.amount : max.toString().length), padding?.digit.toString())
        console.log(randNumber);
    }
    return randNumber;
}

// Generate one character. By default only letters (upper and lower case)
// User can define to add marks and numeric characters or remove upper or lower case. 
function character(
    upperCase: boolean = true,
    lowerCase: boolean = true,
    marks: boolean = false,
    numeric: boolean = false
): string {
    let characterList = [];
    if (upperCase) characterList = [...characters.upperCase];
    if (lowerCase) characterList = [...characterList, ...characters.lowerCase];
    if (marks) characterList = [...characterList, ...characters.marks];
    if (numeric)
        characterList = [
            ...characterList,
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
        ];
    return selectFromArray(characterList);
}

// Generates a random number of characters according to user's 'length' input (by default only letters).
// User can change characters type in options object.
function string(
    length: number,
    options?: { upperCase?: boolean; lowerCase?: boolean; marks?: boolean, numeric?: boolean }
): string {
    const string = [];
    for (let i = 0; i < length; i++) {
        string.push(
            character(options?.upperCase, options?.lowerCase, options?.marks, options?.numeric)
        );
    }
    return string.join("");
}

// Generates random characters according do user's pattern (by default only letters).
// User can change characters type in options object.
function stringFromPattern(
    pattern: string,
    options?: { upperCase?: boolean; lowerCase?: boolean; marks?: boolean, numeric?: boolean }
): string {
    const patternArr = pattern.split("");
    patternArr.forEach((char, i) => {
        if (char === "#") {
            patternArr[i] = character(
                options?.upperCase,
                options?.lowerCase,
                options?.marks,
                options?.numeric
            );
        }
    });
    return patternArr.join("");
}

export default {
    number,
    character,
    string,
    stringFromPattern,
};
