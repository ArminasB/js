// const GENERATECOLORBTN = document.querySelector("#generate-button");
// const COLORVALUEL = document.querySelector("#color-value");
// const COLORCONTAINER = document.querySelector("#color-container");

// GENERATECOLORBTN.addEventListener("click", generateRandomColor);
// window.addEventListener("load", generateRandomColor);

// function generateRandomColor() {
//     const RANDOMRGB = `rgb(${getRandomRGBNumber()},${getRandomRGBNumber()},${getRandomRGBNumber()})`;
//     COLORCONTAINER.style.backgroundColor = RANDOMRGB;
//     COLORVALUEL.textContent = RANDOMRGB;
// }

// function getRandomRGBNumber() {
//     return Math.floor(Math.random() * 256);
// }


// const OPENMODALBUTTON = document.querySelector("#modal-button");
// const CLOSEMODALBUTTON = document.querySelector("#close-btn");
// const ACCEPTMODALBUTTON = document.querySelector("#accept-btn");
// const MODALEL = document.querySelector("#modal");

// OPENMODALBUTTON.addEventListener("click", openModal);
// CLOSEMODALBUTTON.addEventListener("click", closeModal);
// ACCEPTMODALBUTTON.addEventListener("click", acceptTerms);
// ACCEPTMODALBUTTON.addEventListener("click", closeModal);
// MODALEL.addEventListener("click", closeOnOverlay);

// function openModal() {
//     MODALEL.className = "modal active";
// }

// function closeModal() {
//     MODALEL.className = "modal";
// }

// function acceptTerms() {
//     console.log("accepted");
// }

// function closeOnOverlay() {
//     const cursorTarget = event.target;
//     if(cursorTarget === MODALEL) {
//         closeModal();
//     }
// }

const STARTPOPELEMENT = document.querySelector("#start-pop");
const WINDOWCONTAINERELEMENT = document.querySelector("#window-container");
const SELECTMOVEELEMENT = document.querySelector("#select-move");
const STARTPOPVALID = STARTPOPELEMENT.className === "start-pop active";
const WINDOWCONTAINERVALID = WINDOWCONTAINERELEMENT.className === "window-container active";
const SELECTMOVEVALID = SELECTMOVEELEMENT.className === "select-move active";
const BUTTONELEMENT = document.querySelector("#start-game");

const FIRST = document.querySelector("#one");
const SECOND = document.querySelector("#two");
const THIRD = document.querySelector("#three");
const FOURTH = document.querySelector("#four");
const FIFTH = document.querySelector("#five");
const SIXTH = document.querySelector("#six");
const SEVENTH = document.querySelector("#seven");
const EIGHTH = document.querySelector("#eight");
const NINETH = document.querySelector("#nine");

BUTTONELEMENT.addEventListener("click", startGame);

openPage();

function openPage() {
    const TEXTELEMENT = document.querySelector("#text");
    STARTPOPELEMENT.className = "start-pop active";
    TEXTELEMENT.innerText = "Welcome";
    BUTTONELEMENT.innerText = "START GAME";
}

function startGame() {
    STARTPOPELEMENT.className = "start-pop";
    WINDOWCONTAINERELEMENT.className = "window-container active";
    SELECTMOVEELEMENT.className = "select-move active";
}

const XMARK = document.querySelector("#x-mark");
XMARK.addEventListener('dragstart', dragStart);
XMARK.addEventListener('dragend', dragEnd);

const OMARK = document.querySelector("#o-mark");
OMARK.addEventListener('dragstart', dragStart);
OMARK.addEventListener('dragend', dragEnd);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e) {
    e.dataTransfer.getData('text/plain', e.target.id);
    e.target.classList.remove('hide');
}

const boxes = document.querySelectorAll('.grid-window');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.add('ixas');
    e.target.classList.remove('drag-over');
}

