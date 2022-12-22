const firstInputContainerEl = document.querySelector("#first-input-container");
const secondInputContainerEl = document.querySelector("#second-input-container");
const thirdInputContainerEl = document.querySelector("#third-input-container");
const resultContainerEl = document.querySelector("#result");
const nameInputEl = document.querySelector("#name");
const surnameInputEl = document.querySelector("#surname");
const emailInputEl = document.querySelector("#email");
const addressInputEl = document.querySelector("#address");
const secondaryAddressInputEl = document.querySelector("#secondary-address");
const shirtSizeInputEl = document.querySelector("#shirt-size");
const passwordInputEl = document.querySelector("#password");
const repeatPasswordInputEl = document.querySelector("#repeat-password");
const passwordErrorEl = document.querySelector("#password-match-error");
const continueButtonEl = document.querySelector("#continue-button");
const backButtonEl = document.querySelector("#back-button");
const resultEl = document.createElement('p');
const object = {
    step: 0,
    user: {},
};

continueButtonEl.addEventListener("click", continueForm);
// backButtonEl.addEventListener("click", backForm);

function removeError() {
    nameInputEl.style.border = "1px solid black";
    surnameInputEl.style.border = "1px solid black";
    emailInputEl.style.border = "1px solid black";
    addressInputEl.style.border = "1px solid black";
    shirtSizeInputEl.style.border = "1px solid black";
    passwordInputEl.style.border = "1px solid black";
    continueButtonEl.style.border = "1px solid black";
    passwordErrorEl.style.display = "none";
}

function isInputFieldValid(input, email, password, passwordTwo) {
    if (password && passwordTwo) {
        if (password === passwordTwo) {
            return true;
        } else {
            password.style.border = "1px solid red";
            passwordTwo.style.border = "1px solid red";
            passwordErrorEl.style.display = "inline";
            return false;
        }
    }

    if (email) {
        if (email.validity.typeMismatch || !email.value) {
            email.style.border = "1px solid red";
            return false;
        } else {
            return true;
        }
    }

    if (input) {
        if (!input.value) {
            input.style.border = "1px solid red";
            return false;
        } else {
            return true;
        }
    }
}

function isFirstInputFieldValid() {
    const isNameValid = isInputFieldValid(nameInputEl, false, false, false);
    const isSurnameValid = isInputFieldValid(surnameInputEl, false, false, false);
    const isEmailValid = isInputFieldValid(false, emailInputEl, false, false);
    if (isNameValid && isSurnameValid && isEmailValid) {
        return true;
    }
}

function isSecondInputFieldValid() {
    const isAddressValid = isInputFieldValid(addressInputEl, false, false, false);
    const isSizeValid = isInputFieldValid(shirtSizeInputEl, false, false, false);
    if (isAddressValid && isSizeValid) {
        return true
    }
}

function isInputFieldOpen(field, className) {
    return field.classList.contains(className);
}

function closeField(field) {
    field.style.display = "none";
}

function openField(field) {
    field.style.display = "flex";
}

function updateObject(turn) {
    object.step = turn;
}

function updateInnerObject(inputName, inputValue) {
    return object.user[inputName] = inputValue.value;
}

function continueForm() {
    removeError();
    if (isInputFieldOpen(firstInputContainerEl, "first-input-container")) {
        if (isFirstInputFieldValid()) {
            closeField(firstInputContainerEl);
            openField(secondInputContainerEl);
            backButtonEl.style.display = "inline";
            updateObject(1);
            updateInnerObject("firstName", nameInputEl);
            updateInnerObject("lastName", surnameInputEl);
            updateInnerObject("email", emailInputEl);
        }
    }

    if (isInputFieldOpen(secondInputContainerEl, "second-input-container")) {
        if (isSecondInputFieldValid()) {
            console.log("test");
            closeField(secondInputContainerEl);
            openField(resultContainerEl);
            updateObject(2);
            if (!secondaryAddressInputEl) {
                updateInnerObject("address", addressInputEl);
                updateInnerObject("shirtSize", shirtSizeInputEl);
            } else {
                updateInnerObject("address", addressInputEl);
                updateInnerObject("secondaryAddress", secondaryAddressInputEl);
                updateInnerObject("shirtSize", shirtSizeInputEl);
            }
            resultEl.textContent = JSON.stringify(object);
            return resultContainerEl.append(resultEl);
        }
    }
}