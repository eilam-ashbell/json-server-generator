import namesFemale from "../providers/names/names-female";
import namesLast from "../providers/names/names-last";
import namesMale from "../providers/names/names-male";
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

export default {
    firstName,
    lastName,
    fullName
}