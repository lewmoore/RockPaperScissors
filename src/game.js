function Game(player){
}

Game.prototype.result = function(player1, player2){
  if (player1 === player2){
    return "Its a draw!"
  }
}
