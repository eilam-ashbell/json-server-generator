import { faker } from '@faker-js/faker';

// ---------- INSTRUCTIONS ----------
//? General:
//    you can create how many classes as you wish.
//    every class will get it own route by json-server.
//    define your data field for each object in class constructor.
//    follow faker-js documentation to learn more about generation options [https://fakerjs.dev/api/]

//? Number of objects in each route:
//    if you want to define the number of object per route, add 'static "amount" = YOUR_DESIRE_NUMBER' to your class.
//    if 'amount' is not define - 10 object will generate by default.

//? Automatic id:
//    if you want to generate auto id as running numbers, add 'static "defaultId" = true' to your class.
//    if not needed you can delete it or define as 'false'.

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