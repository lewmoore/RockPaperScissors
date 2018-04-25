class Game{
  constructor(player1, player2){
    this.outcomes = [
      { player1: 'Rock', player2: 'Scissors', winner: 1 },
      { player1: 'Rock', player2: 'Paper', winner: 2 },
      { player1: 'Scissors', player2: 'Paper', winner: 1 },
      { player1: 'Scissors', player2: 'Rock', winner: 2 },
      { player1: 'Paper', player2: 'Rock', winner: 1 },
      { player1: 'Paper', player2: 'Scissors', winner: 2 },
    ]
  }

  result(player1, player2){
    for (var i = 0; i < this.outcomes.length; i++) {
        if (this.outcomes[i].player1 == player1 && this.outcomes[i].player2 == player2) {
          return 'Player ' + this.outcomes[i].winner + ' wins!'
        }
      }
    return 'Its a draw!'
  }
}
