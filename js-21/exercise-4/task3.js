/**
 * JavaScript 2021 autumn course @ TurkuAMK, exercise 4, task 3
 *
 * Author: Markus Ijäs
 */


window.addEventListener("load", () => {
    const task3SubmitBtn = document.getElementById("task3-submit");
    task3SubmitBtn.addEventListener("click", function(event) {
        event.preventDefault(); //Prevent actually submitting the form

        let paragraph = document.createElement('p');
        paragraph.innerHTML = document.getElementById("task3-input").value;
        
        let task3Messages = document.getElementById("task3-messages");
        task3Messages.append(paragraph);
    });
});

