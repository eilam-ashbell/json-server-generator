import math from "../providers/math/math";
import selectFromArray from "../utils/select-from-array";
import random from "./random";

function number(min?: number, max?: number): number {
    return random.number(min || 0, max || 1000);
}
function percent(decimals?: number): string {
    const randNum = Math.random() * 100;
    return randNum.toFixed(decimals || 0) + "%";
}

function operator(): string {
    return selectFromArray(math.operators);
}

function degrees(decimals?: number): string {
    const deg = Math.random() * 360;
    return deg.toFixed(decimals || 0) + "°";
}

function trigoFunction(abbreviation: boolean = false): string {
    if (abbreviation) return selectFromArray(math.trigoFunctionAbbr);
    return selectFromArray(math.trigoFunction);
}

export default {
    number,
    percent,
    operator,
    trigoFunction,
    degrees,
};
