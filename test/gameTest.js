describe('game', function(){

  var game

  beforeEach(function(){
    game = new Game();
  });

  it('can calculate if the game is a draw', function(){
    expect(game.result("Rock", "Rock")).toEqual('Its a draw!')
  })

  it('can calculate Rock beats Scisccors', function(){
    expect(game.result("Rock", "Scissors")).toEqual('Player 1 wins!')
  })
})
