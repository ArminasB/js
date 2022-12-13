const helpButton = document.querySelector("#help-btn");
const closeButton = document.querySelector("#close-btn");
const submitButton = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const complaint = document.querySelector("#complaint");
const receivedName = document.querySelector("#received-name");
const receivedSurname = document.querySelector("#received-surname");
const receivedEmail = document.querySelector("#received-email");
const receivedComplaint = document.querySelector("#received-complaint");
const complaintDate = document.querySelector("#complaint-date");
const errorMessage = document.querySelector("#error");
const complaintForm = document.querySelector("#form-container");

helpButton.addEventListener("click", openComplaintForm);
closeButton.addEventListener("click", closeComplaintForm);
submitButton.addEventListener("click", submitForm);

function openComplaintForm() {
    complaintForm.classList.add("active");
}

function emailIsValid() {
    if (emailInput.validity.typeMismatch) {
        return false;
    } else {
        return true
    }
}

function clearInput() {
    nameInput.value = "";
    surnameInput.value = "";
    emailInput.value = "";
    complaint.value = "";
}

function placeData() {
    receivedName.innerHTML = nameInput.value;
    receivedSurname.innerHTML = surnameInput.value;
    receivedEmail.innerHTML = emailInput.value;
    receivedComplaint.innerHTML = complaint.value;
    complaintDate.innerHTML = new Date().toLocaleString();
}

function addError() {
    errorMessage.innerHTML = "Please corect mistakes made in your complaint form.";
}

function addErrorBorder(a) {
    a.style.border = "1px solid red";
}

function addNormalBorder(a) {
    a.style.border = "1px solid black";
}

function removeError() {
    errorMessage.innerHTML = "";
    nameInput.style.border = addNormalBorder(nameInput);
    surnameInput.style.border = addNormalBorder(surnameInput);
    emailInput.style.border = addNormalBorder(emailInput);
    complaint.style.border = addNormalBorder(complaint);
}

function closeComplaintForm() {
    complaintForm.classList.remove("active");
}

function submitForm() {
    const isNameValid = nameInput.value;
    const isSurnameValid = surnameInput.value;
    const isEmailValid = emailIsValid();
    const isComplaintValid = complaint.value;


    if (isNameValid &&
        isSurnameValid &&
        isEmailValid &&
        isComplaintValid) {
        removeError();
        placeData();
        clearInput();
        setTimeout(closeComplaintForm, 200);
    } else {
        removeError()
        if (!isNameValid) {
            nameInput.style.border = addErrorBorder(nameInput);
            addError();
        }

        if (!isSurnameValid) {
            surnameInput.style.border = addErrorBorder(surnameInput);
            addError();
        }

        if (!isEmailValid || !emailInput.value) {
            emailInput.style.border = addErrorBorder(emailInput);
            addError();
        }

        if (!isComplaintValid) {
            complaint.style.border = addErrorBorder(complaint);
            addError();
        }
    }
}
