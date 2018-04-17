function Game(player1 = new Player , player2 = new Player){
}

Game.prototype.result = function(player1, player2){
  if (this._paperWin(player1, player2)) {
    return this._paperWin(player1, player2)
  } else if (this._rockWin(player1, player2)) {
    return this._rockWin(player1, player2)
  } else if (this._scissorWin(player1, player2)) {
    return this._scissorWin(player1, player2)
  } else {
    return this._matchDraw(player1, player2)
  }
}

Game.prototype._matchDraw = function(player1, player2){
  if (player1.currentMove === player2.currentMove){
    return "Its a draw!"
  }
}

Game.prototype._rockWin = function(player1, player2){
  if (player1.currentMove == "Rock" && player2.currentMove == "Scissors"){
    return "Player 1 wins!"
  } else if (player1.currentMove == "Scissors" && player2.currentMove == "Rock"){
    return "Player 2 wins!"
  }
}

Game.prototype._scissorWin = function(player1, player2){
  if (player1.currentMove == 'Scissors' && player2.currentMove == 'Paper'){
    return "Player 1 wins!"
  } else if (player1.currentMove == "Paper" && player2.currentMove == "Scissors"){
    return "Player 2 wins!"
  }
}

Game.prototype._paperWin = function(player1, player2){
  if (player1.currentMove == 'Paper' && player2.currentMove == 'Rock'){
    return 'Player 1 wins!'
  } else if (player1.currentMove == "Rock" && player2.currentMove == "Paper"){
    return "Player 2 wins!"
  }
}
