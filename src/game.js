class Game{
  //
  // {
  //   player1: 'string'
  //   player2: 'string',
  //   result: ''
  // }
  //
  // var outcomes = [
  //   { player1: 'Rock', player2: 'Scisssors', winner: 1 }
  //   { player1: 'Rock', player2: 'Paper', winner: 2 }
  // ]

  constructor(player1, player2){

  }

  result(player1, player2){
    if (this._paperWin(player1, player2)) {
      return this._paperWin(player1, player2)
    } else if (this._rockWin(player1, player2)) {
      return this._rockWin(player1, player2)
    } else if (this._scissorWin(player1, player2)) {
      return this._scissorWin(player1, player2)
    } else if (this._matchDraw(player1, player2)) {
      return this._matchDraw(player1, player2)
    }
  }

  _matchDraw(player1, player2){
    if (player1 === player2){
      return "Its a draw!"
    }
  }

  _rockWin(player1, player2){
    if (player1 == "Rock" && player2 == "Scissors"){
      return "Player 1 wins!"
    } else if (player1 == "Scissors" && player2 == "Rock"){
      return "Player 2 wins!"
    }
  }

  _scissorWin(player1, player2){
    if (player1 == 'Scissors' && player2 == 'Paper'){
      return "Player 1 wins!"
    } else if (player1 == "Paper" && player2 == "Scissors"){
      return "Player 2 wins!"
    }
  }

  _paperWin(player1, player2){
    if (player1 == 'Paper' && player2 == 'Rock'){
      return 'Player 1 wins!'
    } else if (player1 == "Rock" && player2 == "Paper"){
      return "Player 2 wins!"
    }
  }
}
