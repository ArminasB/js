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
const resultContainer = document.querySelector("#result-container")
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

function isInputValid() {
    if (!nameInput.value || !surnameInput.value || !emailInput.value && !emailIsValid() || !complaint.value) {
        return false
    }
    return true
}

function clearInput() {
    nameInput.value = "";
    surnameInput.value = "";
    emailInput.value = "";
    complaint.value = "";
}

// function placeData() {
//     receivedName.innerText = nameInput.value;
//     receivedSurname.innerText = surnameInput.value;
//     receivedEmail.innerText = emailInput.value;
//     receivedComplaint.innerText = complaint.value;
//     complaintDate.innerText = new Date().toLocaleString();
// }

// function clearData() {
//     receivedName.innerText = "";
//     receivedSurname.innerText = "";
//     receivedEmail.innerText = "";
//     receivedComplaint.innerText = "";
//     complaintDate.innerText = "";
// }

function addParagraphContainer() {
    const paragraphContainer = document.createElement("div");
    paragraphContainer.classList.add("paragraph-container");
    paragraphContainer.append(addParagraph("First Name: ", "first-name" , nameInput.value));
    paragraphContainer.append(addParagraph("Last Name: ", "last-name" , surnameInput.value));
    paragraphContainer.append(addParagraph("Email address : ", "email" , emailInput.value));
    paragraphContainer.append(addParagraph("Complaint : ", "complaint" , complaint.value));
    paragraphContainer.append(addParagraph("Complaint-time : ", "date" , new Date().toLocaleString()));

    return paragraphContainer;
}

function addParagraph(title, valueId, spanContent) {
    const paragraph = document.createElement("p");
    const paragraphValue = document.createElement("span");
    paragraph.textContent = title;
    paragraph.append(paragraphValue);
    paragraphValue.id = valueId;
    paragraph.classList.add("paragraph");
    paragraphValue.textContent = spanContent;

    return paragraph;
}

function addError() {
    errorMessage.innerText = "Please corect mistakes made in your complaint form.";
}

function addErrorBorder(a) {
    a.style.border = "1px solid red";
}

function addNormalBorder(a) {
    a.style.border = "1px solid black";
}

function removeError() {
    errorMessage.innerText = "";
    addNormalBorder(nameInput);
    addNormalBorder(surnameInput);
    addNormalBorder(emailInput);
    addNormalBorder(complaint);
}

function closeComplaintForm() {
    complaintForm.classList.remove("active");
    removeError();
    // clearData();
}

function submitForm() {
    const isNameValid = nameInput.value;
    const isSurnameValid = surnameInput.value;
    const isEmailValid = emailIsValid();
    const isComplaintValid = complaint.value;

    if (isInputValid()) {
        removeError();
        resultContainer.append(addParagraphContainer());
        clearInput();
        setTimeout(closeComplaintForm, 200);
    } else {
        removeError()
        if (!isNameValid) {
            addErrorBorder(nameInput);
            addError();
        }

        if (!isSurnameValid) {
            addErrorBorder(surnameInput);
            addError();
        }

        if (!isEmailValid || !emailInput.value) {
            addErrorBorder(emailInput);
            addError();
        }

        if (!isComplaintValid) {
            addErrorBorder(complaint);
            addError();
        }
    }
}
