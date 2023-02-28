import { error } from "console";

function birthday(age?: number, locale: Intl.LocalesArgument = "en-EN"): string {
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

export default birthday;
