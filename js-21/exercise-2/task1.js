/**
 * JavaScript 2021 autumn course @ TurkuAMK, exercise 2, task 1
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

const attachLeapYearFormSubmitHandler = function() {
    // Gets the submit button
    const task1SubmitBtn = document.getElementById("task1-submit-btn");

    // Attaches listener to submit button click event
    task1SubmitBtn.addEventListener("click", function(event) {
        event.preventDefault(); //Prevent actually submitting the form

        year = document.getElementById("task1-input").value;
        if (isLeapYear(year)) {
            showResult("Year " + year + " is a leap year", "task1-result-div");
        } else {
            showResult("Year " + year + " is not a leap year",
                       "task1-result-div");
        }
    });
}

window.addEventListener("load", attachLeapYearFormSubmitHandler);
