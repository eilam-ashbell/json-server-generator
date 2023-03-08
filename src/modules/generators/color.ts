import colors from "../providers/web/colors";
import selectFromArray from "../utils/select-from-array";

function color(): string {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

function colorName(): string {
    return selectFromArray(colors.colorNames)
}

export default {
    color,
    colorName,
}