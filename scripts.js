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
backButtonEl.addEventListener("click", backForm);

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
        if (password.value !== passwordTwo.value || !password.value || !passwordTwo.value) {
            password.style.border = "1px solid red";
            passwordTwo.style.border = "1px solid red";
            passwordErrorEl.style.display = "inline";
            return false;
        } else {
            return true;
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

function isThirdInputFieldValid() {
    const isPasswordValid = isInputFieldValid(false, false, passwordInputEl, repeatPasswordInputEl);
    if (isPasswordValid) {
        return true;
    }
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

function updateInnerObject(name, inputValue) {
    return object.user[name] = inputValue.value;
}

function continueForm() {
    removeError();
    if (object.step === 0) {
        if (isFirstInputFieldValid()) {
            closeField(firstInputContainerEl);
            openField(secondInputContainerEl);
            backButtonEl.style.display = "inline";
            updateInnerObject("firstName", nameInputEl);
            updateInnerObject("lastName", surnameInputEl);
            updateInnerObject("email", emailInputEl);
            return updateObject(1);
        }
    }
    if (object.step === 1) {
        if (isSecondInputFieldValid()) {
            closeField(secondInputContainerEl);
            openField(thirdInputContainerEl);
            if (!secondaryAddressInputEl) {
                updateInnerObject("address", addressInputEl);
                updateInnerObject("shirtSize", shirtSizeInputEl);
            } else {
                updateInnerObject("address", addressInputEl);
                updateInnerObject("secondaryAddress", secondaryAddressInputEl);
                updateInnerObject("shirtSize", shirtSizeInputEl);
            }
            return updateObject(2);
        }
    }
    if (object.step === 2) {
        if (isThirdInputFieldValid()) {
            closeField(thirdInputContainerEl);
            openField(resultContainerEl);
            continueButtonEl.style.display = "none";
            updateInnerObject("password", passwordInputEl);
            updateObject(3);
            resultEl.textContent = JSON.stringify(object);
            return resultContainerEl.append(resultEl);
        }
    }
}

function backForm() {
    if (object.step === 3) {
        closeField(resultContainerEl);
        openField(thirdInputContainerEl);
        continueButtonEl.style.display = "inline";
        return updateObject(2);
    }
    if (object.step === 2) {
        closeField(thirdInputContainerEl);
        openField(secondInputContainerEl);
        return updateObject(1);
    }
    if (object.step === 1) {
        closeField(secondInputContainerEl);
        openField(firstInputContainerEl);
        backButtonEl.style.display = "none";
        return updateObject(0);
    }
}