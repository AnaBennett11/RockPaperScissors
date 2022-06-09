class Game {
  constructor(player1, player2, gameType) {
    this.id = Date.now()
    this.player1 = player1;
    this.player2 = player2;
    this.gameType = gameType;
  }
}
