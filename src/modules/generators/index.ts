import animals from "./animals";
import color from "./color";
import crypto from "./crypto";
import dates from "./dates";
import length from "./length";
import person from "./person"
import phone from "./phone";
import random from "./random"
import time from "./time";
import web from "./web";


class Generate {
    public "length" = length
    public "animal" = animals
    public "person" = person
    public "phone" = phone
    public "random" = random
    public "crypto" = crypto
    public "web" = web
    public "color" = color
    public "time" = time
    public "dates" = dates
}

const generate = new Generate()
export default generate