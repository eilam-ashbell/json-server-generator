import countries from "../providers/countries/countries";
import selectFromArray from "../utils/select-from-array";


function name(type: "full" | "alpha2 code" | "alpha3 code" = "full"): string {
    if (type === "alpha2 code") return selectFromArray(countries.alpha2)
    if (type === "alpha3 code") return selectFromArray(countries.alpha3)
    return selectFromArray(countries.name)
}

export default {
    name
}