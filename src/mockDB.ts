import fs from "./fs";
import * as schemas from "./schemas";

class MockDB {
    // init data container
    finalJson = {};
    // init routes container
    routerJson = {};
    // generates DB data
    mockGenerator = (
        // receive array of schemas or null
        schemasList?: { new (): any }[],
        options?: { autoRouter?: boolean }
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
            if (options?.autoRouter) {
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
                    "jsons/router.json",
                    JSON.stringify(this.routerJson, null, 2)
                );
            }
        }
        // save generated data to 'mockDB.json'
        fs.write(
            "jsons/mockDB.json",
            JSON.stringify(this.finalJson, null, 2)
        );
    };
    run = (
        schemas?: { new (): any }[],
        options?: { autoInterval?: boolean; ms?: number; autoRouter?: boolean }
    ) => {
        if (options?.autoInterval === true) {
            setInterval(() => this.mockGenerator(schemas, {autoRouter: options?.autoRouter}), options?.ms || 1000);
        }
        this.mockGenerator(schemas, {autoRouter: options?.autoRouter});
    };
}

export default MockDB;
