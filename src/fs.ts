import fsPromises from "fs/promises";

const fileName = "mockDB.json";

async function write(data: string): Promise<void> {
    await fsPromises.writeFile(fileName, data);
}

async function read(): Promise<string> {
    const content: string = await fsPromises.readFile(fileName, "utf-8");
    return content;
}

export default {
    write,
    read
};
