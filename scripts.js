
const selectField = document.querySelector("#change-window");
const budgetFieldEl = document.querySelector("#budget-field");
const expensesFieldEl = document.querySelector("#expenses");
const budgetInputEl = document.querySelector("#budget-input");
const submitBudgetButton = document.querySelector("#submit-budget");
const budgetSum = addBudgetParagraph;
const dateEl = document.querySelector("#date");
const spentInputEl = document.querySelector("#spent-amount-input");
const expensesTypeEl = document.querySelector("#expenses-type");
const notesEl = document.querySelector("#notes");
const submitExpenseButton = document.querySelector("#submit-expense");
const noBudgetErrorEl = document.querySelector("#no-budget-error");
const expensesList = document.querySelector("#expenses-list");
const budgetSumEl = document.createElement("span");
const isBudgetNotEntered = budgetSumEl.textContent === "";

selectField.addEventListener("change", changeField);
submitBudgetButton.addEventListener("click", addBudget);
submitExpenseButton.addEventListener("click", submitExpense);

function changeField(event) {
    if (event.target.value === "current-budget") {
        budgetFieldEl.style.display = "flex";
        expensesFieldEl.style.display = "none";
    } else if (event.target.value === "add-expense") {
        budgetFieldEl.style.display = "none";
        expensesFieldEl.style.display = "flex";
    }
}

function addBudgetParagraph() {
    clearError();
    const budgetParagraphEl = document.createElement("p");
    budgetParagraphEl.textContent = "Current balance after expenses: ";
    budgetSumEl.textContent = budgetInputEl.value;
    budgetParagraphEl.append(budgetSumEl);
    return budgetParagraphEl;

}

function addBudget() {
    budgetFieldEl.append(addBudgetParagraph());
    disableBudgetInput()
}

function disableBudgetInput() {
    if (budgetInputEl) {
        budgetInputEl.disabled = true;
        submitBudgetButton.disabled = true;
    } else {
        budgetInputEl.disabled = false;
        submitBudgetButton.disabled = false;
    }
}

function formIsValid() {
    if (dateEl.value && spentInputEl.value && expensesTypeEl.value && notesEl.value) {
        return true
    }
}

function clearInput() {
    dateEl.value = "";
    spentInputEl.value = "";
    notesEl.value = "";
}

function clearError() {
    noBudgetErrorEl.style.display = "none";
}

function addExpenceParagraph(text, value) {
    const paragraph = document.createElement("p");
    const span = document.createElement("span");
    paragraph.textContent = text;
    span.textContent = value
    paragraph.append(span);
    return paragraph;
}

function createExpenseContainer() {
    const expenseContainer = document.createElement("div");
    expenseContainer.classList = "expense-container";
    expenseContainer.append(addExpenceParagraph("Date: ", dateEl.value));
    expenseContainer.append(addExpenceParagraph("Spent amount: ", spentInputEl.value));
    expenseContainer.append(addExpenceParagraph("Expenses type: ", expensesTypeEl.options[expensesTypeEl.selectedIndex].value));
    expenseContainer.append(addExpenceParagraph("Notes: ", notesEl.value));
    expensesList.append(expenseContainer);
    return expenseContainer;

}

function calculateRemainingBudget(expense) {
    const remainingBudget = Number(budgetSumEl.textContent) - Number(expense);
    return remainingBudget;
}

function submitExpense() {
    if (isBudgetNotEntered) {
        return noBudgetErrorEl.style.display = "block";
    }

    if (formIsValid()) {
        budgetSumEl.textContent = calculateRemainingBudget(spentInputEl.value);
        createExpenseContainer();
        clearInput();
    }
}