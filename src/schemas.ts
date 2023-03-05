import { faker } from '@faker-js/faker';
import generate from './modules/generators';
 
// data schema for example:
export class student {
    static "amount" = 5;
    static "defaultId" = true
    constructor() {
        this["gender"] = faker.name.sex()
        this["fName"] = generate.name.firstName("male")
        this["lName"] = generate.name.lastName()
        this["fullName"] = generate.name.fullName("male")
        this["age"] = faker.random.numeric(2)
        this["image"] = faker.image.avatar()
        this["phone"] = generate.phone.countryCode()
        this["email"] = faker.internet.email(this["fName"], this["lName"])
    }
};