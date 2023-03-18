import fsPromises from "fs/promises";

async function write(fileName: string, data: string): Promise<void> {
    await fsPromises.writeFile(fileName, data);
}

async function read(fileName: string): Promise<string> {
    const content: string = await fsPromises.readFile(fileName, "utf-8");
    return content;
}

export default {
    write,
    read
};
