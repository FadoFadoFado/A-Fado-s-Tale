// For Main Menu Page

const startButton = document.getElementById("startGame");
if (startButton) {
  startButton.addEventListener("click", function () {
    window.location.href = "livingroom.html";
  });
}

// Options and Controls Button (from Main Menu)
const optionsButton = document.getElementById("options");
if (optionsButton) {
  optionsButton.addEventListener("click", function () {
    window.location.href = "options.html";
  });
}

// Saves Button (from Main Menu)
const savesButton = document.getElementById("saves");
if (savesButton) {
  savesButton.addEventListener("click", function () {
    window.location.href = "saves.html";
  });
}

// Back to Menu Button for options in main menu
const backButton = document.getElementById("backButton");
if (backButton) {
  backButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

// Back to Menu Button for saves in main menu
const backToMenu = document.getElementById("backToMenu");
if (backToMenu) {
  backToMenu.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

//Exit button for main menu
const exitButton = document.getElementById("exit");
if (exitButton) {
  exitButton.addEventListener("click", function () {
    if (
      confirm(
        "Are you sure you want to exit the game? Please close the tab to exit the game."
      )
    ) {
      window.close();
    }
  });
}

// living room/ cutscene
if (document.querySelector(".livingroom-container")) {
  window.addEventListener("load", function () {
    const stormSound = document.getElementById("stormSound");
    const exclamation = document.getElementById("exclamation");
    const dialogueBox = document.getElementById("dialogueBox");
    const dialogueText = document.getElementById("dialogueText");
    const nextButton = document.getElementById("nextButton");
    const choiceContainer = document.getElementById("choiceContainer");
    const bedroomChoice = document.getElementById("bedroomChoice");
    const basementChoice = document.getElementById("basementChoice");

    // Shows the exclamation mark after 2 seconds
    setTimeout(function () {
      if (stormSound) {
        stormSound.volume = 0.3;
        stormSound.play();
      }
      if (exclamation) {
        exclamation.style.display = "block";
      }
    }, 2000);

    // When the exclamation mark is clicked, then it shows the dialogue box
    if (exclamation) {
      exclamation.addEventListener("click", function () {
        exclamation.style.display = "none"; // Hides the exclamation mark
        dialogueBox.style.display = "block"; // Shows the dialogue box
      });
    }

    // When the "Next" button is clicked, replaces text with choices
    if (nextButton) {
      nextButton.addEventListener("click", function () {
        dialogueText.innerText = "Where should I hide?";
        nextButton.style.display = "none";
        choiceContainer.style.display = "block";
      });
    }

    // Event listeners for choices
    if (bedroomChoice) {
      bedroomChoice.addEventListener("click", function () {
        window.location.href = "hidingbedroom.html"; // Redirects to bedroom
      });
    }

    if (basementChoice) {
      basementChoice.addEventListener("click", function () {
        window.location.href = "hidingbasement.html"; // Redirects to basement
      });
    }
  });
}

//bedroom cutscene//

if (document.querySelector(".bedroom-container")) {
  window.addEventListener("load", function () {
    const locationStormSound = document.getElementById("locationStormSound");
    const locationDialogueBox = document.getElementById("locationDialogueBox");
    const locationNextButton = document.getElementById("locationNextButton");

    if (locationDialogueBox) {
      locationDialogueBox.style.display = "none";
    }

    setTimeout(function () {
      if (locationStormSound) {
        locationStormSound.volume = 0.3;
        locationStormSound.play();

        locationStormSound.addEventListener("ended", function () {
          if (locationDialogueBox) {
            locationDialogueBox.style.display = "block";
          }
        });
      }
    }, 2000);

    if (locationNextButton) {
      locationNextButton.addEventListener("click", function () {
        window.location.href = "livingroommain.html";
      });
    }
  });
}

// Basement cutscene
if (document.querySelector(".basement-container")) {
  window.addEventListener("load", function () {
    const locationStormSound = document.getElementById("locationStormSound");
    const locationDialogueBox = document.getElementById("locationDialogueBox");
    const locationNextButton = document.getElementById("locationNextButton");

    if (locationDialogueBox) {
      locationDialogueBox.style.display = "none";
    }

    setTimeout(function () {
      if (locationStormSound) {
        locationStormSound.volume = 0.3;
        locationStormSound.play();

        locationStormSound.addEventListener("ended", function () {
          if (locationDialogueBox) {
            locationDialogueBox.style.display = "block";
          }
        });
      }
    }, 2000);

    if (locationNextButton) {
      locationNextButton.addEventListener("click", function () {
        window.location.href = "livingroommain.html";
      });
    }
  });
}

function updateOutsideOption() {
  const optionOutside = document.getElementById("optionOutside");
  if (optionOutside) {
    let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");
    console.log("Current inventory on livingroommain:", inventory);
    if (inventory.food && inventory.weapon && inventory.collectable) {
      optionOutside.disabled = false;
      optionOutside.innerText = "Go Outside";
      optionOutside.addEventListener("click", function () {
        window.location.href = "outside.html"; // Placeholder for future implementation
      });
    } else {
      optionOutside.disabled = true;
      optionOutside.innerText = "Go Outside (Locked)";
    }
  }
}

// Living Room Main Page
if (document.getElementById("locationDialogueBox")) {
  // Force the dialogue box to show if on livingroommain.html
  const dialogueBox = document.getElementById("locationDialogueBox");
  if (dialogueBox) {
    dialogueBox.style.display = "block";
  }

  const optionKitchen = document.getElementById("optionKitchen");
  const optionBasement = document.getElementById("optionBasement");
  const optionBedroom = document.getElementById("optionBedroom");

  if (optionKitchen) {
    optionKitchen.addEventListener("click", function () {
      window.location.href = "kitchen.html";
    });
  }

  if (optionBasement) {
    optionBasement.addEventListener("click", function () {
      window.location.href = "basement.html";
    });
  }

  if (optionBedroom) {
    optionBedroom.addEventListener("click", function () {
      window.location.href = "bedroom.html";
    });
  }

  updateOutsideOption();
}

window.addEventListener("load", function () {
  // Determine which location page we're on by checking document.title
  const returnButton = document.getElementById("locationReturnButton");
  let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");

  if (document.title === "Kitchen") {
    inventory.food = "starter food";
    localStorage.setItem("inventory", JSON.stringify(inventory));
    if (returnButton) {
      returnButton.addEventListener("click", function () {
        window.location.href = "livingroommain.html";
      });
    }
  }

  if (document.title === "Basement") {
    inventory.weapon = "starter weapon";
    localStorage.setItem("inventory", JSON.stringify(inventory));
    if (returnButton) {
      returnButton.addEventListener("click", function () {
        window.location.href = "livingroommain.html";
      });
    }
  }

  if (document.title === "Bedroom") {
    inventory.collectable = "collectible";
    localStorage.setItem("inventory", JSON.stringify(inventory));
    if (returnButton) {
      returnButton.addEventListener("click", function () {
        window.location.href = "livingroommain.html";
      });
    }
  }
});

// Outside Page
document.addEventListener("DOMContentLoaded", function () {
  const outsideContainer1 = document.getElementById("outsideContainer1");
  const outsideContainer2 = document.getElementById("outsideContainer2");
  const nextButton1 = document.getElementById("nextButton1");
  const nextButton2 = document.getElementById("nextButton2");

  if (outsideContainer1) {
    outsideContainer1.style.display = "block";
    const dialogueBox1 = outsideContainer1.querySelector(".dialogue-box");
    if (dialogueBox1) dialogueBox1.style.display = "block";
  }
  if (outsideContainer2) {
    outsideContainer2.style.display = "none";
    const dialogueBox2 = outsideContainer2.querySelector(".dialogue-box");
    if (dialogueBox2) dialogueBox2.style.display = "none";
  }

  if (nextButton1) {
    nextButton1.addEventListener("click", function () {
      if (outsideContainer1) outsideContainer1.style.display = "none";
      if (outsideContainer2) {
        outsideContainer2.style.display = "block";
        const dialogueBox2 = outsideContainer2.querySelector(".dialogue-box");
        if (dialogueBox2) dialogueBox2.style.display = "block";
      }
    });
  }

  if (nextButton2) {
    nextButton2.addEventListener("click", function () {
      if (outsideContainer2) outsideContainer2.style.display = "none";
      triggerQTE(); // Start the Quick Time Event
    });
  }
});

// Quick Time Event (QTE)
function triggerQTE() {
  const qteContainer = document.createElement("div");
  qteContainer.id = "qteContainer";
  Object.assign(qteContainer.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0,0,0,0.8)",
    padding: "20px",
    border: "3px solid white",
    borderRadius: "10px",
    zIndex: "200",
    textAlign: "center",
  });

  const instructionText = document.createElement("p");
  instructionText.style.color = "white";
  instructionText.style.fontSize = "1.2rem";
  instructionText.innerText =
    "Press SPACE or touch the screen now! (1% chance of success)";

  const barContainer = document.createElement("div");
  Object.assign(barContainer.style, {
    width: "300px",
    height: "30px",
    border: "2px solid white",
    margin: "10px auto",
  });

  const bar = document.createElement("div");
  Object.assign(bar.style, {
    width: "100%",
    height: "100%",
    background: "green",
  });
  barContainer.appendChild(bar);

  const countdownText = document.createElement("p");
  countdownText.style.color = "white";
  countdownText.style.fontSize = "1.5rem";
  countdownText.innerText = "5.0"; // 5 seconds

  qteContainer.appendChild(instructionText);
  qteContainer.appendChild(barContainer);
  qteContainer.appendChild(countdownText);

  document.body.appendChild(qteContainer);

  let timeLeft = 5.0;
  const totalTime = 5.0;
  const interval = setInterval(function () {
    timeLeft -= 0.1;
    if (timeLeft < 0) timeLeft = 0;
    countdownText.innerText = timeLeft.toFixed(1);
    bar.style.width = (timeLeft / totalTime) * 100 + "%";

    if (timeLeft <= 0) {
      clearInterval(interval);
      document.body.removeChild(qteContainer);
      showFailureDialogue();
    }
  }, 100);

  let qteKeyPressed = false;
  function qteHandler(e) {
    if (e.code === "Space" && !qteKeyPressed && timeLeft > 0) {
      qteKeyPressed = true;
      clearInterval(interval);
      document.removeEventListener("keydown", qteHandler);
      document.removeEventListener("touchstart", touchHandler);
      document.body.removeChild(qteContainer);
      if (Math.random() < 0.01) {
        showSuccessDialogue();
      } else {
        showFailureDialogue();
      }
    }
  }

  function touchHandler(e) {
    if (!qteKeyPressed && timeLeft > 0) {
      qteKeyPressed = true;
      clearInterval(interval);
      document.removeEventListener("keydown", qteHandler);
      document.removeEventListener("touchstart", touchHandler);
      document.body.removeChild(qteContainer);
      if (Math.random() < 0.01) {
        showSuccessDialogue();
      } else {
        showFailureDialogue();
      }
    }
  }

  document.addEventListener("keydown", qteHandler);
  document.addEventListener("touchstart", touchHandler);
}

