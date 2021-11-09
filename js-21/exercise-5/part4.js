/**
 * TUAS JS-21 course Exercise 5 Part 4 JavaScript
 * This is basically MVP, not a fully tested complete solution.
 */

let localStorage = window.localStorage;
let messages = JSON.parse(localStorage.getItem('e5p4-messages'));

const storeLocalData = (e) => {
    e.preventDefault();
    let userInputElm = document.getElementById('data');
    let dataShownElm = document.getElementById('data-in-ls');

    messages.push(userInputElm.value);
    localStorage.setItem('e5p4-messages', JSON.stringify(messages));

    let p = document.createElement('p');
    p.innerHTML = userInputElm.value;
    dataShownElm.insertAdjacentElement('beforeend', p);
}

const showMessagesFromLS = () => {
    let dataShownElm = document.getElementById('data-in-ls');
   
    if (messages !== null) {
        messages.forEach((cell) => {
            let p = document.createElement('p');
            p.innerHTML = cell;
            dataShownElm.insertAdjacentElement('beforeend', p);
        });
    }
}

window.addEventListener('load', () => {
    const form = document.getElementById('ls-form');

    if (!Array.isArray(messages)) {
        messages = [];
    }

    showMessagesFromLS();
    form.addEventListener('submit', storeLocalData);
});

