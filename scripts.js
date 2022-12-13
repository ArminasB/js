// const selectElement = document.querySelector("#ice-cream");
// selectElement.addEventListener("change", selectListener);

// function selectListener(event) {
//     console.log("event" , event);
//     console.log("event.target", event.targer);
//     console.log("event.target.value", event.target.value);
//     console.log("selectElement", selectElement);
// }

// window.addEventListener("resize", function(evt) {
//     console.log("resize");
// });

// const changeLogEl = document.querySelector("#change-log");
// const genderEl = document.querySelector("#gender");
// const ageEl = document.querySelector("#age");

// function changeListener(event) {
//     const selectName = event.target.name;
//     const selectValue = event.target.value;

//     const text = `User has changed ${selectName} select with a value ${selectValue}`

//     changeLogEl.innerText = text;
// }

// ageEl.addEventListener("change", changeListener);
// genderEl.addEventListener("change", changeListener);

const firstNumber = document.querySelector("#first");
const secondNumber = document.querySelector("#second");

const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");

const resultEl = document.querySelector("#result");

multiplyButton.addEventListener("click", function() {
    const firstValue = getElementValue(firstNumber);
    const secondValue = getElementValue(secondNumber);
    const resultValue = multiply(firstValue, secondValue);
    return resultEl.innerHTML = resultValue;
});

divideButton.addEventListener("click", function() {
    const firstValue = getElementValue(firstNumber);
    const secondValue = getElementValue(secondNumber);
    const resultValue = divide(firstValue, secondValue);
    return resultEl.innerHTML = resultValue;
});

function getElementValue(element) {
    const elementValue = Number(element.value);
    return elementValue;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}