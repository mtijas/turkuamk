/**
 * JavaScript 2021 autumn course @ TurkuAMK, exercise 4, task 4
 *
 * Author: Markus Ijäs
 */

const changeColor = (e) => {
    document.body.style.background = e.currentTarget.dataset.bgcolor;
}

window.addEventListener("load", () => {
    let changerBtns = document.getElementsByClassName("color-changer");
    Array.from(changerBtns).forEach((btn) => {
        btn.addEventListener("click", changeColor);
    });
});

