import * as dataSchemas from "./schemas";
import fileHandling from "./fs";
import generate from "./modules/generators";

class test {
    static "amount" = 5;
    static "defaultId" = true;
    public "gender" = generate.person.gender();
    public "fName" = generate.person.firstName();
    public "lName" = generate.person.lastName();
    public "age" = generate.random.number(10, 100);
    public "phone" = generate.phone.number(
        generate.phone.countryCode() + "-###-###-####"
    );
}

class MockDB {
    finalJson = {};
    mockGenerator = (schemasList: { new (): any }[]) => {
        // for each schema
        for (let schema of schemasList) {
            // init instances container
            const data = [];
            // create instances of schema up to the amount define in schema
            for (let i = 0; i < (schema?.["amount"] || 10); i++) {
                const instance = new schema();
                // if running id is needed - insert it
                if (schema?.["defaultId"]) {
                    instance["id"] = i;
                }
                // insert instance to data container
                data.push(instance);
            }
            // define a key named as schema title & insert an array of all created instances to it
            this.finalJson[schema.name] = data;
        }
        // save generated data to 'mockDB.json'
        fileHandling.write(JSON.stringify(this.finalJson, null, 2));
    };
    generate = (
        schemas: { new (): any }[],
        options?: { autoInterval?: boolean; ms?: number }
    ) => {
        if (options?.autoInterval === true) {
            setInterval(() => this.mockGenerator(schemas), options?.ms || 1000);
        }
        this.mockGenerator(schemas);
    };
}

const mockDB = new MockDB();
mockDB.generate([test], { autoInterval: true, ms: 2000 });

export default mockDB;

// // init generated data container
// const finalJson = {};

// function mockGenerator() {
//     // get list of schemas defined in 'data-schema.ts'
//     const schemasList = Object.getOwnPropertyNames(dataSchemas).map((a) => a);
//     // remove un-relevant default value
//     schemasList.shift();
//     // for each schema
//     for (let schema of schemasList) {
//         // init instances container
//         const data = [];
//         // create instances of schema up to the amount define in schema
//         for (let i = 0; i < (dataSchemas[schema].amount || 10); i++) {
//             const instance = new dataSchemas[schema]();
//             // if running id is needed - insert it
//             if (dataSchemas[schema].defaultId) {
//                 instance["id"] = i;
//             }
//             // insert instance to data container
//             data.push(instance);
//         }
//         // define a key named as schema title & insert an array of all created instances to it
//         finalJson[schema] = data;
//     }
//     // save generated data to 'mockDB.json'
//     fileHandling.write(JSON.stringify(finalJson, null, 2));
// }

// function mock(options?: { autoInterval?: boolean; ms?: number }): void {
//     if (options?.autoInterval === true) {
//         setInterval(() => mockGenerator(), options?.ms || 1000);
//     }
//     mockGenerator();
// }

// mock();

// export default mock;

// mockGenerator = (test?: object[]) => {

//     // get list of schemas defined in 'data-schema.ts'
//     const schemasList = Object.getOwnPropertyNames(dataSchemas).map(
//         (a) => a
//     );
//     // remove un-relevant default value
//     schemasList.shift();

//     // for each schema
//     for (let schema of schemasList) {
//         // init instances container
//         const data = [];
//         // create instances of schema up to the amount define in schema
//         for (let i = 0; i < (dataSchemas[schema].amount || 10); i++) {
//             const instance = new dataSchemas[schema]();
//             // if running id is needed - insert it
//             if (dataSchemas[schema].defaultId) {
//                 instance["id"] = i;
//             }
//             // insert instance to data container
//             data.push(instance);
//         }
//         // define a key named as schema title & insert an array of all created instances to it
//         this.finalJson[schema] = data;
//     }
//     // save generated data to 'mockDB.json'
//     fileHandling.write(JSON.stringify(this.finalJson, null, 2));
// };
