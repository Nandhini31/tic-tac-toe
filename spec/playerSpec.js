describe("Player", function(){

  var player;

  beforeEach(function(){
    player = new Player('O')
  });

  it('get players symbol',function() {
    expect(player.getSymbol()).toEqual('O')
  });

});
