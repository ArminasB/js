const newKeyEl = document.querySelector("#new-key");
const existingKeysEl = document.querySelector("#existing-keys");
const defaultOptionEl = document.querySelector("#default-option");
const keyValue = document.querySelector("#key-value");
const buttonEl = document.querySelector("#btn");
const resultContainer = document.querySelector("#result");
const output = document.createElement("p");
output.textContent = "{}";
resultContainer.append(output);
const object = {};
buttonEl.addEventListener("click", updateObject);

function updateObject() {
    if(!existingKeysEl.value) {
        existingKeysEl.removeAttribute("disabled");
        defaultOptionEl.removeAttribute("hidden");
        object[newKeyEl.value] = keyValue.value;
        createExistingKey(newKeyEl.value);
        return updateOutput(JSON.stringify(object));
    } else {
        object[existingKeysEl.value] = keyValue.value;
        return updateOutput(JSON.stringify(object));
    }
}

function createExistingKey(key) {
    const newKey = document.createElement("option");
    newKey.textContent = key;
    newKey.value = key;
    return existingKeysEl.append(newKey);
}

function updateOutput(obj) {
    return output.textContent = obj;
}