// Failure Dialogue (Leads to forest1.html)
function showFailureDialogue() {
  const failureDialogue = document.createElement("div");
  failureDialogue.id = "failureDialogue";
  Object.assign(failureDialogue.style, {
    position: "fixed",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,0.8)",
    padding: "20px",
    border: "3px solid white",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: "300",
  });

  const failureText = document.createElement("p");
  Object.assign(failureText.style, {
    color: "white",
    fontSize: "1.5rem",
  });
  failureText.innerText = "Oh no, the dog has ran away. We need go after him.";

  const failureNextButton = document.createElement("button");
  failureNextButton.style.backgroundColor = "#fff";
  failureNextButton.style.color = "#000";
  failureNextButton.style.border = "none";
  failureNextButton.style.padding = "10px 20px";
  failureNextButton.style.cursor = "pointer";
  failureNextButton.style.fontSize = "1rem";
  failureNextButton.style.fontWeight = "bold";
  failureNextButton.style.borderRadius = "5px";
  failureNextButton.innerText = "NEXT";
  failureNextButton.style.marginTop = "10px";

  failureDialogue.appendChild(failureText);
  failureDialogue.appendChild(failureNextButton);
  document.body.appendChild(failureDialogue);

  failureNextButton.addEventListener("click", function () {
    window.location.href = "forest1.html";
  });
}

// Success Dialogue (1% Secret Ending, Returns to index.html)
function showSuccessDialogue() {
  const successDialogue = document.createElement("div");
  successDialogue.id = "successDialogue";
  Object.assign(successDialogue.style, {
    position: "fixed",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,0.8)",
    padding: "20px",
    border: "3px solid white",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: "300",
  });

  const successText = document.createElement("p");
  Object.assign(successText.style, {
    color: "white",
    fontSize: "1.5rem",
  });
  successText.innerText =
    "Congratulations, you caught the dog! (Secret Ending)";

  const successNextButton = document.createElement("button");
  successNextButton.style.backgroundColor = "#fff";
  successNextButton.style.color = "#000";
  successNextButton.style.border = "none";
  successNextButton.style.padding = "10px 20px";
  successNextButton.style.cursor = "pointer";
  successNextButton.style.fontSize = "1rem";
  successNextButton.style.fontWeight = "bold";
  successNextButton.style.borderRadius = "5px";
  successNextButton.innerText = "NEXT";
  successNextButton.style.marginTop = "10px";

  successDialogue.appendChild(successText);
  successDialogue.appendChild(successNextButton);
  document.body.appendChild(successDialogue);

  successNextButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

//  Game Functionality
document.addEventListener("DOMContentLoaded", function () {
  let storedHealth = localStorage.getItem("playerHealth");
  let health = storedHealth !== null ? parseFloat(storedHealth) : 100;

  let food = 100;
  let water = 100;

  const healthFill = document.getElementById("healthFill");
  const foodFill = document.getElementById("foodFill");
  const waterFill = document.getElementById("waterFill");

  function updateBars() {
    if (healthFill) {
      healthFill.style.width = health + "%";

      healthFill.style.backgroundColor = health < 30 ? "red" : "green";
    }
    if (foodFill) foodFill.style.width = food + "%";
    if (waterFill) waterFill.style.width = water + "%";
  }
  updateBars();

  setInterval(function () {
    // Deplete food and water slowly
    if (food > 0) {
      food -= 0.5;
      if (food < 0) food = 0;
    }
    if (water > 0) {
      water -= 0.5;
      if (water < 0) water = 0;
    }

    if (food === 0 && water === 0) {
      if (health > 0) health -= 2;
    } else if (food === 0 || water === 0) {
      if (health > 0) health -= 1;
    }

    updateBars();

    localStorage.setItem("playerHealth", health);
  }, 5000);

  // Pause Menu
  const menuButton = document.getElementById("menuButton");
  const pauseMenu = document.getElementById("pauseMenu");
  const resumeButton = document.getElementById("resumeButton");
  const quitButton = document.getElementById("quitButton");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      pauseMenu.style.display = "flex";
    });
  }
  if (resumeButton) {
    resumeButton.addEventListener("click", function () {
      pauseMenu.style.display = "none";
    });
  }
  if (quitButton) {
    quitButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  // Inventory
  const inventoryOverlay = document.getElementById("inventoryOverlay");
  const closeInventory = document.getElementById("closeInventory");
  function updateInventoryOverlay() {
    let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");
    let content = "";
    if (inventory.food) content += "Food: " + inventory.food + "\n";
    if (inventory.weapon) content += "Weapon: " + inventory.weapon + "\n";
    if (inventory.collectable)
      content += "Collectable: " + inventory.collectable + "\n";
    if (inventory.gunpowder)
      content += "Gunpowder: " + inventory.gunpowder + "\n";
    if (inventory.iron) content += "Iron: " + inventory.iron + "\n";
    if (inventory.stone) content += "Stone: " + inventory.stone + "\n";
    if (
      !inventory.food &&
      !inventory.weapon &&
      !inventory.collectable &&
      !inventory.iron &&
      !inventory.stone
    ) {
      content += "Empty";
    }
    const inventoryContent = document.getElementById("inventoryContent");
    if (inventoryContent) {
      inventoryContent.innerText = content;
    }
  }

  function toggleInventory() {
    if (inventoryOverlay.style.display === "flex") {
      inventoryOverlay.style.display = "none";
    } else {
      updateInventoryOverlay();
      inventoryOverlay.style.display = "flex";
    }
  }
  if (closeInventory) {
    closeInventory.addEventListener("click", function () {
      inventoryOverlay.style.display = "none";
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "i" || e.key === "I") {
      toggleInventory();
    }
    if (e.key === "Escape") {
      pauseMenu.style.display = "flex";
    }
  });

  console.log("Forest2 global game code loaded. Current health:", health);
});

document.addEventListener("DOMContentLoaded", function () {
  let inventoryButton = document.getElementById("effectsButton");

  if (inventoryButton) {
    inventoryButton.innerText = "Inventory";

    let newInventoryButton = inventoryButton.cloneNode(true);
    inventoryButton.parentNode.replaceChild(
      newInventoryButton,
      inventoryButton
    );

    newInventoryButton.addEventListener("click", function () {
      const inventoryOverlay = document.getElementById("inventoryOverlay");
      if (inventoryOverlay) {
        if (inventoryOverlay.style.display === "flex") {
          inventoryOverlay.style.display = "none";
        } else {
          updateInventoryOverlay(); // Ensure inventory is updated before showing
          inventoryOverlay.style.display = "flex";
        }
      }
    });
  } else {
    console.log("No inventory button found");
  }
});

