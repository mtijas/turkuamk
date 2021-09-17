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

// Shows result in a specific div as requested
const showResult = function(text) {
    let resultDiv = document.getElementById("task1-result-div");
    resultDiv.innerHTML = "<p>" + text + "</p>";
}

const attachLeapYearFormSubmitHandler = function() {
    // Gets the submit button
    const task1SubmitBtn = document.getElementById("task1-submit-btn");

    // Attaches listener to submit button click event
    task1SubmitBtn.addEventListener("click", function(event) {
        event.preventDefault(); //Prevent actually submitting the form

        year = document.getElementById("task1-input").value;
        if (isLeapYear(year)) {
            showResult("Year " + year + " is a leap year");
        } else {
            showResult("Year " + year + " is not a leap year");
        }
    });
}

window.addEventListener("load", attachLeapYearFormSubmitHandler);
