import animals from "./animals";
import { birthday } from "./birthday";
import length from "./length";
import person from "./person"
import phone from "./phone";
import random from "./random"


class Generate {
    public "length" = length
    public "birthday" = birthday
    public "animal" = animals
    public "person" = person
    public "phone" = phone
    public "random" = random
}

const generate = new Generate()
export default generate