function updateInventoryOverlay() {
  let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");
  let content = "";

  if (inventory.food) content += `Food: ${inventory.food}\n`;
  if (inventory.weapon) content += `Weapon: ${inventory.weapon}\n`;
  if (inventory.collectable)
    content += `Collectable: ${inventory.collectable}\n`;
  if (inventory.gunpowder) content += `Gunpowder: ${inventory.gunpowder}\n`;
  if (inventory.iron) content += `Iron: ${inventory.iron}\n`;
  if (inventory.stone) content += `Stone: ${inventory.stone}\n`;

  if (!content) content = "Your inventory is empty.";

  const inventoryContent = document.getElementById("inventoryContent");
  if (inventoryContent) {
    inventoryContent.textContent = content;
  }
}

// Battle Encounter Functionality
if (document.getElementById("battleContainer")) {
  const battleDialogue = document.getElementById("battleDialogue");
  if (battleDialogue) {
    battleDialogue.style.display = "block";
  }

  let storedHealth = localStorage.getItem("playerHealth");
  let playerHealth = storedHealth !== null ? parseFloat(storedHealth) : 100;
  let enemyHealth = 20; // Enemy health for this encounter

  console.log("Current document title:", document.title);
  console.log("Redirect outcome:", getBattleOutcomeRedirect());

  function getBattleOutcomeRedirect() {
    if (document.title === "Forest Scene") {
      return "forest2.html";
    } else if (document.title === "Left Encounter") {
      return "forest3.html";
    } else if (document.title === "Left Encounter 2") {
      return "right2.html";
    } else if (document.title === "Cave Encounter 1") {
      return "Cave3.html";
    } else if (document.title === "Middle Cave Encounter 1") {
      return "middlesectioncave2.html";
    } else if (document.title === "Middle Cave Encounter 2") {
      return "Lowersectioncave.html";
    } else if (document.title === "Area1") {
      return "area1puzzle.html";
    } else if (document.title === "Area2") {
      return "area2puzzle.html";
    } else if (document.title === "Area3") {
      return "area3puzzle.html";
    } else if (document.title === "Area4") {
      return "area4puzzle.html";
    } else if (document.title === "Area5") {
      return "area5puzzle.html";
    }
  }

  function updateGlobalHealthBar() {
    const globalHealthFill = document.getElementById("healthFill");
    if (globalHealthFill) {
      globalHealthFill.style.width = playerHealth + "%";
      globalHealthFill.style.backgroundColor =
        playerHealth < 30 ? "red" : "green";
    }
  }
  updateGlobalHealthBar();

  let battleState = "initial";
  const battleText = document.getElementById("battleText");
  const battleNextButton = document.getElementById("battleNextButton");

  battleNextButton.addEventListener("click", function () {
    if (battleState === "initial") {
      battleState = "encounter";
      battleText.innerText = "An enemy appears!";
      battleNextButton.style.display = "none";

      const fightButton = document.createElement("button");
      fightButton.innerText = "Fight";
      fightButton.className = "choice-button";
      const runButton = document.createElement("button");
      runButton.innerText = "Run";
      runButton.className = "choice-button";

      battleDialogue.appendChild(fightButton);
      battleDialogue.appendChild(runButton);

      fightButton.addEventListener("click", function () {
        battleState = "battle";
        fightButton.remove();
        runButton.remove();
        startBattle();
      });

      runButton.addEventListener("click", function () {
        battleDialogue.innerHTML = "";
        const runMsg = document.createElement("p");
        if (Math.random() < 0.5) {
          runMsg.innerText = "You successfully ran away!";
          battleDialogue.appendChild(runMsg);
          setTimeout(function () {
            localStorage.setItem("playerHealth", playerHealth);
            if (document.title === "Cave Encounter 2") {
              showCave4ChestDialogue();
            } else {
              window.location.href = getBattleOutcomeRedirect();
            }
          }, 2000);
        } else {
          runMsg.innerText = "Failed to run! You must fight!";
          battleDialogue.appendChild(runMsg);
          setTimeout(function () {
            startBattle();
          }, 1500);
        }
      });
    }
  });

  function startBattle() {
    battleDialogue.innerHTML = "";

    const statusText = document.createElement("p");
    statusText.id = "battleStatus";
    statusText.innerText = `Player Health: ${playerHealth} | Enemy Health: ${enemyHealth}`;
    battleDialogue.appendChild(statusText);

    const optionsDiv = document.createElement("div");
    optionsDiv.id = "battleOptions";

    const attackButton = document.createElement("button");
    attackButton.innerText = "Attack";
    attackButton.className = "choice-button";
    const battleRunButton = document.createElement("button");
    battleRunButton.innerText = "Run";
    battleRunButton.className = "choice-button";

    optionsDiv.appendChild(attackButton);
    optionsDiv.appendChild(battleRunButton);
    battleDialogue.appendChild(optionsDiv);

    attackButton.addEventListener("click", function () {
      const playerDamage = 8;
      enemyHealth -= playerDamage;
      if (enemyHealth < 0) enemyHealth = 0;
      battleDialogue.innerHTML = "";
      const attackMsg = document.createElement("p");
      attackMsg.innerText = `You hit the enemy for ${playerDamage} damage.`;
      battleDialogue.appendChild(attackMsg);
      updateBattleStatus();

      setTimeout(function () {
        if (enemyHealth <= 0) {
          attackMsg.innerText = "Enemy defeated!";
          setTimeout(function () {
            localStorage.setItem("playerHealth", playerHealth);
            if (document.title === "Cave Encounter 2") {
              showCave4ChestDialogue();
            } else {
              window.location.href = getBattleOutcomeRedirect();
            }
          }, 2000);
        } else {
          setTimeout(enemyAttack, 1000);
        }
      }, 1000);
    });

    // Run option during battle:
    battleRunButton.addEventListener("click", function () {
      battleDialogue.innerHTML = "";
      const runMsg = document.createElement("p");
      if (Math.random() < 0.4) {
        runMsg.innerText = "You successfully ran away from the battle!";
        battleDialogue.appendChild(runMsg);
        setTimeout(function () {
          localStorage.setItem("playerHealth", playerHealth);
          if (document.title === "Cave Encounter 2") {
            showCave4ChestDialogue();
          } else {
            window.location.href = getBattleOutcomeRedirect();
          }
        }, 2000);
      } else {
        runMsg.innerText = "Failed to run!";
        battleDialogue.appendChild(runMsg);
        setTimeout(enemyAttack, 1000);
      }
    });
  }

  // Function to update battle status text in the dialogue box
  function updateBattleStatus() {
    const statusText = document.getElementById("battleStatus");
    if (statusText) {
      statusText.innerText = `Player Health: ${playerHealth} | Enemy Health: ${enemyHealth}`;
    }
  }

  // Enemy attack function
  function enemyAttack() {
    const enemyDamage = 4;
    playerHealth -= enemyDamage;
    if (playerHealth < 0) playerHealth = 0;
    updateGlobalHealthBar();

    battleDialogue.innerHTML = "";
    const enemyMsg = document.createElement("p");
    enemyMsg.innerText = `The enemy hit you for ${enemyDamage} damage.`;
    battleDialogue.appendChild(enemyMsg);
    updateBattleStatus();

    if (playerHealth <= 0) {
      setTimeout(function () {
        battleDialogue.innerHTML = "";
        const deathMsg = document.createElement("p");
        deathMsg.innerText = "You have been defeated! Restarting battle...";
        battleDialogue.appendChild(deathMsg);
        setTimeout(function () {
          // Reset only on defeat
          playerHealth = 100;
          enemyHealth = 20;
          updateGlobalHealthBar();
          battleDialogue.innerHTML = "";
          startBattle();
        }, 2000);
      }, 1000);
    } else {
      setTimeout(function () {
        startBattle();
      }, 1000);
    }
  }
}

//pathway 1
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("pathDialogue")) {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    leftButton.addEventListener("click", function () {
      window.location.href = "left1.html";
    });

    rightButton.addEventListener("click", function () {
      window.location.href = "right1.html";
    });
  }
});

