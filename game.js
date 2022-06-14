class Game {
  constructor() {
    this.gameType = "";
    this.player1 = new Player("Human");
    this.player2 = new Player("Computer");
    this.winner = null;
    this.humanChoice = "";
    this.computerChoice = "";
  }

  checkWinConditions(playerChoice, computerChoice) {
    this.humanChoice = playerChoice;
    this.computerChoice = computerChoice;
    if (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) {
      this.winner = "Human";
    } else if (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "alien")) {
      this.winner = "Human";
    } else if (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) {
      this.winner = "Human";
    } else if (playerChoice === "lizard" && (computerChoice === "paper" || computerChoice === "alien")) {
      this.winner = "Human";
    } else if (playerChoice === "alien" && (computerChoice === "rock" || computerChoice === "scissors")) {
      this.winner = "Human";
    } else if (playerChoice === computerChoice) {
      this.winner = "Draw";
    } else {
      this.winner = "Computer";
    }
    return this.winner;
  }
}
