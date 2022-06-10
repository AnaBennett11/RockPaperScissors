var changeButton = document.querySelector(".change-button");
var classicRules = document.querySelector("#classicRules");
var difficultRules = document.querySelector("#difficultRules");
var choice = document.querySelector(".choice");
var endResult = document.querySelector(".end-result");
var classicImages = document.querySelector(".classic-images");
var difficultImages = document.querySelector(".difficult-images");
var imageSection = document.querySelector(".image-section");
var rockImage = document.querySelector("#rock");
var paperImage = document.querySelector("#paper");
var scissorsImage = document.querySelector("#scissors");
var playerChoices = document.querySelector(".players-choices")


// var player = new Player();
var game = "";



window.addEventListener("load", displayPage);
classicRules.addEventListener("click", playClassicGame);
imageSection.addEventListener("click", function(e){
  if (e.target.classList.contains("rock")) {
    game.checkWinConditions("rock", game.player2.takeTurn(game.gameType));
    showChoice();
    setTimeout(showWinner, 2000);
    // showWinner();

  }
});
// paperImage.addEventListener("click",)
// scissorsImage.addEventListener("click",)



function displayPage() {
  game = new Game();
}

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}

function playClassicGame() {
  hide(classicRules);
  hide(difficultRules);
  show(imageSection);
  show(classicImages);
  hide(choice);
  show(changeButton);
  game.gameType = "classic";
}

function rockChoice () {
  game.checkWinConditions("rock", game.player2.takeTurn(game.gameType));
  showWinner();
}
function showChoice () {
 show(playerChoices);
 hide(imageSection);
//show two images and interpoloate a player choice and computer choice
playerChoices.innerHTML +=
  `<img class="choice ${game.humanChoice}" id="${game.humanChoice}" src="./assets/happy-${game.humanChoice}s.png" alt="happy ${game.humanChoice}s">
  <img class="choice ${game.computerChoice}" id="${game.computerChoice}" src="./assets/happy-${game.computerChoice}.png" alt="happy ${game.computerChoice}">`
}
function showWinner () {
  //show a text of who wins, innerhtml of p tag that is determined based on the winner


  }
