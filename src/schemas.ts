import { faker } from "@faker-js/faker";
import generate from "./modules/generators";

// data schema for example:
export class student {
    static "amount" = 5;
    static "defaultId" = true;
    public "gender" = generate.person.gender();
    public "fName" = generate.person.firstName();
    public "lName" = generate.person.lastName();
    public "age" = generate.random.number(10, 100);
    public "image" = faker.image.avatar();
    public "email" = faker.internet.email(this["fName"], this["lName"]);
    public "phone" = generate.phone.number(
        generate.phone.countryCode() + "-###-###-####"
    );
    // constructor() {
    //     this["gender"] = generate.person.gender()
    //     this["fName"] = generate.person.firstName()
    //     this["lName"] = generate.person.lastName()
    //     this["age"] = generate.random.number(10, 100)
    //     this["image"] = faker.image.avatar()
    //     this["phone"] = generate.phone.number(generate.phone.countryCode() + "-###-###-####")
    //     this["email"] = faker.internet.email(this["fName"], this["lName"])
    // }
}
