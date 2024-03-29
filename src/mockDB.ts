import fs from "./fs";
import * as schemas from "./schemas";
const config = require("../config.json")
class MockDB {
    // init data container
    private finalJson = {};
    // init routes container
    private routerJson = {};
    // generates DB data
    public mockGenerator = (
        // receive array of schemas or null
        schemasList?: { new (): any }[],
    ) => {
        // if schemas not received 
        if (!schemasList) {
            // get list of schemas defined in 'src/schemas.ts'
            schemasList = Object.values(schemas);
        }
        // for each schema
        for (let schema of schemasList) {
            // init instances container
            const data = [];
            // create instances of schema up to the amount define in schema or 10 if not define
            for (let i = 0; i < (schema?.["amount"] || 10); i++) {
                const instance = new schema();
                // if running id is needed - insert it
                if (schema?.["defaultId"]) {
                    instance["id"] = i;
                }
                // insert instance to data container
                data.push(instance);
            }
            // define a key named as schema's class name & insert an array of all created instances to it
            this.finalJson[schema.name] = data;
            // if autoRouter is enable, create auto routes
            if (config.autoRouter) {
                if (schema?.["path"]) {
                    if (schema["path"][0] !== "/") {
                        this.routerJson[
                            `/${schema["path"]}`
                        ] = `/${schema.name}`;
                        this.routerJson[
                            `/${schema["path"]}/:id`
                        ] = `/${schema.name}/:id`;
                    } else {
                        this.routerJson[schema["path"]] = `/${schema.name}`;
                        this.routerJson[
                            `${schema["path"]}/:id`
                        ] = `/${schema.name}/:id`;
                    }
                }
                // write router.json file to set up routes
                fs.write(
                    "src/jsons/router.json",
                    JSON.stringify(this.routerJson, null, 2)
                );
            }
        }
        // save generated data to 'mockDB.json'
        fs.write(
            "src/jsons/mockDB.json",
            JSON.stringify(this.finalJson, null, 2)
        );
    };
    public run = (
        schemas?: { new (): any }[],
    ) => {
        if (config?.intervalUpdate === true) {
            setInterval(() => this.mockGenerator(schemas), config?.intervalMs || 1000);
        }
        this.mockGenerator(schemas);
    };
}

export default MockDB;
