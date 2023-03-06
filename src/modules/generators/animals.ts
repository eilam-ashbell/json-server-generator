import selectFromArray from "../utils/select-from-array";
import dogs from "../providers/animals/dogs";
import cats from "../providers/animals/cats";

// Generate a kind of animal from all exist animal generators 
function kind() {
    return selectFromArray(
        Object.getOwnPropertyNames(this).filter((a) => a !== "kind")
    );
}

// Generates a dog breed
function dog() {
    return selectFromArray(dogs.dogs);
}

// Generates a cat breed
function cat() {
    return selectFromArray(cats.cats);
}

export default {
    kind,
    dog,
    cat,
};
