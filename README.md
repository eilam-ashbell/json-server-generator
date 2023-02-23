
# JSON server generator

JSON server generator is a module that combine the ability to generate random data and to serve it locally.

You can fined this little module as a good solution for creating mock DB to work with for Q&A, working while backend isn't ready yet, or just to start working without the need of heavy DB.

This module relies on `JSON-server` & `Faker-js`.

## Get Started 🚀

Clone JSON server generator

```bash
git clone https://-------
```

Install json-server

```bash
npm install -g json-server
```

Initiate this project:

```bash
npm i
```

Open schemas.ts file and define your desired data routes and structure

## What are schemas 🧐

Schemas are your way do define your generated data structure.

Each schema is a typescript class that define 4 things:

1. Route name.
2. Structure & type of data in each route.
3. How many data objects will be generated for each route.
4. Does the objects needs a default ID number.

Once you defined your schemas - we will do the rest automatic!

## Writing a schema 📝

To start writing your schemas, open `schemas.ts` file in the `/src` folder.

As mentioned, schema is just typescript class.

The simplest schema can contain only class declaration and constructor function. In the constructor, you need to define your data fields's names and what value to generate into it.
for example:

```js
export class student {
    constructor() {
        this["fName"] = faker.name.firstName()
    }
};
```

This schema will define an object with one key of 'fName' and a generated value of first name:

```json
{"fName":"John"}
```

By default, when you generate data for your mockDB, every schema will be generate for 10 instances.
You can adjust the amount of instances by adding `amount` as static property to your schema.
Let's take our last example:

```js
export class student {
    static "amount" = 5;
    constructor() {
        this["fName"] = faker.name.firstName()
    }
};
```

Now we'll receive only 5 instances for this current schema.

```json
{
    students: [
        {"fName":"John"},
        {"fName":"Paul"},
        {"fName":"Ringo"},
        {"fName":"Gorge"},
        {"fName":"Bob"}
    ]
}
```

You can define different number of instance to each schema.

Another option you can set in schemas is if you want to add a running id number to all of schemas's instance or not. by default, this option is disabled. If you want to add defaults ids you can add your schema the `defaultId` as static parameter and set it to `true`.
let's check our example again:

```js
export class student {
    static "amount" = 5;
    static "defaultId" = true
    constructor() {
        this["fName"] = faker.name.firstName()
    }
};
```

Now, every instance that will be generate will have a key of `id` and running number (from 0 to 4 in this case) as value. The result will be like:

```json
{
    students: [
        {"fName":"John", "id"=0},
        {"fName":"Paul", "id"=1},
        {"fName":"Ringo", "id"=2},
        {"fName":"Gorge", "id"=3},
        {"fName":"Bob", "id"=4}
    ]
}
```

If you want to disable this option again you can just remove the `amount` property or define it to `false`.

### Keep in mind

* You can fill `schemas.ts` in schemas as much as you need.
* Make sure that each schema should be exported.
* Schema's name will automatically converts to route path name.
* You can nest one schema inside another schema to get more complicated data objects.

## Data generation ✨

*JSON server generator* relies on `faker-js` external library to generate data.

This wonderful library is full of data types options, allows great flexibility and adjustments.

To learn more about data generation options, visit [faker-js documentation](https://fakerjs.dev/api/).

## Serve your mockDB 🧑‍💻

After you defined all your schemas, just open your terminal in the root folder of this project, and run

```bash
npm run serve
```

This command automatically generate your data, save it to `mockDB.json` file and initiate `JSON-server` on port 3000.
once the process finished you can see in your terminal all your endpoint for each schema and start using it.

If from some reason you want to run `json-server` on another port, you can run

```bash
npm start
```

to generate your data, and just after it finished run

```bash
json-server --watch mockDB.json --port xxxx
```

xxxx = your new port.

## Related 📚

Here are some related links  

* json-server on [npm](https://www.npmjs.com/package/json-server) | [github](https://github.com/typicode/json-server)
* Faker-js on [npm](https://www.npmjs.com/package/@faker-js/faker) | [github](https://github.com/faker-js/faker)
* [Faker-js documentations](https://fakerjs.dev/guide/)  
