import emojis from "../providers/web/emojis";
import { FlattenObjectKeys } from "../types/flatten-object-key-type";
import httpMethod from "../providers/web/http-methods";
import selectFromArray from "../utils/select-from-array";

function httpMethods(CRUD: boolean = true): string {
    if (CRUD) return selectFromArray(httpMethod.crud);
    return selectFromArray(httpMethod.allMethods);
}

function color(): string {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

function emoji(
    category?: FlattenObjectKeys<typeof emojis> | keyof typeof emojis
): string {
    if (!category) {
        const mainCategory = selectFromArray(Object.keys(emojis));
        const subCategory = selectFromArray(Object.keys(emojis[mainCategory]));
        return selectFromArray(emojis[mainCategory][subCategory]);
    }
    const splitCategory = category.split(".");
    if (splitCategory.length === 2) {
        return selectFromArray(emojis[splitCategory[0]][splitCategory[1]]);
    }
    const subCategory = selectFromArray(Object.keys(emojis[category]));
    return selectFromArray(emojis[category][subCategory]);
}

export default {
    httpMethods,
    color,
    emoji,
};
