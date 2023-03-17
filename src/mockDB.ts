import fileHandling from "./fs";
import * as schemas from "./schemas"

class MockDB {
    finalJson = {};
    mockGenerator = (schemasList?: { new (): any }[]) => {
        if (!schemasList) {
            console.log(Object.values(schemas));
            
            // get list of schemas defined in 'data-schema.ts'
            schemasList = Object.values(schemas)
        }
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
        schemas?: { new (): any }[],
        options?: { autoInterval?: boolean; ms?: number }
    ) => {
        if (options?.autoInterval === true) {
            setInterval(() => this.mockGenerator(schemas), options?.ms || 1000);
        }
        this.mockGenerator(schemas);
    };
}

export default MockDB