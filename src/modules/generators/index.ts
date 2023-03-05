import animals from "./animals";
import { birthday } from "./birthday";
import length from "./length";
import names from "./names"

class Generate {
    public "length" = length
    public "birthday" = birthday
    public "animal" = animals
    public "name" = names
}

const generate = new Generate()
export default generate