//right1
document.addEventListener("DOMContentLoaded", function () {
  // Parkour prompt on right1.html
  if (document.getElementById("parkourDialogue")) {
    const parkourYes = document.getElementById("parkourYes");
    const parkourNo = document.getElementById("parkourNo");

    parkourNo.addEventListener("click", function () {
      // Return to forest2.html (back to pathway dialogue)
      window.location.href = "forest2.html";
    });

    parkourYes.addEventListener("click", function () {
      // Start the parkour game
      startParkourGame();
    });
  }
});
//parkour game
function startParkourGame() {
  const parkourDialogue = document.getElementById("parkourDialogue");
  if (parkourDialogue) parkourDialogue.style.display = "none";

  const canvas = document.getElementById("parkourCanvas");
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");

  let player = {
    x: 50,
    y: canvas.height - 60,
    width: 30,
    height: 50,
    vy: 0,
    jumping: false,
  };

  let obstacles = [];
  let obstacleTimer = 0;

  let gameTime = 0;
  let gameOver = false;
  let success = false;

  document.addEventListener("keydown", function parkourKey(e) {
    if (e.code === "Space" && !player.jumping) {
      player.vy = -10;
      player.jumping = true;
    }
  });
  canvas.addEventListener(
    "pointerdown",
    function (e) {
      e.preventDefault();
      console.log("Pointer down triggered (with passive: false)");
      if (!player.jumping) {
        player.vy = -10;
        player.jumping = true;
      }
    },
    { passive: false }
  );

  function rectIntersect(r1, r2) {
    return !(
      r2.x > r1.x + r1.width ||
      r2.x + r2.width < r1.x ||
      r2.y > r1.y + r1.height ||
      r2.y + r2.height < r1.y
    );
  }

  function gameLoop() {
    if (gameOver) return;
    gameTime += 0.016;

    if (gameTime >= 15) {
      success = true;
      gameOver = true;
      obstacles = [];
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.vy += 0.5;
    player.y += player.vy;
    if (player.y + player.height > canvas.height) {
      player.y = canvas.height - player.height;
      player.vy = 0;
      player.jumping = false;
    }

    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    obstacleTimer += 0.016;
    if (obstacleTimer > 2) {
      obstacles.push({
        x: canvas.width,
        y: canvas.height - 30,
        width: 30 + Math.random() * 20,
        height: 30,
      });
      obstacleTimer = 0;
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
      let obs = obstacles[i];
      obs.x -= 3;
      ctx.fillStyle = "brown";
      ctx.fillRect(obs.x, obs.y, obs.width, obs.height);

      if (rectIntersect(player, obs)) {
        gameOver = true;
      }

      if (obs.x + obs.width < 0) {
        obstacles.splice(i, 1);
      }
    }

    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);

  function checkGameOver() {
    if (gameOver) {
      canvas.style.display = "none";
      // If the player succeeded, check if the chest was already opened.
      if (success) {
        if (localStorage.getItem("chestOpened")) {
          window.location.href = "forest2.html";
        } else {
          showChestDialogue();
        }
      } else {
        window.location.href = "forest2.html";
      }
    } else {
      setTimeout(checkGameOver, 500);
    }
  }
  setTimeout(checkGameOver, 500);
}

function showChestDialogue() {
  if (localStorage.getItem("chestOpened")) {
    window.location.href = "forest2.html";
    return;
  }

  const chestDialogue = document.createElement("div");
  chestDialogue.id = "chestDialogue";
  chestDialogue.className = "dialogue-box";
  chestDialogue.style.position = "fixed";
  chestDialogue.style.bottom = "5%";
  chestDialogue.style.left = "50%";
  chestDialogue.style.transform = "translateX(-50%)";
  chestDialogue.style.display = "block";

  const chestText = document.createElement("p");
  chestText.innerText =
    "You succeeded! A chest appears. Open it to receive food and health potions.";

  const chestButton = document.createElement("button");
  chestButton.innerText = "Open Chest";
  chestButton.className = "menu-option";

  chestDialogue.appendChild(chestText);
  chestDialogue.appendChild(chestButton);
  document.body.appendChild(chestDialogue);

  chestButton.addEventListener("click", function () {
    let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");
    inventory.food = inventory.food
      ? inventory.food + " + extra food"
      : "extra food";
    inventory.healthPotions = inventory.healthPotions
      ? inventory.healthPotions + " + health potion"
      : "health potion";
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("chestOpened", "true");
    window.location.href = "forest2.html";
  });
}

//forest3 choice
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("pathDialogue2")) {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    leftButton.addEventListener("click", function () {
      window.location.href = "left2.html";
    });

    rightButton.addEventListener("click", function () {
      window.location.href = "right2.html";
    });
  }
});

//right 2 choices
document.addEventListener("DOMContentLoaded", function () {
  // Check if the dialogue box exists
  if (document.getElementById("pathDialogue3")) {
    const leftButton = document.getElementById("leftButton");
    if (leftButton) {
      leftButton.addEventListener("click", function () {
        window.location.href = "cave.html";
      });
    }
  }

  const bridgeButton = document.getElementById("bridgebutton");
  if (bridgeButton) {
    bridgeButton.addEventListener("click", function () {
      let currentHealth =
        parseFloat(localStorage.getItem("playerHealth")) || 100;

      currentHealth -= 10;
      if (currentHealth < 0) currentHealth = 0; // Ensure health doesn't go below 0

      localStorage.setItem("playerHealth", currentHealth);

      const healthBar = document.getElementById("healthFill");
      if (healthBar) {
        healthBar.style.width = currentHealth + "%";
        healthBar.style.backgroundColor = currentHealth < 30 ? "red" : "green";
      }

      window.location.href = "middlesectioncave.html";
    });
  }
});

//cave entrance choice
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("CaveEntrance")) {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    leftButton.addEventListener("click", function () {
      window.location.href = "Cave1.html";
    });

    rightButton.addEventListener("click", function () {
      window.location.href = "right2.html";
    });
  }
});

//cave1 continue going deeper choice
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("Cave1")) {
    const leftButton = document.getElementById("leftButton");
    leftButton.addEventListener("click", function () {
      window.location.href = "Cave2.html";
    });
  }
});

// Resource Collection Minigame
document.addEventListener("DOMContentLoaded", function () {
  const collectButton = document.getElementById("collectResourcesButton");
  if (collectButton) {
    collectButton.addEventListener("click", function () {
      startResourceMinigame();
    });
  }
});

function startResourceMinigame() {
  const overlay = document.createElement("div");
  overlay.id = "resourceMinigameOverlay";
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "2000",
  });

  const instructions = document.createElement("p");
  instructions.id = "minigameInstructions";
  instructions.innerText = "Click on all dots to collect the resources";
  instructions.style.color = "white";
  instructions.style.fontSize = "1.2rem";
  instructions.style.marginBottom = "20px";
  overlay.appendChild(instructions);

  const container = document.createElement("div");
  container.id = "resourceContainer";
  Object.assign(container.style, {
    position: "relative",
    width: "80%",
    height: "80%",
    background: "#333",
    border: "3px solid white",
    borderRadius: "10px",
    overflow: "hidden",
  });
  overlay.appendChild(container);
  document.body.appendChild(overlay);

  let dotsClicked = 0;
  const totalDots = 20;

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("div");
    dot.className = "resource-dot";

    dot.style.position = "absolute";
    dot.style.width = "20px";
    dot.style.height = "20px";
    dot.style.borderRadius = "50%";
    dot.style.background = "gold";
    dot.style.cursor = "pointer";

    dot.style.left = Math.random() * 80 + "%";
    dot.style.top = Math.random() * 80 + "%";

    dot.addEventListener("click", function () {
      dot.classList.add("broken");
      setTimeout(function () {
        dot.remove();
        dotsClicked++;
        if (dotsClicked >= totalDots) {
          finishResourceMinigame();
        }
      }, 300);
    });

    container.appendChild(dot);
  }
}

function finishResourceMinigame() {
  const overlay = document.getElementById("resourceMinigameOverlay");
  if (overlay) overlay.remove();

  const caveDialogue = document.querySelector(".dialogue-box");
  if (caveDialogue) {
    caveDialogue.style.display = "none";
  }

  let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");
  let currentIron = inventory.iron ? parseInt(inventory.iron, 10) : 0;
  let currentStone = inventory.stone ? parseInt(inventory.stone, 10) : 0;
  inventory.iron = currentIron + 10;
  inventory.stone = currentStone + 10;
  localStorage.setItem("inventory", JSON.stringify(inventory));

  const successDialogue = document.createElement("div");
  successDialogue.id = "resourceSuccessDialogue";
  Object.assign(successDialogue.style, {
    position: "fixed",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,0.8)",
    padding: "20px",
    border: "3px solid white",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: "500",
  });

  const successText = document.createElement("p");
  successText.innerText = "You collected 10 iron and 10 stone!";

  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.className = "menu-option";
  nextButton.addEventListener("click", function () {
    if (document.title.includes("Cave5")) {
      window.location.href = "cave5.html";
    } else {
      window.location.href = "cave1.html";
    }
  });

  successDialogue.appendChild(successText);
  successDialogue.appendChild(nextButton);
  document.body.appendChild(successDialogue);
}

//cave3
document.addEventListener("DOMContentLoaded", function () {
  // Check for the dialogue box in cave3.html
  const pathDialogue4 = document.getElementById("pathDialogue4");
  if (pathDialogue4) {
    const leftPathButton = document.getElementById("leftPathButton");
    const rightPathButton = document.getElementById("rightPathButton");

    if (leftPathButton) {
      leftPathButton.addEventListener("click", function () {
        // For left, go to cave4.html (enemy fight and chest reward)
        window.location.href = "Cave4.html";
      });
    }

    if (rightPathButton) {
      rightPathButton.addEventListener("click", function () {
        // For right, go to cave5.html (deadend with crafting)
        window.location.href = "Cave5.html";
      });
    }
  }
});

