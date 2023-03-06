import { faker } from '@faker-js/faker';
import generate from './modules/generators';
 
// data schema for example:
export class student {
    static "amount" = 5;
    static "defaultId" = true
    constructor() {
        this["gender"] = generate.person.gender()
        this["fName"] = generate.person.firstName()
        this["lName"] = generate.person.lastName()
        this["age"] = generate.random.number()
        this["image"] = faker.image.avatar()
        this["phone"] = generate.phone.number(generate.phone.countryCode() + "-###-###-####")
        this["email"] = faker.internet.email(this["fName"], this["lName"])
    }
};