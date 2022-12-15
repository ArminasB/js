// const helpButton = document.querySelector("#help-btn");
// const closeButton = document.querySelector("#close-btn");
// const submitButton = document.querySelector("#submit-btn");
// const nameInput = document.querySelector("#name");
// const surnameInput = document.querySelector("#surname");
// const emailInput = document.querySelector("#email");
// const complaint = document.querySelector("#complaint");
// const receivedName = document.querySelector("#received-name");
// const receivedSurname = document.querySelector("#received-surname");
// const receivedEmail = document.querySelector("#received-email");
// const receivedComplaint = document.querySelector("#received-complaint");
// const complaintDate = document.querySelector("#complaint-date");
// const errorMessage = document.querySelector("#error");
// const resultContainer = document.querySelector("#result-container")
// const complaintForm = document.querySelector("#form-container");

// helpButton.addEventListener("click", openComplaintForm);
// closeButton.addEventListener("click", closeComplaintForm);
// submitButton.addEventListener("click", submitForm);

// function openComplaintForm(event) {
//     console.log(event);
//     complaintForm.classList.add("active");
// }

// function emailIsValid() {
//     if (emailInput.validity.typeMismatch) {
//         return false;
//     } else {
//         return true
//     }
// }

// function isInputValid() {
//     if (!nameInput.value || !surnameInput.value || !emailInput.value || !emailIsValid() || !complaint.value) {
//         return false
//     }
//     return true
// }

// function clearInput() {
//     nameInput.value = "";
//     surnameInput.value = "";
//     emailInput.value = "";
//     complaint.value = "";
// }

// // function clearData() {
// //     receivedName.innerText = "";
// //     receivedSurname.innerText = "";
// //     receivedEmail.innerText = "";
// //     receivedComplaint.innerText = "";
// //     complaintDate.innerText = "";
// // }

// function addParagraphContainer() {
//     const paragraphContainer = document.createElement("div");
//     paragraphContainer.classList.add("paragraph-container");
//     paragraphContainer.append(addParagraph("First Name: ", "first-name" , nameInput.value));
//     paragraphContainer.append(addParagraph("Last Name: ", "last-name" , surnameInput.value));
//     paragraphContainer.append(addParagraph("Email address : ", "email" , emailInput.value));
//     paragraphContainer.append(addParagraph("Complaint : ", "complaint" , complaint.value));
//     paragraphContainer.append(addParagraph("Complaint-time : ", "date" , new Date().toLocaleString()));

//     return paragraphContainer;
// }

// function addParagraph(title, valueId, spanContent) {
//     const paragraph = document.createElement("p");
//     const paragraphValue = document.createElement("span");
//     paragraph.textContent = title;
//     paragraph.append(paragraphValue);
//     paragraphValue.id = valueId;
//     paragraph.classList.add("paragraph");
//     paragraphValue.textContent = spanContent;

//     return paragraph;
// }

// function addError(a) {
//     errorMessage.innerText = "Please corect mistakes made in your complaint form.";
//     addErrorBorder(a);
// }

// function addErrorBorder(a) {
//     a.style.border = "1px solid red";
// }

// function addNormalBorder(a) {
//     a.style.border = "1px solid black";
// }

// function removeError() {
//     errorMessage.innerText = "";
//     addNormalBorder(nameInput);
//     addNormalBorder(surnameInput);
//     addNormalBorder(emailInput);
//     addNormalBorder(complaint);
// }

// function closeComplaintForm() {
//     complaintForm.classList.remove("active");
//     removeError();
//     // clearData();
// }

// function submitForm() {
//     const isNameValid = nameInput.value;
//     const isSurnameValid = surnameInput.value;
//     const isEmailValid = emailIsValid();
//     const isComplaintValid = complaint.value;

//     if (isInputValid()) {
//         removeError();
//         resultContainer.append(addParagraphContainer());
//         clearInput();
//         setTimeout(closeComplaintForm, 200);
//     } else {
//         removeError()
//         if (!isNameValid) {
//             addError(nameInput);
//         }

//         if (!isSurnameValid) {
//             addError(surnameInput);
//         }

//         if (!isEmailValid || !emailInput.value) {
//             addError(emailInput);
//         }

//         if (!isComplaintValid) {
//             addError(complaint);
//         }
//     }
// }


const selectField = document.querySelector("#change-window");
const budgetFieldEl = document.querySelector("#budget");
const expensesFieldEl = document.querySelector("#expenses");
const budgetInputEl = document.querySelector("#budget-input");
const submitBudgetButton = document.querySelector("#submit-budget");
const remainingBudgetEl = document.querySelector("#remaining-budget");
const dateEl = document.querySelector("#date");
const spentInputEl = document.querySelector("#spent-amount");
const expensesTypeEl = document.querySelector("#expenses-type");
const notesEl = document.querySelector("#notes");
const submitExpenseButton = document.querySelector("#submit-expense");
const expensesList = document.querySelector("#expenses-list");

selectField.addEventListener("change", changeField);
submitBudgetButton.addEventListener("click", showBudget);
submitExpenseButton.addEventListener("click", submitExpense);

function changeField(event) {
    if(event.target.value === "current-budget") {
        budgetFieldEl.style.display = "flex";
        expensesFieldEl.style.display = "none";
    } else if(event.target.value === "add-expense") {
        budgetFieldEl.style.display = "none";
        expensesFieldEl.style.display = "flex";
    }
}

function calculateBudget(expenses) {
    let leftBudget;
    if(expenses) {
        leftBudget = Number(remainingBudgetEl.textContent) - Number(expenses);
        console.log(leftBudget);
    } else {
        leftBudget = Number(budgetInputEl.value);
    }
    return leftBudget;
}

function disableBudgetInput() {
    if(budgetInputEl){
        budgetInputEl.disabled = true;
        submitBudgetButton.disabled = true;
    }else{
        budgetInputEl.disabled = false;
        submitBudgetButton.disabled = false;
    }
}

function showBudget() {
    remainingBudgetEl.textContent = `Current budget left after expenses: ${calculateBudget()}`;
    disableBudgetInput()
}

function formIsValid() {
    if(dateEl.value && spentInputEl.value && expensesTypeEl.value && notesEl.value) {
        return true
    }
}

function clearInput() {
    spentInputEl.value = "";
    notesEl.value = "";
}

function addParagraph(text, value) {
    const paragraph = document.createElement("p");
    const span = document.createElement("span");
    paragraph.textContent = text;
    span.textContent = value
    paragraph.append(span);

    return paragraph;
}

function expensesType() {
    

}

function createExpenseContainer() {
    const expenseContainer = document.createElement("div");
    expenseContainer.classList = "expense-container"
    expenseContainer.append(addParagraph("Date: ", dateEl.value));
    expenseContainer.append(addParagraph("Spent amount: ", spentInputEl.value ));
    expenseContainer.append(addParagraph("Expenses type: ", expensesTypeEl.options[expensesTypeEl.selectedIndex].value));
    expenseContainer.append(addParagraph("Notes: ", notesEl.value));
    expensesList.append(expenseContainer);

    return expenseContainer;
}

function submitExpense() {
    if(formIsValid()) {
        createExpenseContainer();
        remainingBudgetEl.textContent = calculateBudget(spentInputEl.value);
        clearInput();
    }
}