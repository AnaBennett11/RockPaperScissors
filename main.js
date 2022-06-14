var changeButton = document.querySelector(".change-button");
var classicRules = document.querySelector("#classicRules");
var difficultRules = document.querySelector("#difficultRules");
var chosen = document.querySelector(".chosen");
var classicImages = document.querySelector(".classic-images");
var difficultImages = document.querySelector(".difficult-images");
var imageSection = document.querySelector(".image-section");
var playerChoices = document.querySelector(".players-choices")
var box1 = document.querySelector(".placeholder1");
var box2 = document.querySelector(".placeholder2");
var humanWins = document.querySelector(".human-wins");
var computerWins = document.querySelector(".computer-wins");

var game = "";

window.addEventListener("load", displayPage);
classicRules.addEventListener("click", playClassicGame);
difficultRules.addEventListener("click", playDifficultGame);
imageSection.addEventListener("click", function(e){
  if (e.target.classList.contains("rock")) {
    game.checkWinConditions("rock", game.player2.takeTurn(game.gameType));
    showChoice();
    setTimeout(showWinner, 1000);
  }
  if (e.target.classList.contains("paper")) {
    game.checkWinConditions("paper", game.player2.takeTurn(game.gameType));
    showChoice();
    setTimeout(showWinner, 1000);
  }
  if (e.target.classList.contains("scissors")) {
    game.checkWinConditions("scissors", game.player2.takeTurn(game.gameType));
    showChoice();
    setTimeout(showWinner, 1000);
  }
  if (e.target.classList.contains("lizard")) {
    game.checkWinConditions("lizard", game.player2.takeTurn(game.gameType));
    showChoice();
    setTimeout(showWinner, 1000);
  }
  if (e.target.classList.contains("alien")) {
    game.checkWinConditions("alien", game.player2.takeTurn(game.gameType));
    showChoice();
    setTimeout(showWinner, 1000);
  }
});
changeButton.addEventListener("click", changeGame);


function displayPage() {
  game = new Game();
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function playClassicGame() {
  hide(classicRules);
  hide(difficultRules);
  show(imageSection);
  show(classicImages);
  show(changeButton);
  show(chosen);
  hide(difficultImages);
  game.gameType = "classic";
  chosen.innerHTML = "<h3>Choose your fighter</h3>";
};

function playDifficultGame() {
  hide(classicRules);
  hide(difficultRules);
  show(imageSection);
  show(classicImages);
  show(difficultImages);
  show(changeButton);
  show(chosen);
  game.gameType = "difficult";
  chosen.innerHTML = "<h3>Choose your fighter</h3>";
};

function showChoice () {
 show(playerChoices);
 hide(imageSection);
 hide(chosen);
 box1.innerHTML += `<img class="choice ${game.humanChoice}" id="${game.humanChoice}" src="./assets/happy-${game.humanChoice}.png" alt="happy ${game.humanChoice}">`;
 box2.innerHTML += `<img class="choice ${game.computerChoice}" id="${game.computerChoice}" src="./assets/happy-${game.computerChoice}.png" alt="happy ${game.computerChoice}">`;
};

 function showWinner () {
  show(chosen);
  if (game.winner === "Computer") {
    chosen.innerHTML = "<h3>Computer Won!</h3>";
    game.player2.increaseComputerWins();
    computerWins.innerHTML = `<h3 class="computer-wins">Wins: ${game.player2.computerWins}</h3>`
  } else if (game.winner === "Human") {
    chosen.innerHTML = "<h3>Human Won!</h3>";
    game.player1.increaseHumanWins();
    humanWins.innerHTML = `<h3 class="human-wins">Wins: ${game.player1.humanWins}</h3>`
  } else {
    chosen.innerHTML = "<h3>It's a draw!</h3>";
  };
};

function changeGame () {
  show(classicRules);
  show(difficultRules);
  hide(changeButton);
  hide(imageSection);
  show(chosen);
  hide(playerChoices);
  box1.innerHTML = "";
  box2.innerHTML = "";
  chosen.innerHTML = "<h3>Choose your game!</h3>";
};
