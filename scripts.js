const helpButton = document.querySelector("#help-btn");
helpButton.addEventListener("click", openComplaintForm);
const closeButton = document.querySelector("#close-btn");
closeButton.addEventListener("click", closeComplaintForm);
const submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", submitForm);


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

function addError() {
    errorMessage.innerHTML = "Please corect mistakes made in your complaint form.";
}

function removeError() {
    errorMessage.innerHTML = "";
    nameInput.style.border = "1px solid black";
    surnameInput.style.border = "1px solid black";
    emailInput.style.border = "1px solid black";
    complaint.style.border = "1px solid black";
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
        receivedName.innerHTML = nameInput.value;
        receivedSurname.innerHTML = surnameInput.value;
        receivedEmail.innerHTML = emailInput.value;
        receivedComplaint.innerHTML = complaint.value;
        complaintDate.innerHTML = new Date().toLocaleString();
        clearInput();
        closeComplaintForm()
    } else {
        console.log("ne");
        removeError()
        if (!isNameValid) {
            nameInput.style.border = "1px solid red";
            addError();
        }

        if (!isSurnameValid) {
            surnameInput.style.border = "1px solid red";
            addError();
        }

        if (!isEmailValid || !emailInput.value) {
            emailInput.style.border = "1px solid red";
            addError();
        }

        if (!isComplaintValid) {
            complaint.style.border = "1px solid red";
            addError();
        }
    }
}

