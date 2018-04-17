function Game(player){
}

Game.prototype.result = function(player1, player2){
  if (this._matchDraw(player1, player2)) {
    return this._matchDraw(player1, player2)
  } else if (this._rockWin(player1, player2)) {
    return this._rockWin(player1, player2)
  } else {
    return this._scissorWin(player1, player2)
  }
}

Game.prototype._matchDraw = function(player1, player2){
  if (player1 === player2){
    return "Its a draw!"
  }
}

Game.prototype._rockWin = function(player1, player2){
  if (player1 == "Rock" && player2 == "Scissors"){
    return "Player 1 wins!"
  }
}

Game.prototype._scissorWin = function(player1, player2){
  if (player1 == 'Scissors' && player2 == 'Paper'){
    return "Player 1 wins!"
  }
}
