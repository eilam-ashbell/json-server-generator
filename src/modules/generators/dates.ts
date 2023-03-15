import { error } from "console";
import months from "../providers/dates/months";
import selectFromArray from "../utils/select-from-array";

function pastDate(): Date {
    return new Date(Math.floor(Math.random() * new Date().getTime()));
}

function futureDate(distance: number = 1): Date {
    const dist = distance * 365 * 24 * 3600 * 1000;
    return new Date(new Date().getTime() + Math.floor(Math.random() * dist));
}

function dateBetween(
    from: Date | number | string,
    till: Date | number | string
): Date {
    return new Date(
        Math.floor(
            Math.random() *
                (new Date(till).getTime() - new Date(from).getTime())
        ) + new Date(from).getTime()
    );
}

function monthName(format: "full" | "abbreviation" = "full"): string {
    if (format !== "full") return selectFromArray(months.abbr);
    return selectFromArray(months.wide);
}

// Generates birthday date.
// User can provide an age to generate the date according it
// Also can define date format
function birthday(
    age?: number,
    locale: Intl.LocalesArgument = "en-EN"
): string {
    if (age <= 0) throw error("age must be over 0");
    if (!age) {
        const maxDate = Date.now();
        const minDate = new Date(maxDate).setFullYear(
            new Date().getFullYear() - 100
        );
        const timestamp = new Date(
            Math.floor(minDate + Math.random() * (maxDate - minDate)) + minDate
        );
        return new Date(timestamp).toLocaleDateString(locale);
    } else {
        age = Math.floor(age);
        const thisYear = new Date().getFullYear();
        const birthdayYear = thisYear - age;
        const maxDate = Date.now();
        const minDate = new Date(maxDate).setFullYear(birthdayYear);
        const timestamp = new Date(
            Math.floor(minDate + Math.random() * (maxDate - minDate)) + minDate
        ).setFullYear(birthdayYear);
        return new Date(timestamp).toLocaleDateString(locale);
    }
}

export default {
    dateBetween,
    monthName,
    birthday,
    pastDate,
    futureDate,
};
