describe('game', function(){

  var game

  beforeEach(function(){
    game = new Game();
  });


  it('can calculate if the game is a draw', function(){
    spyOn(game, '_matchDraw').and.returnValue('Its a draw!')
    expect(game.result("Rock", "Rock")).toEqual('Its a draw!')
  })

  it('P1: Rock beats Scissors', function(){
    spyOn(game, '_rockWin').and.returnValue('Player 1 wins!')
    expect(game.result('Rock', 'Scissors')).toEqual('Player 1 wins!')
  })

  it('P1: Scissors beats Paper', function(){
    spyOn(game, '_scissorWin').and.returnValue('Player 1 wins!')
    expect(game.result('Scissors', 'Paper')).toEqual('Player 1 wins!')
  })

  it('P1: Paper beats Rock', function(){
    spyOn(game, '_paperWin').and.returnValue('Player 1 wins!')
    expect(game.result('Paper', 'Rock')).toEqual('Player 1 wins!')
  })

  it("P2: Rock beats Scissors", function(){
    spyOn(game, '_rockWin').and.returnValue('Player 2 wins!')
    expect(game.result("Scissors", "Rock")).toEqual('Player 2 wins!')
  })

  it("P2: Paper beats Rock", function(){
    spyOn(game, '_paperWin').and.returnValue('Player 2 wins!')
    expect(game.result("Rock", "Paper")).toEqual('Player 2 wins!')
  })

  it('P2: Scissors beats Paper', function(){
    spyOn(game, '_scissorWin').and.returnValue('Player 2 wins!')
    expect(game.result("Paper", "Scissors")).toEqual('Player 2 wins!')
  })
})
