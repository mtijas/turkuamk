/**
 * JavaScript 2021 autumn course @ TurkuAMK, exercise 2, task 6
 *
 * Author: Markus Ijäs
 */

/**
 * Precision rounding helper
 *
 * This is quite a solution. Basically it uses the engineering notation
 * to move the decimal separator right (remember e2 means "*10^2").
 * The integer is then rounded to get rid of unnecessary precision and
 * the result is converted back to float by moving the decimal separator
 * back left.
 *
 * We just can't use the built-in toFixed here since for example float
 * 1.345 gets rounded to 1.34 in certain browsers (e.g. older Chromium).
 * Uncomment the last line and see for yourself.
 *
 * The basic idea for this kind of precision limiting is, if we want to
 * have 2 decimals precision, is to multiply the input by 100, round it to 
 * get rid of unnecessary decimals, and then divide that result with 100.
 */
const toDecPrecision = (value, decPrecision) => {
    let decimalsRemoved = Math.round(parseFloat(value + 'e' + decPrecision));
    return Number(decimalsRemoved + 'e-' + decPrecision);
}

/**
 * A single measurement with unrestricted id and unit. Weight must be zero or
 * positive since we haven't invented anti-gravity yet.
 */
class Measurement {
    batchid;
    unit;
    weight = 0.0;

    constructor(batchid, unit, weight) {
        this.batchid = batchid;
        this.unit = unit;
        if (weight >= 0) {
            this.weight = weight;
        }
    }

    getBatchID() {
        return this.batchid;
    }

    getUnit() {
        return this.unit;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return `Batch ID: ${this.batchid}, Unit: ${this.unit}, 
                Weight: ${this.weight}`;
    }
}

/**
 * Basic abstract converter class
 */
class BasicConverter {
    convert(value) {
        throw new Error('convert method not implemented!');
    }
}

/**
 * Ounces to Grams converter
 */
class OuncesToGramsConverter extends BasicConverter {
    convert(value) {
        return value / 0.035274;
    }
}

/**
 * Measurements array walker for converting measurements from ounces to grams
 */
const convertOuncesToGrams = (measurements) => {
    let results = [];
    let converter = new OuncesToGramsConverter();

    for (i = 0; i < measurements.length; i++) {
        let measurement = measurements[i];
        let weight = measurement.getWeight();
        if (measurement.getUnit() == "ounce") {
            weight = converter.convert(measurement.weight);
        }
        results.push(
            new Measurement(measurement.getBatchID(), 
                            "gram", 
                            toDecPrecision(weight, 2))
        );    
    }
    return results;
}

/**
 * Helper for showing a measurements array on web page
 */
const showMeasurements = (measurements) => {
    showResult("Printing measurements array:", "task6-result-div");
    for (i = 0; i < measurements.length; i++) {
        showResult(measurements[i], "task6-result-div");
    }
}

window.addEventListener("load", () => {
    let measurements = [];
    let allInGrams = [];

    measurements.push(new Measurement(434, "ounce", 12.21));
    measurements.push(new Measurement(414, "gram", 1.345));
    measurements.push(new Measurement(522, "ounce", 18.88));

    allInGrams = convertOuncesToGrams(measurements);
    
    showMeasurements(measurements);
    showMeasurements(allInGrams);
});

// Test of toFixed
// console.log("This should round to 1.35. Result: " + Number(1.345).toFixed(2));
