class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.numOfWins = 0;
  }
    takeTurn(gameType) {
      if (gameType === "classic") {
        var fighters = ["rock", "paper", "scissors"];
        return fighters[Math.floor(Math.random() * fighters.length)]
      }
      if (gameType === "difficult") {
        var fighters = ["rock", "paper", "scissors", "lizard", "alien"];
        return fighters[Math.floor(Math.random() * fighters.length)]
      }
    }

    winsCounter() {
      this.wins++;
    }
  }
