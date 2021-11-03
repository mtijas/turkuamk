/**
 * JavaScript 2021 autumn course @ TurkuAMK, exercise 4, task 6
 *
 * Author: Markus Ijäs
 */

const changeBalloonSize = (sizeFactor) => {
    let balloon = document.getElementById("balloon");
    let style = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
    let size = parseFloat(style);
    size = size * sizeFactor;
    
    if (size > 100) {
        balloon.innerHTML = "💥";
        window.removeEventListener("keydown", keyDownListener);
    }

    if (size < 10) {
        size = 10;
    }

    balloon.style.fontSize = size + 'px';
}

const keyDownListener = () => {
    if (event.key == "ArrowUp") {
        event.preventDefault();
        changeBalloonSize(1.1);
    } else if (event.key == "ArrowDown") {
        event.preventDefault();
        changeBalloonSize(0.9);
    }
}

window.addEventListener("keydown", keyDownListener);

