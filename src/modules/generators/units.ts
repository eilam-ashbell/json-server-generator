import { error } from "console";
import lengthUnits from "../providers/units/lengthUnits";
import memoryUnits from "../providers/units/memoryUnits";
import temperatures from "../providers/units/temperatures";
import velocities from "../providers/units/velocity";
import selectFromArray from "../utils/select-from-array";
import random from "./random";


class Distance {
// Generate length unit - metric or feet.
// User can decide to generate the full unit name or abbreviation
public unit = (unit?: "metric" | "feet", abbreviation?: boolean): string => {
    if (unit === "feet") {
        if (abbreviation) {
            return selectFromArray(lengthUnits.feetAbbr);
        } else {
            return selectFromArray(lengthUnits.feetWide);
        }
    } else {
        if (abbreviation) {
            return selectFromArray(lengthUnits.metricAbbr);
        } else {
            return selectFromArray(lengthUnits.metricWide);
        }
    }
};
// Generate length (number) with unit
// User can decide to generate the full unit name or abbreviation
// Also can manage min & max number to the length generate
public length = (
    unit?: "metric" | "feet",
    abbreviation: boolean = false,
    minNum: number = 0,
    maxNum: number = 100
): string => {
    if (minNum > maxNum)
        throw error("minimum number mast be smaller then maximum number");
    const randNum = random.number(minNum, maxNum)
    if (!unit) {
        if (abbreviation) {
            return `${randNum} ${selectFromArray(lengthUnits.metricAbbr)}`;
        } else {
            return `${randNum} ${selectFromArray(lengthUnits.metricWide)}`;
        }
    } else if (unit === "feet") {
        if (abbreviation) {
            return `${randNum} ${selectFromArray(lengthUnits.feetAbbr)}`;
        } else {
            const feetUnit = selectFromArray(lengthUnits.feetWide);
            if (feetUnit === "feet" && randNum === 1) {
                return `${randNum} foot`;
            } else {
                return `${randNum} ${feetUnit}`;
            }
        }
    }
}
}

class Memory {
    public unit = (abbreviation: boolean = false): string => {
        if (abbreviation) return selectFromArray(memoryUnits.byteAbbr)
        return selectFromArray(memoryUnits.byteWide)
    };
}

class Temperature {
    public unit = (type: ("abbr" | "wide" | "symbol") = "symbol") => {
        if (type === "abbr") return selectFromArray(temperatures.unitAbbr)
        if (type === "wide") return selectFromArray(temperatures.unitWide)
        if (type === "symbol") return selectFromArray(temperatures.unitSymbol)
    }
}

class Velocity {
    public unit = (abbreviation: boolean = false): string => {
        if (abbreviation) return selectFromArray(velocities.unitsAbbr)
        return selectFromArray(velocities.unitsWide)
    };
}

const distance = new Distance()
const memory = new Memory()
const temperature = new Temperature()
const velocity = new Velocity()

export default {
    distance,
    memory,
    temperature,
    velocity
};
