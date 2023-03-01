import { faker } from '@faker-js/faker';
 
// data schema for example:
export class student {
    static "amount" = 5;
    static "defaultId" = true
    constructor() {
        this["gender"] = faker.name.sex()
        this["fName"] = faker.name.firstName(this["gender"])
        this["lName"] = faker.name.lastName()
        this["age"] = faker.random.numeric(2)
        this["image"] = faker.image.avatar()
        this["phone"] = faker.phone.number('+972-5########')
        this["email"] = faker.internet.email(this["fName"], this["lName"])
    }
};