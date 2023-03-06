import namesFemale from "../providers/person/names-female";
import namesLast from "../providers/person/names-last";
import namesMale from "../providers/person/names-male";
import genders from "../providers/person/genders";
import selectFromArray from "../utils/select-from-array";

function firstName(gender?: "male" | "female"): string {
    if (!gender) {
        gender = selectFromArray(["male", "female"]);
    }
    if (gender === "male") {
        return selectFromArray(namesMale.maleNames);
    } else {
        return selectFromArray(namesFemale.femaleNames);
    }
}

function lastName(): string {
    return selectFromArray(namesLast.lastNames)
}

function fullName(gender?: "male" | "female"): string {
    const firstName = this.firstName(gender)
    const lastName = this.lastName()
    return `${firstName} ${lastName}`
}

function gender(): "male" | "female" {
    return selectFromArray(["male", "female"])
}

function inclusiveGender(): string {
    let genderList = [...genders.conservative, ...genders.inclusive]
    return selectFromArray(genderList)
}

export default {
    firstName,
    lastName,
    fullName,
    gender,
    inclusiveGender,
}