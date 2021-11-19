/**
 * TUAS JS-21 course Exercise 5 Part 2 JavaScript
 * This is basically MVP, not a fully tested complete solution.
 */

const isRequiredValueMissing = (form) => {
    //Assume only email is required since it has attribute required
    let email = form.elements['mailaddr'];
    if (email.value == '') {
        return true;
    }
    return false;
}

const isDoorSelectionMissing = (form) => {
    let doorSelection = form.elements['doors'];
    if (doorSelection.value == '') {
        return true;
    }
    return false;
}

const isEmailAddressInvalid = (form) => {
    let email = form.elements['mailaddr'];
    let regex = /\S+@\S+\.\S+/;
    return !regex.test(email.value);
}

const isColorNotSelected = (form) => {
    let colorSelection = form.elements['carcolor'];
    if (colorSelection.value == '') {
        return true;
    }
    return false;
}

const validateCarForm = (e) => {
    e.preventDefault();
    const infoElement = document.getElementById('validationinfo');
    let errorText = "";
    const form = document.getElementById('carform');
    
    if (isRequiredValueMissing(form)) {
        errorText += 'Please enter email address.<br>';
    }
    
    if (isDoorSelectionMissing(form)) {
        errorText += 'Please select the number of doors.<br>';
    }
    
    if (isEmailAddressInvalid(form)) {
        errorText += 'Please enter valid email address.<br>';
    }
    
    if (isColorNotSelected(form)) {
        errorText += 'Please select a color.<br>';
    }

    if (errorText) {
        infoElement.innerHTML = errorText;
    } else {
        form.submit();
    }
}

window.addEventListener('load', () => {
    const form = document.getElementById('carform');
    form.addEventListener('submit', validateCarForm);
});

