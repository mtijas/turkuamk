/**
 * JavaScript 2021 autumn course @ TurkuAMK, exercise 2, task 2
 *
 * Author: Markus Ijäs
 */

const numArr = [6,4,2,5,9,7,5,7,2];

// Naive check for number in array
function inArray(numbers, aNumber) {
    for (i = 0; i < numbers.length; i++) {
        if (i === aNumber) {
            return true;
        }
    }
    return false;
}

window.addEventListener("load", () => {
    // Gets the submit button
    const task2SubmitBtn = document.getElementById("task2-submit-btn");

    // Attaches listener to submit button click event
    task2SubmitBtn.addEventListener("click", function(event) {
        event.preventDefault(); //Prevent actually submitting the form

        inputVal = parseInt(document.getElementById("task2-input").value);
        if (inArray(numArr, inputVal)) {
            showResult("Array contains the number " + inputVal,
                            "task2-result-div");
        } else {
            showResult("Array doesn't contain the number " + inputVal,
                            "task2-result-div");
        }
    });
});
