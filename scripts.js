const GENERATECOLORBTN = document.querySelector("#generate-button");
const COLORVALUEL = document.querySelector("#color-value");
const COLORCONTAINER = document.querySelector("#color-container");

GENERATECOLORBTN.addEventListener("click", generateRandomColor);
window.addEventListener("load", generateRandomColor);

function generateRandomColor() {
    const RANDOMRGB = `rgb(${getRandomRGBNumber()},${getRandomRGBNumber()},${getRandomRGBNumber()})`;
    COLORCONTAINER.style.backgroundColor = RANDOMRGB;
    COLORVALUEL.textContent = RANDOMRGB;
}

function getRandomRGBNumber() {
    return Math.floor(Math.random() * 256);
}


const OPENMODALBUTTON = document.querySelector("#modal-button");
const CLOSEMODALBUTTON = document.querySelector("#close-btn");
const ACCEPTMODALBUTTON = document.querySelector("#accept-btn");
const MODALEL = document.querySelector("#modal");

OPENMODALBUTTON.addEventListener("click", openModal);
CLOSEMODALBUTTON.addEventListener("click", closeModal);
ACCEPTMODALBUTTON.addEventListener("click", acceptTerms);
ACCEPTMODALBUTTON.addEventListener("click", closeModal);
MODALEL.addEventListener("click", closeOnOverlay);

function openModal() {
    MODALEL.className = "modal active";
}

function closeModal() {
    MODALEL.className = "modal";
}

function acceptTerms() {
    console.log("accepted");
}

function closeOnOverlay() {
    const cursorTarget = event.target;
    if(cursorTarget === MODALEL) {
        closeModal();
    }
}