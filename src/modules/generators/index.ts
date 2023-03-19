import animals from "./animals";
import color from "./color";
import companies from "./companies";
import countries from "./countries";
import crypto from "./crypto";
import dates from "./dates";
import length from "./length";
import person from "./person";
import phone from "./phone";
import random from "./random";
import time from "./time";
import web from "./web";
import math from "./math";

class Generate {
    public "animal" = animals;
    public "color" = color;
    public "company" = companies;
    public "country" = countries;
    public "crypto" = crypto;
    public "date" = dates;
    public "length" = length;
    public "math" = math;
    public "person" = person;
    public "phone" = phone;
    public "random" = random;
    public "time" = time;
    public "web" = web;
}

const generate = new Generate();
export default generate;
