const elements = {
    dragonHelthText: document.querySelector("#dragon-health"),
    knightHealthText: document.querySelector("#knight-health"),
    attackButton: document.querySelector("#attack-btn"),
    defendButton: document.querySelector("#defend-btn"),
    healButton: document.querySelector("#heal-btn"),
    gameLogContainer: document.querySelector("#game-log"),
    combatLog: null,
    dragonImage: document.querySelector("#dragon-image"),
    knightImage: document.querySelector("#knight-image"),
    controlsContainer: document.querySelector("#controls"),
  };
  
  const roundType = {
    attack: "attack",
    defend: "defend",
    heal: "heal",
  };
  
  const state = {
    round: 0,
    dragonHelth: 200,
    knightHealth: 100,
    update() {
      elements.dragonHelthText.textContent = state.dragonHelth;
      elements.knightHealthText.textContent = state.knightHealth;
    },
    increaseRound() {
      state.round++;
    },
  };
  
  function generateNumberTo(max) {
    return Math.ceil(Math.random() * max);
  }
  
  function playerAttack() {
    const damage = generateNumberTo(10);
    state.dragonHelth -= damage;
    state.update();
    return damage;
  }
  
  function playerDefend() {
  
  }
  
  function playerHeal() {
    const healing = generateNumberTo(30);
    const sum = state.knightHealth + healing;
    if (sum > 100) {
      state.knightHealth = 100;
    } else {
      state.knightHealth = sum;
    }
    state.update();
    return healing;
  }
  
  function dragonAttack() {
    const damage = generateNumberTo(20);
    state.knightHealth -= damage;
    state.update();
    return damage;
  }
  
  function setupCombatLog() {
    const heading = document.createElement("h2");
    heading.textContent = "Combat Log";
    elements.gameLogContainer.append(heading);
    elements.combatLog = document.createElement("ul");
    elements.combatLog.className = "combat-log";
    elements.gameLogContainer.append(elements.combatLog);
  }
  
  function writeLogToHTML(roundLog) {
    if(!elements.combatLog) {
      setupCombatLog();
    }
    const liElement = document.createElement("li");
    const titleElement = document.createElement("span");
    const titleBoldElement = document.createElement("b");
    const playerInfoElement = document.createElement("span");
    const dragonInfoElement = document.createElement("span");
  
    titleElement.append(titleBoldElement);
    titleBoldElement.textContent = `Round ${state.round}`;
    playerInfoElement.textContent = roundLog.playerText;
    dragonInfoElement.textContent = roundLog.dragonText;
    liElement.append(titleElement, playerInfoElement, dragonInfoElement);
    elements.combatLog.append(liElement);
  }
  
  function checkIfEndOfGame() {
    if(state.knightHealth <= 0) {
      elements.knightImage.remove();
      elements.controlsContainer.remove();
      return;
    } else if(state.dragonHelth <= 0) {
      elements.dragonImage.remove();
      elements.controlsContainer.remove();
    }
  }
  
  function playRound(type) {
    state.increaseRound();
    const log = {
      playerText: null,
      dragonText: null,
    };
  
    switch (type) {
      case roundType.attack:
        const damage = playerAttack();
        log.playerText = `Player used attack and dealt ${damage} damage.`;
        break;
  
      case roundType.defend:
  
        break;
  
      case roundType.heal:
        const healing = playerHeal();
        log.playerText = `Knight used heal and received ${healing} health.`;
    }
  
    const damage = dragonAttack();
    log.dragonText = `Dragon attacks and deals ${damage} damage to the knight.`;
    writeLogToHTML(log);
    checkIfEndOfGame();
  }
  
  elements.attackButton.addEventListener("click", function () {
    playRound(roundType.attack);
  });
  
  elements.defendButton.addEventListener("click", function () {
    playRound(roundType.defend);
  });
  
  elements.healButton.addEventListener("click", function () {
    playRound(roundType.heal);
  });