//crafting
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded. URL:", document.location.href);

  console.log("Attaching crafting events...");

  const craftingButton = document.getElementById("craftingButton");
  const craftingOverlay = document.getElementById("craftingOverlay");
  const closeCrafting = document.getElementById("closeCrafting");
  const craftBombButton = document.getElementById("craftBombButton");
  const craftingWarning = document.getElementById("craftingWarning");
  const explodeButton = document.getElementById("explodeButton");

  console.log("craftingButton:", craftingButton);
  console.log("craftingOverlay:", craftingOverlay);
  console.log("closeCrafting:", closeCrafting);
  console.log("craftBombButton:", craftBombButton);
  console.log("explodeButton:", explodeButton);

  function openCraftingOverlay() {
    if (craftingWarning) {
      craftingWarning.innerText = "";
    }
    if (craftingOverlay) {
      craftingOverlay.style.display = "flex";
      console.log("Opened crafting overlay");
    }
  }

  function closeCraftingOverlay() {
    if (craftingOverlay) {
      craftingOverlay.style.display = "none";
      console.log("Closed crafting overlay");
    }
  }

  if (craftingButton) {
    craftingButton.addEventListener("click", function () {
      console.log("Crafting button clicked");
      openCraftingOverlay();
    });
  } else {
    console.log("craftingButton not found");
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "c" || e.key === "C") {
      console.log("C key pressed, opening crafting overlay");
      openCraftingOverlay();
    }
  });

  if (closeCrafting) {
    closeCrafting.addEventListener("click", function () {
      console.log("Close crafting button clicked");
      closeCraftingOverlay();
    });
  } else {
    console.log("closeCrafting not found");
  }

  if (craftBombButton) {
    craftBombButton.addEventListener("click", function () {
      console.log("Craft Bomb button clicked");
      let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");
      let gunpowder = inventory.gunpowder
        ? parseInt(inventory.gunpowder, 10)
        : 0;
      let iron = inventory.iron ? parseInt(inventory.iron, 10) : 0;
      let missing = [];

      if (gunpowder < 15) {
        missing.push("Gunpowder (" + (15 - gunpowder) + " more needed)");
      }
      if (iron < 10) {
        missing.push("Iron (" + (10 - iron) + " more needed)");
      }

      if (missing.length > 0) {
        if (craftingWarning) {
          craftingWarning.innerText = "Missing: " + missing.join(", ");
        }
        console.log("Missing resources:", missing);
      } else {
        inventory.gunpowder = gunpowder - 15;
        inventory.iron = iron - 10;
        if (inventory.bomb) {
          inventory.bomb = parseInt(inventory.bomb, 10) + 1;
        } else {
          inventory.bomb = 1;
        }
        localStorage.setItem("inventory", JSON.stringify(inventory));
        closeCraftingOverlay();
        if (explodeButton) {
          explodeButton.disabled = false;
          explodeButton.innerText = "Explode Deadend";
        }
        console.log("Bomb crafted. Inventory updated:", inventory);
        alert("Bomb crafted! Now you can explode the deadend.");
      }
    });
  } else {
    console.log("craftBombButton not found");
  }

  if (explodeButton) {
    explodeButton.addEventListener("click", function () {
      console.log("Explode button clicked");
      let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");
      let bombCount = inventory.bomb ? parseInt(inventory.bomb, 10) : 0;
      if (bombCount > 0) {
        inventory.bomb = bombCount - 1;
        localStorage.setItem("inventory", JSON.stringify(inventory));
        window.location.href = "middlesectioncave.html";
      } else {
        alert("You don't have a bomb!");
      }
    });
  } else {
    console.log("explodeButton not found");
  }
  // }
});

document.addEventListener("DOMContentLoaded", function () {
  const goBackButton = document.getElementById("goBackButton");
  if (goBackButton) {
    goBackButton.addEventListener("click", function () {
      // Redirect to your desired page, e.g., forest2.html
      window.location.href = "cave3.html";
    });
  } else {
    console.error("goBackButton not found");
  }
});

//chest2
function showCave4ChestDialogue() {
  const battleDialogue = document.getElementById("battleDialogue");
  if (battleDialogue) {
    battleDialogue.style.display = "none";
  }

  const chestDialogue = document.createElement("div");
  chestDialogue.id = "cave4ChestDialogue";
  Object.assign(chestDialogue.style, {
    position: "fixed",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,0.8)",
    padding: "20px",
    border: "3px solid white",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: "300",
  });

  const chestText = document.createElement("p");
  chestText.innerText =
    "You defeated the enemy! A chest appears. Open it to receive 10 food and 15 gunpowder.";

  const chestButton = document.createElement("button");
  chestButton.innerText = "Open Chest";
  chestButton.className = "choice-button";
  chestButton.addEventListener("click", function () {
    let inventory = JSON.parse(localStorage.getItem("inventory") || "{}");
    inventory.food = inventory.food ? parseInt(inventory.food, 10) + 10 : 10;
    inventory.gunpowder = inventory.gunpowder
      ? parseInt(inventory.gunpowder, 10) + 15
      : 15;
    localStorage.setItem("inventory", JSON.stringify(inventory));
    window.location.href = "cave3.html";
  });

  chestDialogue.appendChild(chestText);
  chestDialogue.appendChild(chestButton);
  document.body.appendChild(chestDialogue);
}

//middle cave choice 1
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("MiddleCave")) {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    leftButton.addEventListener("click", function () {
      window.location.href = "MiddleCaveLeft1.html";
    });

    rightButton.addEventListener("click", function () {
      window.location.href = "MiddleCaveRight1.html";
    });
  }
});

//after right battle choice
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("MiddleCave1")) {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    leftButton.addEventListener("click", function () {
      window.location.href = "MiddleCaveBattle.html";
    });

    rightButton.addEventListener("click", function () {
      window.location.href = "MiddleCaveBattle.html";
    });
  }
});

//middle section cave left pathway leading to ancient house
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("MiddleCaveLeft")) {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    leftButton.addEventListener("click", function () {
      window.location.href = "ancienthouse.html";
    });

    rightButton.addEventListener("click", function () {
      window.location.href = "Middlesectioncave.html";
    });
  }
});

// Ancient House

function checkAncientHousePuzzles() {
  const doorButton = document.getElementById("doorButton");
  let p1 = localStorage.getItem("puzzle1Complete");
  let p2 = localStorage.getItem("puzzle2Complete");
  let p3 = localStorage.getItem("puzzle3Complete");
  if (doorButton) {
    if (p1 && p2 && p3) {
      doorButton.disabled = false;
      doorButton.innerText = "Go Through Door";
    } else {
      doorButton.disabled = true;
      doorButton.innerText = "Go Through Door (Locked)";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("ancientHouseDialogue")) {
    document
      .getElementById("puzzle1Button")
      .addEventListener("click", function () {
        window.location.href = "puzzle1.html";
      });
    document
      .getElementById("puzzle2Button")
      .addEventListener("click", function () {
        window.location.href = "puzzle2.html";
      });
    document
      .getElementById("puzzle3Button")
      .addEventListener("click", function () {
        window.location.href = "puzzle3.html";
      });
    document
      .getElementById("doorButton")
      .addEventListener("click", function () {
        window.location.href = "lowersectioncave.html";
      });
    // Check puzzle completion on load
    checkAncientHousePuzzles();
  }
});

// Puzzle Success Dialogue
function showPuzzleSuccessDialogue(message, callback) {
  const dialogue = document.createElement("div");
  dialogue.id = "puzzleSuccessDialogue";
  Object.assign(dialogue.style, {
    position: "fixed",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,0.8)",
    padding: "20px",
    border: "3px solid white",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: "600",
  });
  const msg = document.createElement("p");
  msg.innerText = message;
  msg.style.color = "white";
  msg.style.fontSize = "1.2rem";
  const btn = document.createElement("button");
  btn.innerText = "Next";
  btn.className = "menu-option";
  btn.addEventListener("click", function () {
    dialogue.remove();
    if (callback) callback();
  });
  dialogue.appendChild(msg);
  dialogue.appendChild(btn);
  document.body.appendChild(dialogue);
}

