import namesFemale from "../providers/person/names-female";
import namesLast from "../providers/person/names-last";
import namesMale from "../providers/person/names-male";
import genders from "../providers/person/genders";
import selectFromArray from "../utils/select-from-array";

// Generates american first name of male or female.
// User can provide desire gender and generate the name according to that gender.
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

// Generates american last name.
function lastName(): string {
    return selectFromArray(namesLast.lastNames)
}

// Generates american full name of male or female.
// User can provide desire gender and generate the name according to that gender.
function fullName(gender?: "male" | "female"): string {
    const firstName = this.firstName(gender)
    const lastName = this.lastName()
    return `${firstName} ${lastName}`
}

// Generate classic gender
function gender(): "male" | "female" {
    return selectFromArray(["male", "female"])
}

// Generate more inclusive gender options
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