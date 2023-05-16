import generate from "./modules/generators";
export class student {
    static "amount" = 5;
    static "defaultId" = true;
    static "path" = "/test/path";
    public "gender" = generate.person.gender();
    public "fName" = generate.person.firstName();
    public "lName" = generate.person.lastName();
    public "age" = generate.random.number(10, 100);
    public "image" = generate.person.avatarImage("female");
    public "email" = generate.web.email(this.fName, this.lName);
    public "phone" = generate.finance.creditCardNumber("visa");
}