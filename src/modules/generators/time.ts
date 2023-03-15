import selectFromArray from "../utils/select-from-array";

function hourFormat(): string {
    return selectFromArray(["AM", "PM"]);
}

function hour(format: "12h" | "24h" = "24h"): string {
    if (format === "12h") {
        return Math.floor(Math.random() * 13)
            .toString()
            .padStart(2, "0");
    }
    return Math.floor(Math.random() * 24)
        .toString()
        .padStart(2, "0");
}

function minOrSec() {
    return Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0");
}
function millisecond() {
    return Math.floor(Math.random() * 100)
        .toString()
        .padStart(2, "0");
}

function time(
    format: "12h" | "24h" = "24h",
    level: "min" | "sec" | "ms" = "min"
): string {
    if (level === "sec")
        return `${hour(format)}:${minOrSec()}:${minOrSec()}${
            format === "12h" ? " " + hourFormat() : ""
        }`;
    if (level === "ms")
        return `${hour(format)}:${minOrSec()}:${minOrSec()}:${millisecond()}${
            format === "12h" ? " " + hourFormat() : ""
        }`;
    return `${hour(format)}:${minOrSec()}${
        format === "12h" ? " " + hourFormat() : ""
    }`;
}

export default {
    hour,
    minOrSec,
    hourFormat,
    time,
    millisecond,
};
