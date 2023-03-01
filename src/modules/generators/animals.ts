import selectFromArray from "../utils/select-from-array";
import dogs from "../providers/animals/dogs";
import cats from "../providers/animals/cats";

function kind() {
    return selectFromArray(
        Object.getOwnPropertyNames(this).filter((a) => a !== "kind")
    );
}

function dog() {
    return selectFromArray(dogs.dogs);
}
function cat() {
    return selectFromArray(cats.cats);
}

export default {
    kind,
    dog,
    cat,
};
