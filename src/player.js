function Player(move){
  this.currentMove = move
};

Player.prototype.move = function(){
  return this.currentMove
}
