describe('game', function(){

  var game

  beforeEach(function(){
    game = new Game();
  });

  it('can calculate if the game is a draw', function(){
    expect(game.result("Rock", "Rock")).toEqual('Its a draw!')
  })

  it('P1: Rock beats Scissors', function(){
    expect(game.result("Rock", "Scissors")).toEqual('Player 1 wins!')
  })

  it('P1: Scissors beats Paper', function(){
    expect(game.result('Scissors', 'Paper')).toEqual('Player 1 wins!')
  })

  it('P1: Paper beats Rock', function(){
    expect(game.result('Paper', 'Rock')).toEqual('Player 1 wins!')
  })

  it("P2: Rock beats Scissors", function(){
    expect(game.result("Scissors", "Rock")).toEqual('Player 2 wins!')
  })

  it("P2: Paper beats Rock", function(){
    expect(game.result("Rock", "Paper")).toEqual('Player 2 wins!')
  })
})
