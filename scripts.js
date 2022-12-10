const HELPBTN = document.querySelector("#help-btn");
HELPBTN.addEventListener("click", openComplaintForm);
const CLOSEBTN = document.querySelector("#close-btn");
CLOSEBTN.addEventListener("click", closeComplaintForm);
const SUBMITBTN = document.querySelector("#submit-btn");
SUBMITBTN.addEventListener("click", submitForm);


const NAMEINPUT = document.querySelector("#name");
const SURNAMEINPUT = document.querySelector("#surname");
const EMAILINPUT = document.querySelector("#email");
const COMPLAINT = document.querySelector("#complaint");

const RECEIVEDNAME = document.querySelector("#received-name");
const RECEIVEDSURNAME = document.querySelector("#received-surname");
const RECEIVEDEMAIL = document.querySelector("#received-email");
const RECEIVEDCOMPLAINT = document.querySelector("#received-complaint");
const COMPLAINTDATE = document.querySelector("#complaint-date");
const ERRORMSG = document.querySelector("#error");

const COMPLAINTFORM = document.querySelector("#form-container");

function openComplaintForm() {
    // COMPLAINTFORM.style.display = "flex";
    COMPLAINTFORM.style.visibility = "visible";
    COMPLAINTFORM.style.opacity = "1";
}

function closeComplaintForm() {
    // COMPLAINTFORM.style.display = "none";
    COMPLAINTFORM.style.visibility = "hidden";
    COMPLAINTFORM.style.opacity = "0";
}

function submitForm() {
    const ISNAMEVALID = NAMEINPUT.value;
    const ISSURNAMEVALID = SURNAMEINPUT.value;
    const ISEMAILVALID = isEmailValid();
    const ISCOMPLAINTVALID = COMPLAINT.value;

    if (ISNAMEVALID &&
        ISSURNAMEVALID &&
        ISEMAILVALID &&
        ISCOMPLAINTVALID) {
        removeError();
        RECEIVEDNAME.innerHTML = NAMEINPUT.value;
        RECEIVEDSURNAME.innerHTML = SURNAMEINPUT.value;
        RECEIVEDEMAIL.innerHTML = EMAILINPUT.value;
        RECEIVEDCOMPLAINT.innerHTML = COMPLAINT.value;
        COMPLAINTDATE.innerHTML = new Date().toLocaleString();
        clearInput();
        closeComplaintForm()
    } else {
        removeError()
        if (!ISNAMEVALID) {
            NAMEINPUT.style.border = "1px solid red";
            addError();
        }

        if (!ISSURNAMEVALID) {
            SURNAMEINPUT.style.border = "1px solid red";
            addError();
        }

        if (!ISEMAILVALID || !EMAILINPUT.value) {
            EMAILINPUT.style.border = "1px solid red";
            addError();
        }

        if (!ISCOMPLAINTVALID) {
            COMPLAINT.style.border = "1px solid red";
            addError();
        }
    }
}

function isEmailValid() {
    if (EMAILINPUT.validity.typeMismatch) {
        return false;
    } else {
        return true
    }
}

function clearInput() {
    NAMEINPUT.value = "";
    SURNAMEINPUT.value = "";
    EMAILINPUT.value = "";
    COMPLAINT.value = "";
}

function addError() {
    ERRORMSG.innerHTML = "Please corect mistakes made in your complaint form.";
}

function removeError() {
    ERRORMSG.innerHTML = "";
    NAMEINPUT.style.border = "1px solid black";
    SURNAMEINPUT.style.border = "1px solid black";
    EMAILINPUT.style.border = "1px solid black";
    COMPLAINT.style.border = "1px solid black";
}