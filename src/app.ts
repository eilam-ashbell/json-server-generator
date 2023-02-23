import * as dataSchemas from "./schemas";
import fileHandling from "./fs";

// get list of schemas defined in 'data-schema.ts'
const schemasList = Object.getOwnPropertyNames(dataSchemas).map((a) => a);
// remove un-relevant default value
schemasList.shift();
// init generated data container
const finalJson = {};
// for each schema
for (let schema of schemasList) {
    // init instances container
    const data = [];
    // create instances of schema up to the amount define in schema
    for (let i = 0; i < (dataSchemas[schema].amount || 10); i++) {
        const instance = new dataSchemas[schema]();
        // if running id is needed - insert it
        if (dataSchemas[schema].defaultId) {
            instance["id"] = i;
        }
        // insert instance to data container
        data.push(instance);
    }
    // define a key named as schema title & insert an array of all created instances to it
    finalJson[schema] = data;
}
// save generated data to 'mockDB.json'
fileHandling.write(JSON.stringify(finalJson, null, 2));
