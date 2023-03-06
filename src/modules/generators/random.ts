import characters from "../providers/random/characters"
import selectFromArray from "../utils/select-from-array"


function number(min: number=0, max: number=1000): number {
    const randNumber = min + (Math.random() * (max - min))
    return Math.round(randNumber)
}

function character(upperCase: boolean = true, lowerCase: boolean = true, marks: boolean = false): string {
    let characterList = []
    if (upperCase) characterList = [...characters.upperCase]
    if (lowerCase) characterList = [...characterList, ...characters.lowerCase]
    if (marks) characterList = [...characterList, ...characters.marks]
    return selectFromArray(characterList)
}

function string(length: number, upperCase: boolean = true, lowerCase: boolean = true, marks: boolean = false): string {
    const string = []
    for (let i = 0; i < length; i++ ) {
        string.push(character(upperCase, lowerCase, marks))
    }
    return string.join('')
}

export default {
    number,
    character,
    string
}