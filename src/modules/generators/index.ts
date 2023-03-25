import animals from "./animals";
import color from "./color";
import companies from "./companies";
import countries from "./countries";
import crypto from "./crypto";
import dates from "./dates";
import length from "./units";
import person from "./person";
import phone from "./phone";
import random from "./random";
import time from "./time";
import web from "./web";
import math from "./math";
import product from "./product";
import finance from "./finance";
import selectFromArray from "../utils/select-from-array";

class Generate {
    public "animal" = animals;
    public "color" = color;
    public "company" = companies;
    public "country" = countries;
    public "crypto" = crypto;
    public "date" = dates;
    public "finance" = finance
    public "units" = length;
    public "math" = math;
    public "person" = person;
    public "phone" = phone;
    public "product" = product
    public "random" = random;
    public "time" = time;
    public "web" = web;
    public "fromList" = selectFromArray
}

const generate = new Generate();
export default generate;
