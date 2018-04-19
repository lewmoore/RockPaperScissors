describe('Player', function(){
  it('Player move is stored', function(){
    var player = new Player('Rock')
    expect(player.currentMove).toEqual('Rock')
  })

  it('returns players current move', function(){
    var player = new Player('Rock')
    expect(player.move()).toEqual('Rock')
  })
})
