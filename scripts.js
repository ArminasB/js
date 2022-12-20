const gameScreenEl = document.querySelector("#game-screen");
const endGameScreenEl = document.querySelector("#end-game-screen");
const combatLogEl = document.querySelector("#combat-log");
const combatLogOff = combatLogEl.style.display = "none";
const siavaWinnerEl = document.querySelector("#co-op-winner");
const palyerWinnerEl = document.querySelector("#player-winner");
const siavaHealthEl = document.querySelector("#siava-hp");
const playerHealthEl = document.querySelector("#player-hp");
const attackButtonEl = document.querySelector("#attack-button");
const defendButtonEl = document.querySelector("#defend-button");
const healButtonEl = document.querySelector("#heal-button");
const healErrorEl = document.querySelector("#heal-error");
const attackErrorEl = document.querySelector("#attack-error");
let round = 1;

let isPlayerDefending;
let isSiavaDefending;

attackButtonEl.addEventListener("click", attackMove);
defendButtonEl.addEventListener("click", defendMove);
healButtonEl.addEventListener("click", healMove);

function showPlayerWinner() {
    gameScreenEl.style.display = "none";
    endGameScreenEl.style.display = "block";
    palyerWinnerEl.style.display = "block";
}

function showSiavaWinner() {
    gameScreenEl.style.display = "none";
    endGameScreenEl.style.display = "block";
    siavaWinnerEl.style.display = "block";
}

function removeError() {
    healErrorEl.style.display = "none";
    attackErrorEl.style.display = "none";
}

function countNumber(num1) {
    const randomNumber = Math.ceil(Math.random() * num1);
    return randomNumber;
}

function chanceOfNoDamage() {
    const miss = countNumber(100);
    return miss;
}

function criticalHitChance() {
    const criticalHit = countNumber(10);
    return criticalHit;
}

function isNotTrippleDamage(turn) {
    const countIfTripple = turn % 3;
    return countIfTripple;
}

function checkIfEndGame() {
    if (Number(siavaHealthEl.textContent) <= 0) {
        showPlayerWinner();
        return;
    }

    if (Number(playerHealthEl.textContent) <= 0) {
        showSiavaWinner();
        return;
    }

    if (round === 30) {
        showSiavaWinner();
        return;
    }
}

function siavaMove() {
    if (isPlayerDefending) {
        const siavaDamage = 0;
        return siavaDamage;
    }

    if (2 > criticalHitChance()) {
        const siavaDamage = countNumber(10) * 2 * 2;
        playerHealthEl.textContent = Number(playerHealthEl.textContent) - siavaDamage;
        return siavaDamage;
    }
    const siavaDamage = countNumber(10) * 2;
    playerHealthEl.textContent = Number(playerHealthEl.textContent) - siavaDamage;
    return siavaDamage;
}

function siavaMoveIfNotDead(damage) {
    siavaHealthEl.textContent = Number(siavaHealthEl.textContent) - damage;
    if (Number(siavaHealthEl.textContent) <= 0) {
        showPlayerWinner();
    } else {
        const siavaDamage = siavaMove();
        return siavaDamage;
    }
}

function combatLog(move, sum, critical, siavaDmg) {
    if (combatLogOff) {
        combatLogEl.style.display = "block";
    }
    const combatTurnContainer = document.createElement("div")
    combatTurnContainer.classList.add("turn-log");
    const roundNum = document.createElement("p");
    roundNum.textContent = `Round: ${round}`;
    round = ++round;
    const playerDamageLog = document.createElement("p");
    if (move === "attack" && critical) {
        playerDamageLog.textContent = textContent = `You used ${move} and dealt ${sum} damage. It was a critical hit.`;
    } else if (move === "attack") {
        playerDamageLog.textContent = textContent = `You used ${move} and dealt ${sum} damage.`;
    } else if (move === "defend") {
        playerDamageLog.textContent = textContent = `You used ${move}.`;
    } else if (move === "heal") {
        playerDamageLog.textContent = textContent = `You used ${move}. You recovered ${sum}`;
    }
    const siavaDamageLog = document.createElement("p");
    siavaDamageLog.textContent = `Siava dealt ${siavaDmg} damage`
    combatTurnContainer.append(roundNum, playerDamageLog, siavaDamageLog);
    combatLogEl.append(combatTurnContainer);
}

function attackMove() {

    removeError();
    if (isSiavaDefending) {
        attackErrorEl.style.display = "block";
    } else if (34 > chanceOfNoDamage()) {
        isPlayerDefending = false;
        isSiavaDefending = true;
        const siavaDamage = siavaMove();
        combatLog("attack", 0, false, siavaDamage);
    } else if (!isNotTrippleDamage(round)) {
        isPlayerDefending = false;
        const playerDamageSum = countNumber(10) * 3;
        const siavaDamage = siavaMoveIfNotDead(playerDamageSum);
        combatLog("attack", playerDamageSum, false, siavaDamage);
    } else {
        if (4 > criticalHitChance()) {
            if (isPlayerDefending) {
                isPlayerDefending = false;
                playerDamageSum = countNumber(10) * 2;
                const siavaDamage = siavaMoveIfNotDead(playerDamageSum);
                combatLog("attack", playerDamageSum, true, siavaDamage);
            } else {
                const playerDamageSum = countNumber(10) * 2;
                const siavaDamage = siavaMoveIfNotDead(playerDamageSum);
                combatLog("attack", playerDamageSum, true, siavaDamage);
            }
        } else {
            if (isPlayerDefending) {
                isPlayerDefending = false;
                const playerDamageSum = countNumber(10) * 2;
                const siavaDamage = siavaMoveIfNotDead(playerDamageSum)
                combatLog("attack", playerDamageSum, false, siavaDamage);
            } else {
                const playerDamageSum = countNumber(10);
                const siavaDamage = siavaMoveIfNotDead(playerDamageSum)
                combatLog("attack", playerDamageSum, false, siavaDamage);
            }
        }
    }
    checkIfEndGame();
}

function defendMove() {
    removeError();
    isPlayerDefending = true;
    isSiavaDefending = false;
    const siavaDamage = siavaMove();
    combatLog("defend", undefined, false, siavaDamage);
    checkIfEndGame();
}

function healMove() {
    removeError();
    isPlayerDefending = false;
    isSiavaDefending = false;
    if (Number(playerHealthEl.textContent) >= 100) {
        healErrorEl.style.display = "block";
    } else {
        const playerHealSum = countNumber(30);
        playerHealthEl.textContent = Number(playerHealthEl.textContent) + playerHealSum;
        const siavaDamage = siavaMove();
        combatLog("heal" , playerHealSum, false, siavaDamage);
        checkIfEndGame();
    }
}
