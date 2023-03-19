import companies from "../providers/companies/companies";
import selectFromArray from "../utils/select-from-array";


function name():string {
    return selectFromArray(companies["s&p500"])
}

export default {
    name,
}