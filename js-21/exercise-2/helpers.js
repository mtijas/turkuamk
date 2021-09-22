// Shows result in a specific div as requested
const showResult = function(text, targetElement) {
    let resultDiv = document.getElementById(targetElement);
    resultDiv.innerHTML += "<p>" + text + "</p>";
}
