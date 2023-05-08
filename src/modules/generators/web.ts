import emojis from "../providers/web/emojis";
import { FlattenObjectKeys } from "../types/flatten-object-key-type";
import httpMethod from "../providers/web/http-methods";
import selectFromArray from "../utils/select-from-array";
import userAgents from "../providers/web/user-agents";
import repeater from "../utils/repeater";
import random from "./random";
import statusCodes from "../providers/web/status-codes";
import emails from "../providers/web/emails";
import generate from ".";
import { expandN } from "regex-to-strings";

function httpMethods(CRUD: boolean = true): string {
    if (CRUD) return selectFromArray(httpMethod.crud);
    return selectFromArray(httpMethod.allMethods);
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

function userAgent(device?: keyof typeof userAgents): string {
    if (!device) {
        device = selectFromArray(Object.keys(userAgents));
    }
    return selectFromArray(Object.values(userAgents[device]));
}

function ipAddress(version: "v4" | "v6" = "v4"): string {
    if (version === "v4") {
        return repeater(() => random.number(0, 255), 4, {
            separator: ".",
        }) as string;
    }
    if (version === "v6") {
        return repeater(() => random.hexadecimalNumber(4), 8, {
            separator: ":",
        }) as string;
    }
}

function macAddress(): string {
    return repeater(() => random.hexadecimalNumber(2), 6, {
        separator: ":",
    }) as string;
}

function httpStatusCode(option?: {
    group?: keyof typeof statusCodes;
    description?: boolean;
}): string {
    let group = option?.group;
    if (!group) group = selectFromArray(Object.keys(statusCodes));
    if (option?.description) {
        const code = selectFromArray(Object.keys(statusCodes[group]));
        return `${code} (${statusCodes[group][code]})`;
    }
    return selectFromArray(Object.keys(statusCodes[group]));
}

function email(firstName?: string, lastName?: string): string {
    const provider = "@" + selectFromArray(emails.domains);
    const version = Math.floor(1 + Math.random() * 4);
    if (version === 1) {
        firstName ? firstName : (firstName = generate.person.firstName());
        return (firstName + provider).toLowerCase();
    } else if (version === 2) {
        firstName ? firstName : (firstName = generate.person.firstName());
        lastName ? lastName : (lastName = generate.person.lastName());
        return (firstName + lastName + provider).toLowerCase();
    } else if (version === 3) {
        lastName ? lastName : (lastName = generate.person.lastName());
        return (lastName + provider).toLowerCase();
    } else if (version === 4) {
        firstName ? firstName : (firstName = generate.person.firstName());
        return (
            firstName +
            Math.floor(Math.random() * 100) +
            provider
        ).toLowerCase();
    } else if (version === 4) {
        lastName ? lastName : (lastName = generate.person.lastName());
        return (
            lastName +
            Math.floor(Math.random() * 100) +
            provider
        ).toLowerCase();
    }
}

function regex(regex: RegExp): string {
    const strings = expandN(regex, 1);
    return strings[0];
}

export default {
    httpMethods,
    emoji,
    userAgent,
    ipAddress,
    macAddress,
    httpStatusCode,
    email,
    regex
};