// Puzzle 1: Color Memory Puzzle
function startPuzzle1() {
  let existingOverlay = document.getElementById("puzzle1Overlay");
  if (existingOverlay) {
    existingOverlay.remove();
  }

  const overlay = document.createElement("div");
  overlay.id = "puzzle1Overlay";
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "500",
  });
  document.body.appendChild(overlay);

  const instruction = document.createElement("p");
  instruction.id = "puzzle1Instruction";
  instruction.style.color = "white";
  instruction.style.fontSize = "1.2rem";
  instruction.innerText = "Watch the sequence.";
  overlay.appendChild(instruction);

  const buttonContainer = document.createElement("div");
  buttonContainer.id = "puzzle1Buttons";
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "10px";
  overlay.appendChild(buttonContainer);

  const colors = ["red", "blue", "green", "yellow"];
  let colorButtons = {};
  colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.className = "colorButton";
    btn.id = color + "Btn";
    btn.style.background = color;
    btn.style.width = "80px";
    btn.style.height = "80px";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";
    buttonContainer.appendChild(btn);
    colorButtons[color] = btn;
  });

  const roundInfo = document.createElement("p");
  roundInfo.id = "puzzle1RoundInfo";
  roundInfo.style.color = "white";
  roundInfo.style.marginTop = "10px";
  overlay.appendChild(roundInfo);

  let currentRound = 1;
  const totalRounds = 5;
  let sequence = [];
  let userInput = [];
  let inputEnabled = false;

  function generateSequence() {
    sequence.push(colors[Math.floor(Math.random() * colors.length)]); // Add one more color each round
  }

  function flashSequence() {
    inputEnabled = false;
    let i = 0;

    function flashNext() {
      if (i < sequence.length) {
        const color = sequence[i];
        const btn = colorButtons[color];

        btn.classList.add("flash");
        setTimeout(() => {
          btn.classList.remove("flash");
          i++;
          setTimeout(flashNext, 500);
        }, 500);
      } else {
        instruction.innerText = "Repeat the sequence.";
        userInput = [];
        inputEnabled = true;
      }
    }

    roundInfo.innerText = "Round " + currentRound + " of " + totalRounds;
    flashNext();
  }

  function handleUserInput(color) {
    if (!inputEnabled) return;

    userInput.push(color);
    colorButtons[color].style.transform = "scale(0.9)";
    setTimeout(() => {
      colorButtons[color].style.transform = "scale(1)";
    }, 200);

    // Check if sequence is correct
    if (userInput.length === sequence.length) {
      let correct = userInput.every((val, index) => val === sequence[index]);

      if (correct) {
        if (currentRound < totalRounds) {
          currentRound++;
          generateSequence();
          setTimeout(flashSequence, 1000);
        } else {
          overlay.remove();
          showPuzzleSuccessDialogue("Puzzle 1 complete!", function () {
            localStorage.setItem("puzzle1Complete", "true");
            window.location.href = "ancienthouse.html";
          });
        }
      } else {
        alert("Incorrect! Try again.");
        userInput = [];
        setTimeout(flashSequence, 1000);
      }
    }
  }

  colors.forEach((color) => {
    colorButtons[color].addEventListener("click", () => handleUserInput(color));
  });

  generateSequence();
  flashSequence();
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.title === "Puzzle 1") {
    startPuzzle1();
  }
});

// Puzzle 2: Door Lock Puzzle
function startPuzzle2() {
  const overlay = document.createElement("div");
  overlay.id = "puzzle2Overlay";
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "500",
  });
  document.body.appendChild(overlay);

  const instruction = document.createElement("p");
  instruction.innerText =
    "Rotate the dials until they show the correct numbers.";
  instruction.style.color = "white";
  instruction.style.fontSize = "1.2rem";
  overlay.appendChild(instruction);

  const dialContainer = document.createElement("div");
  dialContainer.id = "dialContainer";
  dialContainer.style.display = "flex";
  dialContainer.style.justifyContent = "center";
  dialContainer.style.gap = "10px";
  dialContainer.style.marginTop = "20px";
  overlay.appendChild(dialContainer);

  const correctValues = [3, 1, 4, 2, 5];
  const dials = [];
  for (let i = 0; i < 5; i++) {
    const dial = document.createElement("div");
    dial.className = "dial";
    dial.id = "dial" + (i + 1);
    dial.innerText = "0";
    dialContainer.appendChild(dial);
    dials.push(dial);

    dial.addEventListener("click", function () {
      let current = parseInt(dial.innerText, 10);
      current = (current + 1) % 10;
      dial.innerText = current;
      if (current === correctValues[i]) {
        dial.classList.add("correct");
      } else {
        dial.classList.remove("correct");
      }
    });
  }

  const checkButton = document.createElement("button");
  checkButton.innerText = "Check Answer";
  checkButton.className = "menu-option";
  checkButton.style.marginTop = "20px";
  overlay.appendChild(checkButton);

  checkButton.addEventListener("click", function () {
    let allCorrect = dials.every(function (dial, index) {
      return parseInt(dial.innerText, 10) === correctValues[index];
    });
    if (allCorrect) {
      overlay.remove();
      showPuzzleSuccessDialogue("Puzzle 2 complete!", function () {
        localStorage.setItem("puzzle2Complete", "true");
        window.location.href = "ancienthouse.html";
      });
    } else {
      alert("Not correct! Adjust the dials and try again.");
    }
  });
}

// Puzzle 3: Riddle Puzzle
function startPuzzle3() {
  const overlay = document.createElement("div");
  overlay.id = "puzzle3Overlay";
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "500",
  });
  document.body.appendChild(overlay);

  const riddleText = document.createElement("p");
  riddleText.innerText =
    "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?";
  riddleText.style.color = "white";
  riddleText.style.fontSize = "1.2rem";
  riddleText.style.textAlign = "center";
  overlay.appendChild(riddleText);

  const input = document.createElement("input");
  input.type = "text";
  input.id = "riddleInput";
  input.placeholder = "Type your answer here";
  input.style.marginTop = "20px";
  input.style.padding = "10px";
  input.style.fontSize = "1rem";
  overlay.appendChild(input);

  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit Answer";
  submitButton.className = "menu-option";
  submitButton.style.marginTop = "20px";
  overlay.appendChild(submitButton);

  submitButton.addEventListener("click", function () {
    const answer = input.value.trim().toLowerCase();
    if (answer === "echo") {
      overlay.remove();
      showPuzzleSuccessDialogue("Puzzle 3 complete!", function () {
        localStorage.setItem("puzzle3Complete", "true");
        window.location.href = "ancienthouse.html";
      });
    } else {
      alert("Incorrect! Try again.");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.title === "Puzzle 1") {
    startPuzzle1();
  } else if (document.title === "Puzzle 2") {
    startPuzzle2();
  } else if (document.title === "Puzzle 3") {
    startPuzzle3();
  }
});

//Lower end cave choices
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("LowerCave")) {
    const Area1 = document.getElementById("Area1");
    const Area2 = document.getElementById("Area2");
    const Area3 = document.getElementById("Area3");
    const Area4 = document.getElementById("Area4");
    const Area5 = document.getElementById("Area5");

    Area1.addEventListener("click", function () {
      window.location.href = "area1.html";
    });
    Area2.addEventListener("click", function () {
      window.location.href = "area2.html";
    });
    Area3.addEventListener("click", function () {
      window.location.href = "area3.html";
    });
    Area4.addEventListener("click", function () {
      window.location.href = "area4.html";
    });
    Area5.addEventListener("click", function () {
      window.location.href = "area5.html";
    });
  }
});

