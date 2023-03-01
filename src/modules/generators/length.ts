import { error } from "console";
import feetLength from "../providers/lengthUnit/feet-unit";
import metricLength from "../providers/lengthUnit/metric-unit";
import selectFromArray from "../utils/select-from-array";

// Generate length unit - metric or feet.
function units(unit?: "metric" | "feet", abbreviation?: boolean): string {
    if (unit === "feet") {
        if (abbreviation) {
            return selectFromArray(feetLength.abbr);
        } else {
            return selectFromArray(feetLength.wide);
        }
    } else {
        if (abbreviation) {
            return selectFromArray(metricLength.abbr);
        } else {
            return selectFromArray(metricLength.wide);
        }
    }
}

// Generate length with unit
function length(
    unit?: "metric" | "feet",
    abbreviation: boolean = false,
    minNum: number = 0,
    maxNum: number = 100
): string {
    if (minNum > maxNum)
        throw error("minimum number mast be smaller then maximum number");
    const randNum = Math.floor(Math.random() * maxNum) + minNum;
    if (!unit) {
        if (abbreviation) {
            return `${randNum} ${selectFromArray(metricLength.abbr)}`;
        } else {
            return `${randNum} ${selectFromArray(metricLength.wide)}`;
        }
    } else if (unit === "feet") {
        if (abbreviation) {
            return `${randNum} ${selectFromArray(feetLength.abbr)}`;
        } else {
            const feetUnit = selectFromArray(feetLength.wide);
            if (feetUnit === "feet" && randNum === 1) {
                return `${randNum} foot`;
            } else {
                return `${randNum} ${feetUnit}`;
            }
        }
    }
}

export default {
    units,
    length,
};
