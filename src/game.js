class Game{
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
    if (player1.currentMove === player2.currentMove){
      return "Its a draw!"
    }
  }

  _rockWin(player1, player2){
    if (player1.currentMove == "Rock" && player2.currentMove == "Scissors"){
      return "Player 1 wins!"
    } else if (player1.currentMove == "Scissors" && player2.currentMove == "Rock"){
      return "Player 2 wins!"
    }
  }

  _scissorWin(player1, player2){
    if (player1.currentMove == 'Scissors' && player2.currentMove == 'Paper'){
      return "Player 1 wins!"
    } else if (player1.currentMove == "Paper" && player2.currentMove == "Scissors"){
      return "Player 2 wins!"
    }
  }

  _paperWin(player1, player2){
    if (player1.currentMove == 'Paper' && player2.currentMove == 'Rock'){
      return 'Player 1 wins!'
    } else if (player1.currentMove == "Rock" && player2.currentMove == "Paper"){
      return "Player 2 wins!"
    }
  }
}