function checkBossDoorLock() {
  const bossDoor = document.getElementById("bossDoor");

  const p1 = localStorage.getItem("puzzle1Complete") === "true";
  const p2 = localStorage.getItem("puzzle2Complete") === "true";
  const p3 = localStorage.getItem("puzzle3Complete") === "true";
  const p4 = localStorage.getItem("puzzle4Complete") === "true";
  const p5 = localStorage.getItem("puzzle5Complete") === "true";

  if (bossDoor) {
    if (p1 && p2 && p3 && p4 && p5) {
      bossDoor.disabled = false;
      bossDoor.innerText = "Defeat Boss";
      bossDoor.addEventListener("click", function () {
        window.location.href = "bossdefeat.html";
      });
    } else {
      bossDoor.disabled = true;
      bossDoor.innerText = "Defeat Boss (Locked)";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  checkBossDoorLock();
});

// ROTATING KEY PUZZLE
function startRotatingKeyPuzzle() {
  const keyImage = document.getElementById("keyImage");
  const rotateButton = document.getElementById("rotateKeyButton");
  const exitButton = document.getElementById("exitPuzzleButton");

  const dialogueBox = document.querySelector(".dialogue-box");
  const dialogueText = document.getElementById("dialogueText");
  const continueButton = document.getElementById("continueButton");

  if (!dialogueBox || !dialogueText || !continueButton) {
    console.error("Error: Dialogue box elements not found!");
    return;
  }

  let rotation = 0;
  const correctAngle = 180;
  let attempts = 0;
  const maxAttempts = 5;

  rotateButton.addEventListener("click", function () {
    rotation += 45;
    keyImage.style.transform = `rotate(${rotation}deg)`;

    if (rotation === correctAngle) {
      showPuzzleDialogue(
        "The key fits perfectly! You unlocked the door.",
        function () {
          localStorage.setItem("puzzle1Complete", "true");
          window.location.href = "lowersectioncave.html";
        }
      );
    } else {
      attempts++;
      if (attempts >= maxAttempts) {
        showPuzzleDialogue(
          "You failed! The key slips out, resetting the puzzle.",
          function () {
            rotation = 0;
            attempts = 0;
            keyImage.style.transform = `rotate(${rotation}deg)`;
          }
        );
      }
    }
  });

  exitButton.addEventListener("click", function () {
    window.location.href = "lowersectioncave.html";
  });

  function showPuzzleDialogue(message, callback) {
    dialogueText.innerText = message;
    dialogueBox.style.display = "block";
    continueButton.onclick = function () {
      dialogueBox.style.display = "none";
      if (callback) callback();
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.title === "Rotating Key Puzzle") {
    startRotatingKeyPuzzle();
  }
});

//Stone balancing puzzle
function startStoneBalancingPuzzle() {
  const stones = document.querySelectorAll(".stone");
  const leftScale = document.getElementById("leftScale");
  const rightScale = document.getElementById("rightScale");
  const checkButton = document.getElementById("checkBalanceButton");
  const exitButton = document.getElementById("exitPuzzleButton");
  const stoneContainer = document.getElementById("stoneContainer");

  const dialogueBox = document.querySelector(".dialogue-box");
  const dialogueText = document.getElementById("dialogueText");
  const continueButton = document.getElementById("continueButton");

  if (!dialogueBox || !dialogueText || !continueButton) {
    console.error("Error: Dialogue box elements not found!");
    return;
  }

  let leftWeight = 0,
    rightWeight = 0;

  function createStoneElement(weight) {
    const newStone = document.createElement("div");
    newStone.className = "stone on-scale";
    newStone.innerText = `Stone ${weight}`;
    newStone.classList.add("drop-stone");
    return newStone;
  }

  stones.forEach((stone) => {
    // Disable HTML5 drag-drop
    stone.draggable = false;

    let offsetX = 0,
      offsetY = 0;
    let isDragging = false;

    stone.addEventListener("pointerdown", function (e) {
      isDragging = true;

      const rect = stone.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      stone.style.position = "absolute";
      stone.style.zIndex = "1000";
      stone.style.opacity = "0.7";

      stone.setPointerCapture(e.pointerId);
    });

    stone.addEventListener("pointermove", function (e) {
      if (!isDragging) return;

      e.preventDefault();

      const posX = e.clientX - offsetX;
      const posY = e.clientY - offsetY;

      stone.style.left = `${posX}px`;
      stone.style.top = `${posY}px`;
    });

    stone.addEventListener("pointerup", function (e) {
      isDragging = false;

      stone.releasePointerCapture(e.pointerId);
      stone.style.opacity = "1";

      const stoneRect = stone.getBoundingClientRect();
      const leftRect = leftScale.getBoundingClientRect();
      const rightRect = rightScale.getBoundingClientRect();
      let scaleSide = null;

      if (
        stoneRect.left >= leftRect.left &&
        stoneRect.right <= leftRect.right &&
        stoneRect.top >= leftRect.top &&
        stoneRect.bottom <= leftRect.bottom
      ) {
        scaleSide = "left";
      } else if (
        stoneRect.left >= rightRect.left &&
        stoneRect.right <= rightRect.right &&
        stoneRect.top >= rightRect.top &&
        stoneRect.bottom <= rightRect.bottom
      ) {
        scaleSide = "right";
      }

      if (scaleSide) {
        stone.remove();
        const weight = parseInt(stone.dataset.weight);
        if (scaleSide === "left") {
          leftWeight += weight;
        } else {
          rightWeight += weight;
        }
        const newStone = createStoneElement(weight);
        if (scaleSide === "left") {
          leftScale.appendChild(newStone);
        } else {
          rightScale.appendChild(newStone);
        }
      } else {
        stone.style.position = "static";
      }
    });
  });

  checkButton.addEventListener("click", function () {
    let balanceDifference = Math.abs(leftWeight - rightWeight);
    let balancePercentage = 100 - balanceDifference * 10;

    if (leftWeight === rightWeight) {
      if (stoneContainer) stoneContainer.style.display = "none";
      if (leftScale) leftScale.style.display = "none";
      if (rightScale) rightScale.style.display = "none";
      showPuzzleDialogue(
        "The scale is perfectly balanced! Puzzle complete.",
        function () {
          localStorage.setItem("puzzle2Complete", "true");
          window.location.href = "lowersectioncave.html";
        }
      );
    } else if (balancePercentage >= 70) {
      showPuzzleDialogue(
        `You're close! The balance is ${balancePercentage}% correct. Adjust slightly and try again.`,
        function () {}
      );
    } else {
      showPuzzleDialogue(
        "The scale is unbalanced. Let's try again.",
        function () {
          resetPuzzle();
        }
      );
    }
  });

  function resetPuzzle() {
    leftWeight = 0;
    rightWeight = 0;
    leftScale.innerHTML = "";
    rightScale.innerHTML = "";
    stoneContainer.innerHTML = `
      <div class="stone" id="stone5" data-weight="5">Stone 5</div>
      <div class="stone" id="stone4" data-weight="4">Stone 4</div>
      <div class="stone" id="stone3" data-weight="3">Stone 3</div>
      <div class="stone" id="stone2" data-weight="2">Stone 2</div>
      <div class="stone" id="stone1" data-weight="1">Stone 1</div>
    `;

    const newStones = stoneContainer.querySelectorAll(".stone");
    newStones.forEach((stone) => {
      stone.draggable = false;
      let offsetX = 0,
        offsetY = 0;
      let isDragging = false;
      stone.addEventListener("pointerdown", function (e) {
        isDragging = true;
        const rect = stone.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        stone.setPointerCapture(e.pointerId);
        stone.style.opacity = "0.7";
      });
      stone.addEventListener("pointermove", function (e) {
        if (!isDragging) return;
        e.preventDefault();
        const posX = e.clientX - offsetX;
        const posY = e.clientY - offsetY;
        stone.style.position = "absolute";
        stone.style.left = posX + "px";
        stone.style.top = posY + "px";
      });
      stone.addEventListener("pointerup", function (e) {
        isDragging = false;
        stone.releasePointerCapture(e.pointerId);
        stone.style.opacity = "1";
        const stoneRect = stone.getBoundingClientRect();
        const leftRect = leftScale.getBoundingClientRect();
        const rightRect = rightScale.getBoundingClientRect();
        let scaleSide = null;
        if (
          stoneRect.left >= leftRect.left &&
          stoneRect.right <= leftRect.right &&
          stoneRect.top >= leftRect.top &&
          stoneRect.bottom <= leftRect.bottom
        ) {
          scaleSide = "left";
        } else if (
          stoneRect.left >= rightRect.left &&
          stoneRect.right <= rightRect.right &&
          stoneRect.top >= rightRect.top &&
          stoneRect.bottom <= rightRect.bottom
        ) {
          scaleSide = "right";
        }
        if (scaleSide) {
          stone.remove();
          const weight = parseInt(stone.dataset.weight);
          if (scaleSide === "left") {
            leftWeight += weight;
          } else {
            rightWeight += weight;
          }
          const newStone = createStoneElement(weight);
          if (scaleSide === "left") {
            leftScale.appendChild(newStone);
          } else {
            rightScale.appendChild(newStone);
          }
        } else {
          stone.style.position = "static";
        }
      });
    });
  }

  exitButton.addEventListener("click", function () {
    window.location.href = "lowersectioncave.html";
  });

  function showPuzzleDialogue(message, callback) {
    dialogueText.innerText = message;
    dialogueBox.style.display = "block";
    continueButton.onclick = function () {
      dialogueBox.style.display = "none";
      if (callback) callback();
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.location.href.includes("area2puzzle.html")) {
    startStoneBalancingPuzzle();
  }
});

//Waterflow puzzle
function startWaterFlowPuzzle() {
  const puzzleContainer = document.getElementById("waterFlowContainer");
  if (!puzzleContainer) {
    console.error("Error: waterFlowContainer not found!");
    return;
  }

  puzzleContainer.innerHTML = "";
  puzzleContainer.style.display = "flex";
  puzzleContainer.style.flexDirection = "column";
  puzzleContainer.style.alignItems = "center";

  const instructions = document.createElement("p");
  instructions.innerText =
    "Water Flow Puzzle: Click on each arrow to rotate it. Align the pipes so that water flows from the Source to the Basin.";
  instructions.style.color = "#fff";
  instructions.style.fontSize = "1rem";
  instructions.style.textAlign = "center";
  instructions.style.marginBottom = "10px";
  puzzleContainer.appendChild(instructions);

  const gridSize = 4;
  const gridElement = document.createElement("div");
  gridElement.id = "pipeGrid";
  gridElement.style.display = "grid";
  gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 60px)`;
  gridElement.style.gap = "5px";
  puzzleContainer.appendChild(gridElement);

  const grid = [];
  const rotationToArrow = {
    0: "→", // right
    90: "↓", // down
    180: "←", // left
    270: "↑", // up
  };

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.className = "pipeCell";
    cell.style.width = "60px";
    cell.style.height = "60px";
    cell.style.border = "1px solid #fff";
    cell.style.display = "flex";
    cell.style.alignItems = "center";
    cell.style.justifyContent = "center";
    cell.style.cursor = "pointer";
    cell.style.background = "#4a90e2";
    cell.style.userSelect = "none";

    let rotation = Math.floor(Math.random() * 4) * 90;
    cell.dataset.rotation = rotation;
    cell.innerText = rotationToArrow[rotation];

    cell.addEventListener("click", function () {
      rotation = (rotation + 90) % 360;
      cell.dataset.rotation = rotation;
      cell.innerText = rotationToArrow[rotation];
    });

    gridElement.appendChild(cell);
    grid.push(cell);
  }

  const sourceIndices = [0, 4, 8, 12];
  const basinIndices = [3, 7, 11, 15];

  sourceIndices.forEach((i) => {
    let cell = grid[i];
    cell.style.background = "#50e3c2";
    cell.innerText = "Source";

    cell.style.cursor = "default";
  });
  basinIndices.forEach((i) => {
    let cell = grid[i];
    cell.style.background = "#f5a623";
    cell.innerText = "Basin";
    cell.style.cursor = "default";
  });

  const checkButton = document.createElement("button");
  checkButton.innerText = "Check Water Flow";
  checkButton.className = "menu-option";
  checkButton.style.marginTop = "20px";
  puzzleContainer.appendChild(checkButton);

  checkButton.addEventListener("click", function () {
    let solved = grid.every((cell, index) => {
      // Skip Source and Basin cells
      if (sourceIndices.includes(index) || basinIndices.includes(index)) {
        return true;
      }
      return parseInt(cell.dataset.rotation) === 0;
    });

    showPuzzleDialogue(
      solved
        ? "The water flows perfectly into the basin! Puzzle complete."
        : "The water is not flowing correctly. Adjust the pipes and try again.",
      solved
        ? function () {
            window.location.href = "lowersectioncave.html";
          }
        : function () {}
    );
  });

  function showPuzzleDialogue(message, callback) {
    const dialogueBox = document.querySelector(".dialogue-box");
    const dialogueText = document.getElementById("dialogueText");
    const continueButton = document.getElementById("continueButton");
    if (!dialogueBox || !dialogueText || !continueButton) {
      console.error("Dialogue box elements not found!");
      return;
    }
    dialogueText.innerText = message;
    dialogueBox.style.display = "block";
    continueButton.onclick = function () {
      dialogueBox.style.display = "none";
      if (callback) callback();
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.location.href.includes("area3puzzle.html")) {
    startWaterFlowPuzzle();
  }
});

//star puzzle
function startStarAlignmentPuzzle() {
  const puzzleContainer = document.getElementById("starAlignmentContainer");
  if (!puzzleContainer) {
    console.error(
      "Error: starAlignmentContainer not found! Please add a container with this ID in area4puzzle.html."
    );
    return;
  }

  puzzleContainer.innerHTML = "";
  puzzleContainer.style.display = "flex";
  puzzleContainer.style.flexDirection = "column";
  puzzleContainer.style.alignItems = "center";

  const instructions = document.createElement("p");
  instructions.innerText =
    "Star Alignment Puzzle: Click on each star to rotate it. Adjust until they turn purple!.";
  instructions.style.color = "#fff";
  instructions.style.fontSize = "1rem";
  instructions.style.textAlign = "center";
  instructions.style.marginBottom = "10px";
  puzzleContainer.appendChild(instructions);

  const starContainer = document.createElement("div");
  starContainer.id = "starGrid";
  starContainer.style.display = "flex";
  starContainer.style.gap = "10px";
  puzzleContainer.appendChild(starContainer);

  const numStars = 5;
  const targetStates = [90, 0, 270, 180, 90];
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "starCell";
    star.style.width = "60px";
    star.style.height = "60px";
    star.style.margin = "5px";
    star.style.display = "inline-flex";
    star.style.alignItems = "center";
    star.style.justifyContent = "center";
    star.style.fontSize = "2rem";
    star.style.cursor = "pointer";

    star.style.background = "#222";
    star.style.color = "#ffd700";
    star.style.border = "2px solid #fff";
    star.style.borderRadius = "5px";

    let rotation = Math.floor(Math.random() * 4) * 90;
    star.dataset.rotation = rotation;
    star.style.transform = `rotate(${rotation}deg)`;
    star.innerText = "★";

    star.addEventListener("click", function () {
      rotation = (rotation + 90) % 360;
      star.dataset.rotation = rotation;
      star.style.transform = `rotate(${rotation}deg)`;
      if (rotation === targetStates[i]) {
        star.style.background = "purple";
      } else {
        star.style.background = "#222";
      }
    });

    starContainer.appendChild(star);
    stars.push(star);
  }

  const checkButton = document.createElement("button");
  checkButton.innerText = "Check Constellation";
  checkButton.className = "menu-option";
  checkButton.style.marginTop = "20px";
  puzzleContainer.appendChild(checkButton);

  checkButton.addEventListener("click", function () {
    let solved = stars.every((star, index) => {
      return parseInt(star.dataset.rotation, 10) === targetStates[index];
    });

    showPuzzleDialogue(
      solved
        ? "The stars align perfectly! Puzzle complete."
        : "The stars are misaligned. Adjust and try again.",
      solved
        ? function () {
            localStorage.setItem("puzzle4Complete", "true");
            window.location.href = "lowersectioncave.html";
          }
        : function () {}
    );
  });

  function showPuzzleDialogue(message, callback) {
    const dialogueBox = document.querySelector(".dialogue-box");
    const dialogueText = document.getElementById("dialogueText");
    const continueButton = document.getElementById("continueButton");
    if (!dialogueBox || !dialogueText || !continueButton) {
      alert(message);
      if (callback) callback();
      return;
    }
    dialogueText.innerText = message;
    dialogueBox.style.display = "block";
    continueButton.onclick = function () {
      dialogueBox.style.display = "none";
      if (callback) callback();
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (
    document.location.href.includes("area4puzzle.html") ||
    document.title === "Star Alignment Puzzle"
  ) {
    startStarAlignmentPuzzle();
  }
});

function startRopeCuttingPuzzle() {
  const puzzleContainer = document.getElementById("ropeCuttingContainer");
  if (!puzzleContainer) {
    console.error("Error: ropeCuttingContainer not found in area5puzzle.html.");
    return;
  }

  puzzleContainer.innerHTML = "";
  puzzleContainer.style.display = "flex";
  puzzleContainer.style.flexDirection = "column";
  puzzleContainer.style.alignItems = "center";

  const instructions = document.createElement("p");
  instructions.innerText =
    "Rope Cutting Puzzle: Cut the ropes in the correct order to succeed.";
  instructions.style.textAlign = "center";
  instructions.style.color = "#fff";
  instructions.style.fontSize = "1rem";
  instructions.style.marginBottom = "10px";
  puzzleContainer.appendChild(instructions);

  const ropesContainer = document.createElement("div");
  ropesContainer.style.display = "flex";
  ropesContainer.style.gap = "20px";
  puzzleContainer.appendChild(ropesContainer);

  const ropeIds = ["rope1", "rope2", "rope3"];
  const correctOrder = ["rope2", "rope3", "rope1"];
  let currentIndex = 0;

  ropeIds.forEach((ropeId, index) => {
    const ropeButton = document.createElement("button");
    ropeButton.innerText = `Rope ${index + 1}`;
    ropeButton.className = "menu-option";
    ropeButton.style.width = "100px";
    ropeButton.style.height = "40px";
    ropeButton.style.margin = "5px";
    ropeButton.dataset.id = ropeId;
    ropesContainer.appendChild(ropeButton);

    ropeButton.addEventListener("click", function () {
      if (ropeButton.dataset.id === correctOrder[currentIndex]) {
        ropeButton.disabled = true;
        ropeButton.style.background = "gray";
        ropeButton.innerText = "Cut";
        currentIndex++;
        if (currentIndex === correctOrder.length) {
          showPuzzleDialogue(
            "You've cut the ropes in the correct order! Puzzle complete.",
            function () {
              localStorage.setItem("puzzle5Complete", "true");
              window.location.href = "lowersectioncave.html";
            }
          );
        }
      } else {
        showPuzzleDialogue(
          "Wrong rope cut! The ropes reattach. Try again.",
          function () {
            currentIndex = 0;

            const buttons = ropesContainer.querySelectorAll("button");
            buttons.forEach((btn, idx) => {
              btn.disabled = false;
              btn.style.background = "";
              btn.innerText = `Rope ${idx + 1}`;
            });
          }
        );
      }
    });
  });

  function showPuzzleDialogue(message, callback) {
    const dialogueBox = document.querySelector(".dialogue-box");
    const dialogueText = document.getElementById("dialogueText");
    const continueButton = document.getElementById("continueButton");
    if (!dialogueBox || !dialogueText || !continueButton) {
      alert(message);
      if (callback) callback();
      return;
    }
    dialogueText.innerText = message;
    dialogueBox.style.display = "block";
    continueButton.onclick = function () {
      dialogueBox.style.display = "none";
      if (callback) callback();
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (
    document.location.href.includes("area5puzzle.html") ||
    document.title === "Rope Cutting Puzzle"
  ) {
    startRopeCuttingPuzzle();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("Ending")) {
    const Credits = document.getElementById("Credits");
    if (Credits) {
      Credits.addEventListener("click", function () {
        window.location.href = "Credits.html";
      });
    }
  }
});

const creditsContainer = document.getElementById("creditsContainer");
if (creditsContainer) {
  creditsContainer.addEventListener("animationend", function () {
    window.location.href = "index.html";
  });
} else {
  console.log("creditsContainer not found");
}
