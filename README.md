
# JSON server generator

JSON server generator is a module that generates random data in a defined schema and serve it locally as an API.

You can find this little module as a good solution for creating mock DB to work with for Q&A, working while backend isn't ready yet, or just to start working without the need of developing a heavy DB.

This module relies on `JSON-server`.

## Get Started 🚀

Clone JSON server generator

```bash
git clone https://github.com/eilam-ashbell/json-server-generator.git
```

Install json-server

```bash
npm install -g json-server
```

Initiate this project:

```bash
npm i
```

## What are schemas 🧐

Schemas are your way do define your generated data structure.

Each schema is a typescript class that define:

1. Route name or costume routes.
2. Structure & type of data in each route.
3. How many data objects will be generated for each route.
4. Does the objects needs a default ID number.

Once you defined your schemas - all the rest will be done automatic!

### Writing a schema 📝

To start writing your schemas, open `schemas.ts` file in the `/src` folder.

As mentioned, schemas are typescript class.

JSG can receive schemas in two difference ways:

1. You can define all your schemas in `src/schemas.js` and JSG will recognize it automatic.
   * note that if you chose that option you have to export each class so JSG can recognize them.
2. Yoa can pass an `Array` with your classes to `mockDB.run()` as an argument.

Let's create one schema for example:

```js
export class student {
    this["firstName"] = generate.person.firstName();
};
```

This schema will define an object with one key of 'firstName' and a generated value of first name:

```json
{
    "firstName":"John"
}
```

By default, when you run generation, each schema will generated 10 different instances that will be available on `http://localhost:3000/{your-schema-name}`.

so for our example, after running `npm run serve`, we can see the following result on `http://localhost:3000/student`:

```json
[
    {"firstName":"John"},
    {"firstName":"Henry"},
    {"firstName":"Alexander"},
    {"firstName":"Benjamin"},
    {"firstName":"Michael"},
    {"firstName":"Sebastian"},
    {"firstName":"Logan"},
    {"firstName":"Samuel"},
    {"firstName":"Aiden"},
    {"firstName":"Joseph"}
]
```

### Schema's configurations

JSG give you the ability to define some costume configurations in for each schema.
All configurations are define as `static` property of their class.

#### amount

Adjust the amount of instances that will be generate by JSG for this schema.

Amount property receives a value of type `number` only.

```js
export class student {
    static "amount" = 5;
    this["firstName"] = generate.person.firstName();
};
```

If you serve our DB now and check `http://localhost:3000/student` you should receive only 5 instances of the `student` schema:

```json
[
    {"firstName":"John"},
    {"firstName":"Paul"},
    {"firstName":"Ringo"},
    {"firstName":"Gorge"},
    {"firstName":"Bob"}
]
```

You can define different number of instance for each schema.

#### defaultId

If you want to add a running id number to all of your schemas's instance you can add this property.
By default, this option is disabled, so you can define your own Ids in your schemas.

If you want to add defaults Ids - add `defaultId` as static property on your schema and set it to `true`.

let's check the example again:

```js
export class student {
    static "amount" = 5;
    static "defaultId" = true
    this["firstName"] = faker.name.firstName()
};
```

Now, every instance that will be generate will have a key of `id` and running number (from 0 to 4 in this case) as value. The result will be like:

```js
[
    {
        "firstName":"John",
        "id"=0
    },
    {
        "firstName":"Paul",
        "id"=1
    },
    {
        "firstName":"Ringo",
        "id"=2
    },
    {
        "firstName":"Gorge",
        "id"=3
    },
    {
        "firstName":"Bob",
        "id"=4
    }
]
```

If you want to disable this option again you can just remove the this property or define it to `false`.

You can also define your own id as `number` or `string` identifier as every other field in the schema.

Note that its important to use an `id` property because its enables you to get a specific instance in your API.

#### path

The `path` property helps you to costume quickly your routing for your schema data. As mentioned before, routes are generated automatic from your schema's name, so if you want to change that, you can set your new route as `string` value of `path` property and the server will serve the data in your costume route too.

```js
export class student {
    static "amount" = 5;
    static "defaultId" = true
    static "path" = "names";
    this["firstName"] = faker.name.firstName()
};
```

Now, when you check `http://localhost:3000/names` you can get our data! note that that data is still available on `http://localhost:3000/student` too.

Also, routing through `path` property can supports only 2 basic options to get your data:

1. Get all your schema data (`http://localhost:3000/names`)
2. Get specific schema's instance (`http://localhost:3000/names/:id`)

If you need supports of more complicates routing to get your data, you can define it on `src/jsons/router.json`. Check *Handling complex routing* section down below for more information.

### Keep in mind

* You can fill `schemas.ts` in schemas as much as you need.
* Make sure that each schema is define as exported.
* Schema's name will automatically converts to route path name.
* You can nest one schema inside another schema to create complicated data objects.

## Serve your mockDB 🧑‍💻

After you defined all your schemas, open your terminal on the root folder and run

```bash
npm run serve
```

This command automatically generate your data, save it to `src/jsons/mockDB.json` file and initiate `JSON-server` on port 3000 by default.
once the process finished you can see in your terminal all your endpoint for each schema and start using it.

## Data generation ✨

JSG gives you built-in functionality to generate your data. As you see in last examples, you can call the `generate` function and select your desire type of data you want to generate.
Generators are sorted in groups to helps you fined every thing easily.

### Animal

### Color

### Company

### Country

### Crypto

### Date

### finance

### Units

### Math

### Person

### Phone

### Product

### Random

### Time

### Web

### fromList

## JSG configurations

JSG gives you the ability to config how it will behave.

You can use `config.json` to manage your configurations.

* **port**: By default, JSG runs on port 3000. In case you want to run JSG on another port, you can define your costume port as a `Number` value of `port` key.
* **static**: Define the path of the folder that will serve statics files.
* **autoRouter**: `Boolean` value that define if JSG will generate auto routing options according to definitions in your schemas or not. If this option is `false` you can config routing by yourself on `src/jsons/router.json`. for more info about routing you can see [json-server docs](https://github.com/typicode/json-server/#https)
* **intervalUpdate**: `Boolean` value that define if JSG will generate new value every X ms.
* **intervalMs**: `Number` value that define how often JSG will generate new data in interval mode.

You can also add more option from `json-server` options

## Related 📚

Here are some related links:

* json-server on [npm](https://www.npmjs.com/package/json-server) | [github](https://github.com/typicode/json-server)
