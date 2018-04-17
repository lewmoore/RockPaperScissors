describe('Player', function(){
  it('Player can choose their move', function() {
    var player = new Player()
    expect(player.move('Rock')).toEqual('Rock')
  })
})
