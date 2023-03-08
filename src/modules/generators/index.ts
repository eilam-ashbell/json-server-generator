import animals from "./animals";
import { birthday } from "./birthday";
import color from "./color";
import crypto from "./crypto";
import length from "./length";
import person from "./person"
import phone from "./phone";
import random from "./random"
import web from "./web";


class Generate {
    public "length" = length
    public "birthday" = birthday
    public "animal" = animals
    public "person" = person
    public "phone" = phone
    public "random" = random
    public "crypto" = crypto
    public "web" = web
    public "color" = color
}

const generate = new Generate()
export default generate