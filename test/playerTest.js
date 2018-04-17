describe('Player', function(){
  it('Player move is stored', function(){
    var player = new Player('Rock')
    expect(player.currentMove).toEqual('Rock')
  })
})
