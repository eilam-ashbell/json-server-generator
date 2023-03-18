import MockDB from "./mockDB";

// Initiate new instance of MockDB
const mockDB = new MockDB();
// run generator and serve the API
// * param 1 - schema list
// list of schema classes. if empty, function will automatically take the classes from src/schemas.ts.
// * param 2 - options
// autoInterval - will generate all data iteratively so your DB will change its values every 1 sec.
// ms - you can define another interval time to autoInterval in milliseconds.
// autoRouter - if you created alternative path in your schema, you can automatic set it up.
mockDB.run(null, {autoInterval: true, autoRouter: true});