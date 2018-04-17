describe('Player', function(){
  // it('Player can choose their move', function() {
  //   var player = new Player()
  //   expect(player.move('Rock')).toEqual('Rock')
  // })

  it('Player move is stored', function(){
    var player = new Player('Rock')
    expect(player.currentMove).toEqual('Rock')
  })
})
