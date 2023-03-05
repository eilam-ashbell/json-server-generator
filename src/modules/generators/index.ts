import animals from "./animals";
import { birthday } from "./birthday";
import length from "./length";
import names from "./names"
import phone from "./phone"

class Generate {
    public "length" = length
    public "birthday" = birthday
    public "animal" = animals
    public "name" = names
    public "phone" = phone
}

const generate = new Generate()
export default generate