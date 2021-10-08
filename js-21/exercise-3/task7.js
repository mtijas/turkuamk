/**
 * JavaScript 2021 autumn course @ TurkuAMK, exercise 3, task 7
 *
 * Author: Markus Ijäs
 */

const buildRegisterNumber = (theLetters, theDigits) => {
    const letterMatcher = RegExp("^[A-VX-Z]{2,3}$");
    const digitMatcher = RegExp("^[1-9][0-9]{0,2}$");

    if (!letterMatcher.test(theLetters)) {
        throw new Error("Invalid register number letters");
    }

    if (!digitMatcher.test(theDigits)) {
        throw new Error("Invalid register number digits");
    }

    return `${theLetters}-${theDigits}`;
}

window.addEventListener("load", () => {
    // Gets the submit button
    const task7SubmitBtn = document.getElementById("task7-submit-btn");

    // Attaches listener to submit button click event
    task7SubmitBtn.addEventListener("click", function(event) {
        event.preventDefault(); //Prevent actually submitting the form

        try {
            letters = document.getElementById("task7-letters").value;
            digits = document.getElementById("task7-numbers").value;

            let regNum = buildRegisterNumber(letters, digits);
            
            showResult(`Register number ${regNum} is valid.`, 
                       "task7-result-div");
        } catch (e) {
            showResult(e, "task7-result-div");
        }
    });
});

