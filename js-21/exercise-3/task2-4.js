/**
 * JavaScript 2021 autumn course @ TurkuAMK, exercise 3, tasks 2-4
 *
 * Author: Markus Ijäs
 */

// Checks if year is a leap year
const isLeapYear = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 === 0) {
            return true;
        }
        if (year % 100 !== 0) {
            return true;
        }
    }
    return false;
}

// Checks for proper input before checking the leap year
const tryIsLeapYear = (year) => {
    if (typeof year === 'undefined') {
        throw new Error("Missing argument year error");
    } 
    if (!Number.isInteger(year)) {
        throw new Error("Non-integer argument year error");
    }
    return isLeapYear(year);
}

window.addEventListener("load", () => {
    // Gets the submit button
    const task24SubmitBtn = document.getElementById("task2-4-submit-btn");

    // Attaches listener to submit button click event
    task24SubmitBtn.addEventListener("click", function(event) {
        event.preventDefault(); //Prevent actually submitting the form

        try {
            year = parseInt(document.getElementById("task2-4-input").value);
            if (tryIsLeapYear(year)) {
                showResult("Year " + year + " is a leap year", "task2-4-result-div");
            } else {
                showResult("Year " + year + " is not a leap year",
                           "task2-4-result-div");
            }
        } catch (e) {
            showResult(e, "task2-4-result-div");
        }
    });
});

