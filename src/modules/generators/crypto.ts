import { v4 as uuidv4 } from "uuid";
import { v1 as uuidv1 } from "uuid";
import { v3 as uuidv3 } from "uuid";
import { v5 as uuidv5 } from "uuid";
import repeater from "../utils/repeater";
import random from "./random";

// Generate UUID by type - v1 | v3 | v4 | v5
function uuid(version?: "v1" | "v3" | "v4" | "v5"): string {
    if (version === "v4" || !version) return uuidv4();
    if (version === "v1") return uuidv1();
    if (version === "v3") return uuidv3();
    if (version === "v5") return uuidv5();
}

// Generates a random token at any length according to user's input (by default only letters).
// User can change characters type in options object.
function token(
    length: number = 10,
    options?: {
        upperCase?: boolean;
        lowerCase?: boolean;
        marks?: boolean;
        numeric?: boolean;
    }
): string | string[] {
    return repeater(
        () =>
            random.character(
                options?.upperCase,
                options?.lowerCase,
                options?.marks,
                options?.numeric
            ),
        length,
        { separator: "" }
    );
}

// Generates random characters according do user's pattern (by default only letters).
// User can change characters type in options object.
function tokenByPattern(
    pattern: string,
    options?: {
        upperCase?: boolean;
        lowerCase?: boolean;
        marks?: boolean;
        numeric?: boolean;
    }
): string {
    const patternArr = pattern.split("");
    patternArr.forEach((char, i) => {
        if (char === "#") {
            patternArr[i] = random.character(
                options?.upperCase,
                options?.lowerCase,
                options?.marks,
                options?.numeric
            );
        }
    });
    return patternArr.join("");
}

export default {
    uuid,
    token,
    tokenByPattern,
};
