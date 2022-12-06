function calcBmr() {
    const heightEl = document.querySelector("#height");
    const weightEl = document.querySelector("#weight");
    const ageEl = document.querySelector("#age");
    const height = Number(heightEl.value);
    const weight = Number(weightEl.value);
    const age = Number(ageEl.value);
    const result = document.querySelector("#result");

    const heightError = document.querySelector("#height-error");
    const weightError = document.querySelector("#weight-error");
    const ageError = document.querySelector("#age-error");
    const genderError = document.querySelector("#gender-error");
    const activityError = document.querySelector("#activity-error");
    clearError();

    const genderEl = document.querySelector("input[name='gender']:checked");
    const activityEl = document.querySelector("input[name='activity-level']:checked");

    let gender;
    let activity;

    if (genderEl) {
        gender = genderEl.value;
    }

    if (activityEl) {
        activity = activityEl.value;
    }


    const isHeightValid = height > 0;
    const isWeightValid = weight > 0;
    const isAgeValid = age > 0;


    let isGenderValid = "male" === gender
        || "female" === gender;
    let isActivityValid = "sedentary" === activity ||
        "lightly-active" === activity ||
        "moderately-active" === activity ||
        "very-active" === activity ||
        "extra-active" === activity;

    if (isHeightValid &&
        isWeightValid &&
        isAgeValid &&
        isGenderValid &&
        isActivityValid) {
        if (gender === "male") {
            if (activity === "sedentary") {
                result.innerText = (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)) * 1.2;
            } else if (activity === "lightly-active") {
                result.innerText = (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)) * 1.375;
            } else if (activity === "moderately-active") {
                result.innerText = (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)) * 1.55;
            } else if (activity === "very-active") {
                result.innerText = (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)) * 1.725;
            } else if (activity === "extra-active") {
                result = (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)) * 1.9;
            }
        } else {
            if (activity === "sedentary") {
                result.innerText = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)) * 1.2;
            } else if (activity === "lightly-active") {
                result.innerText = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)) * 1.375;
            } else if (activity === "moderately-active") {
                result.innerText = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)) * 1.55;
            } else if (activity === "very-active") {
                result.innerText = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)) * 1.725;
            } else if (activity === "extra-active") {
                result.innerText = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)) * 1.9;
            }
        }
        clearResult();
        resultPop();
    } else {
        if (!isHeightValid) {
            heightError.innerText = "Klaida";
        }
        if (!isWeightValid) {
            weightError.innerText = "Klaida";
        }
        if (!isAgeValid) {
            ageError.innerText = "Klaida";
        }
        if (!isGenderValid) {
            genderError.innerText = "Klaida";
        }
        if (!isActivityValid) {
            activityError.innerText = "Klaida";
        }
    }
    function clearResult() {
        heightEl.value = "";
        weightEl.value = "";
        ageEl.value = "";

        if (genderEl.checked === true) {
            genderEl.checked = false;
        }

        if (activityEl.checked === true) {
            activityEl.checked = false;
        }
    }

    function clearError() {
        heightError.innerText = "";
        weightError.innerText = "";
        ageError.innerText = "";
        genderError.innerText = "";
        activityError.innerText = "";
    }
}

const resultPopY = document.querySelector("#result-pop");
const resultPopYClass = resultPopY.className;
const isResultPopYValid = resultPopYClass === "result-pop active";

function resultPop() {
    if(!isResultPopYValid) {
        resultPopY.className = "result-pop active";
    }
}

function closeB() {
    if(!isResultPopYValid) {
        resultPopY.className = "result-pop";
    }
}





function mode() {
    const bodyEl = document.querySelector("#body");
    const body = bodyEl.className;
    const modeButtonEl = document.querySelector("#mode-button");

    const isBodyValid = body === "mode";

    if (!isBodyValid) {
        bodyEl.className = "mode"
        modeButtonEl.innerText = "Light"

    } else {
        bodyEl.className = ""
        modeButtonEl.innerText = "Dark"
    }
}

// const displayElement = document.querySelector("#display");
// let temporaryValue;
// let operationType;
// let result;

// function call1 () {
//     const value = 1;
//     displayElement.innerText += value;
// }


// function call2 () {
//     const value = 2;
//     displayElement.innerText += value;
// }

// function call3 () {
//     const value = 3;
//     displayElement.innerText += value;
// }

// function call4 () {
//     const value = 4;
//     displayElement.innerText += value;
// }

// function call5 () {
//     const value = 5;
//     displayElement.innerText += value;
// }

// function call6 () {
//     const value = 6;
//     displayElement.innerText += value;
// }

// function call7 () {
//     const value = 7;
//     displayElement.innerText += value;
// }

// function call8 () {
//     const value = 8;
//     displayElement.innerText += value;
// }

// function call9 () {
//     const value = 9;
//     displayElement.innerText += value;
// }

// function call0 () {
//     const value = 0;
//     displayElement.innerText += value;
// }

// function saveValue () {
//     if(typeof temporaryValue === "number" &&
//      typeof operationType !== "undefined") {
//         if(operationType === "multiply") {
//             result = temporaryValue * Number(displayElement.innerText);
//         } else if (operationType === "divide") {
//             result = temporaryValue / Number(displayElement.innerText);
//         } else if(operationType === "add") {
//             result = temporaryValue + Number(displayElement.innerText);
//         } else if (operationType === "subtract"){
//             result = temporaryValue - Number(displayElement.innerText);
//         }
//         temporaryValue = result;
//     } else {
//         temporaryValue = Number(displayElement.innerText);
//     }
// }

// function multiply () {
//     saveValue();
//     displayElement.innerText = "";
//     operationType = "multiply"
// }

// function divide () {
//     saveValue();
//     displayElement.innerText = "";
//     operationType = "divide"
// }

// function add () {
//     saveValue();
//     displayElement.innerText = "";
//     operationType = "add"
// }

// function subtract () {
//     saveValue();
//     displayElement.innerText = "";
//     operationType = "subtract"
// }

// function calculateResult () {
//     if(operationType === "multiply") {
//         result = temporaryValue * Number(displayElement.innerText);
//     } else if (operationType === "divide") {
//         result = temporaryValue / Number(displayElement.innerText);
//     } else if(operationType === "add") {
//         result = temporaryValue + Number(displayElement.innerText);
//     } else if (operationType === "subtract"){
//         result = temporaryValue - Number(displayElement.innerText);
//     }
//     displayElement.innerText = result;
//     temporaryValue = null;
//     operationType = null;
// }

// function clearResult () {
//     displayElement.innerText = "";
//     temporaryValue = null;
//     operationType = null;
// }