function showPage(pageId) {
  let pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";
}

let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
  let guess = Number(document.getElementById("guessInput").value);
  let message = document.getElementById("message");

  if (guess < 1 || guess > 100) {
    message.textContent = "Pick a number between 1 and 100!";
    return;
  }

  guesses++;
  document.getElementById("guessCount").textContent = "Guesses: " + guesses;

  if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }

  document.getElementById("guessInput").value = "";
}

function newGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 0;

  document.getElementById("message").textContent = "New game! Make your first guess!";
  document.getElementById("guessCount").textContent = "Guesses: 0";
  document.getElementById("guessInput").value = "";
}

function chooseCave() {
  document.getElementById("story").textContent =
    "You enter the cave and find two tunnels. One tunnel glows blue. The other tunnel is dark and quiet. Which way do you go?";

  document.getElementById("choices").innerHTML = `
    <button onclick="chooseBlueTunnel()">Glowing blue tunnel</button>
    <button onclick="chooseDarkTunnel()">Dark tunnel</button>
  `;

  document.getElementById("adventureMessage").textContent = "";
}

function chooseWalkAway() {
  document.getElementById("story").textContent =
    "You decide the cave looks too creepy. As you walk away, you find a treasure map on the ground.";

  document.getElementById("choices").innerHTML = `
    <button onclick="followMap()">Follow the map</button>
    <button onclick="goHome()">Go home</button>
  `;

  document.getElementById("adventureMessage").textContent = "";
}

function chooseBlueTunnel() {
  document.getElementById("story").textContent =
    "The blue tunnel leads to an underground lake. A friendly dragon is guarding a golden key.";

  document.getElementById("choices").innerHTML = `
    <button onclick="talkToDragon()">Talk to the dragon</button>
    <button onclick="grabKey()">Grab the key</button>
  `;

  document.getElementById("adventureMessage").textContent = "";
}

function chooseDarkTunnel() {
  document.getElementById("story").textContent =
    "You walk into the dark tunnel and hear tiny footsteps. Suddenly, a group of cave goblins appears!";

  document.getElementById("choices").innerHTML = `
    <button onclick="tellJoke()">Tell them a joke</button>
    <button onclick="runAway()">Run away</button>
  `;

  document.getElementById("adventureMessage").textContent = "";
}

function followMap() {
  document.getElementById("story").textContent =
    "The map leads you to a hidden chest under an old tree.";

  document.getElementById("choices").innerHTML = "";

  document.getElementById("adventureMessage").textContent =
    "🏆 You found treasure! You win!";
}

function goHome() {
  document.getElementById("story").textContent =
    "You go home and make a sandwich. Not very adventurous, but still a good day.";

  document.getElementById("choices").innerHTML = "";

  document.getElementById("adventureMessage").textContent =
    "Game over. Try being braver next time!";
}

function talkToDragon() {
  document.getElementById("story").textContent =
    "The dragon smiles and gives you the golden key. It opens a secret treasure room.";

  document.getElementById("choices").innerHTML = "";

  document.getElementById("adventureMessage").textContent =
    "🐉 You made a dragon friend and found the treasure. You win!";
}

function grabKey() {
  document.getElementById("story").textContent =
    "You try to grab the key, but the dragon sneezes fire and scares you out of the cave.";

  document.getElementById("choices").innerHTML = "";

  document.getElementById("adventureMessage").textContent =
    "Game over. Maybe ask politely next time!";
}

function tellJoke() {
  document.getElementById("story").textContent =
    "The goblins laugh so hard that they show you a secret exit filled with coins.";

  document.getElementById("choices").innerHTML = "";

  document.getElementById("adventureMessage").textContent =
    "😂 The goblins loved your joke. You win!";
}

function runAway() {
  document.getElementById("story").textContent =
    "You run as fast as you can and trip over a shiny silver helmet. Not treasure, but pretty cool.";

  document.getElementById("choices").innerHTML = "";

  document.getElementById("adventureMessage").textContent =
    "You survived, but did not find the treasure.";
}

function restartAdventure() {
  document.getElementById("story").textContent =
    "You are standing at the entrance of a mysterious cave. Do you go inside or walk away?";

  document.getElementById("choices").innerHTML = `
    <button onclick="chooseCave()">Go inside</button>
    <button onclick="chooseWalkAway()">Walk away</button>
  `;

  document.getElementById("adventureMessage").textContent = "";
}