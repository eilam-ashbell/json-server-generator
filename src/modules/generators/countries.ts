import countries from "../providers/countries/countries";
import selectFromArray from "../utils/select-from-array";


function name(type: "full" | "alpha2" | "alpha3" = "full"): string {
    if (type === "alpha2") return selectFromArray(countries.alpha2)
    if (type === "alpha3") return selectFromArray(countries.alpha3)
    return selectFromArray(countries.name)
}

export default {
    name
}