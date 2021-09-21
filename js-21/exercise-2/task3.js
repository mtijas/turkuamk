//Convert hours to hours and minutes (hh:mm)
const convertToMinutesFormat = (hoursInHundredths) => {
    let parsedHours = parseFloat(hoursInHundredths.toString().replace(',','.'));
    let wholeHours = Math.floor(parsedHours);
    let minutes = Math.round(parsedHours % wholeHours * 60.0);
    return wholeHours + ":" + minutes.toString().padStart(2, "0");
}

window.addEventListener("load", () => {
    // Gets the submit button
    const task3SubmitBtn = document.getElementById("task3-submit-btn");

    // Attaches listener to submit button click event
    task3SubmitBtn.addEventListener("click", function(event) {
        event.preventDefault(); //Prevent actually submitting the form

        inputVal = document.getElementById("task3-input").value;
        let hmResult = convertToMinutesFormat(inputVal);

        showResult(`${inputVal} hours is in hours and minutes equal to ${hmResult}`,
                   "task3-result-div");
    });
});
