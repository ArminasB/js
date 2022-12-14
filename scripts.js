const inputEl = document.querySelector("#todo-input");
const todoButtonEl = document.querySelector("#todo-btn");
const todoListEl = document.querySelector("#todo-list");
const doneListEl = document.querySelector("#done-list");


todoButtonEl.addEventListener("click", addTodo);

function addTodo() {
    inputEl.style.border = "";
    const inputValue = inputEl.value;

    if (!inputValue) {
        inputEl.style.border = "1px solid red";
        return
    }
    inputEl.value = "";
    const todo = createNewTodo(inputValue);
    todoListEl.append(todo);
}

function createDoneElement(textNode) {
    const newTodo = document.createElement("li");
    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", deleteTodo);
    function deleteTodo() {
        newTodo.remove();
    }

    newTodo.append(textNode, closeButton);
    doneListEl.append(newTodo);
}

function createNewTodo(text) {
    const textNode = document.createTextNode(text);
    const newTodo = document.createElement("li");
    const doneButton = document.createElement("button");
    const closeButton = document.createElement("button");
    doneButton.textContent = "V";
    closeButton.textContent = "X";
    newTodo.append(textNode, doneButton, closeButton);

    function deleteTodo() {
        newTodo.remove();
    }

    closeButton.addEventListener("click", deleteTodo);
    doneButton.addEventListener("click", function() {
        deleteTodo();
        createDoneElement(textNode);
    })

    return newTodo;
}