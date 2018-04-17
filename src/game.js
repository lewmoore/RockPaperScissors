function Game(player){
}

Game.prototype.result = function(player1, player2){
  return this._matchDraw(player1, player2)
}

Game.prototype._matchDraw = function(player1, player2){
  if (player1 === player2){
    return "Its a draw!"
  }
}
