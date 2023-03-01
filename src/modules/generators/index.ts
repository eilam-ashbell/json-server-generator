import animals from "./animals";
import { birthday } from "./birthday";
import length from "./length";

class Generate {
    public "length" = length
    public "birthday" = birthday
    public "animals" = animals
}

const generate = new Generate()
export default generate