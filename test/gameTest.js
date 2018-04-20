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
    player1 = jasmine.createSpyObj('player1', {'move': 'Rock'})
    player2 = jasmine.createSpyObj('player2', {'move': 'Scissors'})
    expect(game.result(player1.move(), player2.move())).toEqual('Player 1 wins!')
  })

  it('P1: Scissors beats Paper', function(){
    player1 = jasmine.createSpyObj('player1', {'move': 'Scissors'})
    player2 = jasmine.createSpyObj('player2', {'move': 'Paper'})
    expect(game.result(player1.move(), player2.move())).toEqual('Player 1 wins!')
  })

  it('P1: Paper beats Rock', function(){
    player1 = jasmine.createSpyObj('player1', {'move': 'Paper'})
    player2 = jasmine.createSpyObj('player2', {'move': 'Rock'})
    expect(game.result(player1.move(), player2.move())).toEqual('Player 1 wins!')
  })

  it("P2: Rock beats Scissors", function(){
    player1 = jasmine.createSpyObj('player1', {'move': 'Scissors'})
    player2 = jasmine.createSpyObj('player2', {'move': 'Rock'})
    expect(game.result(player1.move(), player2.move())).toEqual('Player 2 wins!')
  })

  it("P2: Paper beats Rock", function(){
    player1 = jasmine.createSpyObj('player1', {'move': 'Rock'})
    player2 = jasmine.createSpyObj('player2', {'move': 'Paper'})
    expect(game.result(player1.move(), player2.move())).toEqual('Player 2 wins!')
  })

  it('P2: Scissors beats Paper', function(){
    player1 = jasmine.createSpyObj('player1', {'move': 'Paper'})
    player2 = jasmine.createSpyObj('player2', {'move': 'Scissors'})
    expect(game.result(player1.move(), player2.move())).toEqual('Player 2 wins!')
  })
})
