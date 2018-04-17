describe('game', function(){
  it('can calculate if the game is a draw', function(){
    var game = new Game()
    expect(game.result("Rock", "Rock")).toEqual('Its a draw!')
  })
})
