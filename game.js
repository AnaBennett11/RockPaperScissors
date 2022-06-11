class Game {
  constructor() {
    this.gameType = "";
    this.player1 = new Player("Human");
    this.player2 = new Player("Computer");
    this.winner = null;
    this.humanChoice = "";
    this.computerChoice = "";
  }

  gameStatus() {
    //says no body has picked anything
    //player1 Wins or player2 Wins
    //its a draw
    //holds each token what each player has
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
    // if (this.player1.token
    //check to see if rock beats paper or whatever
    //check to see if there is a draw
    //then returns the winner
  }
  resetGameBoard(){
    //empties the array for the gameboard
  }
}
