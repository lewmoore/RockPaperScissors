describe('game', function(){

  var game

  beforeEach(function(){
    game = new Game();
  });

  it('can calculate if the game is a draw', function(){
    expect(game.result("Rock", "Rock")).toEqual('Its a draw!')
  })

  it('Rock beats Scissors', function(){
    expect(game.result("Rock", "Scissors")).toEqual('Player 1 wins!')
  })

  it('Scissors beats Paper', function(){
    expect(game.result('Scissors', 'Paper')).toEqual('Player 1 wins!')
  })
})
