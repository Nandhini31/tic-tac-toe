describe("Game", function(){

  var player1, player2, grid

  beforeEach(function(){
    player1 = new Player('X')
    player2 = new Player('O')
    grid = new Grid();
    game = new Game(player1,player2,grid)
    current_player = player1
  });

  it('is an instance of Game',function() {
    expect(game instanceof Game).toBe(true);
  });

  it('can switch players',function(){
    game.SwitchPlayers();
    expect(game.current_player).toEqual(player2)
  });

  it('game over is false',function(){
    expect(game.fieldstaken()).toEqual(false)
  });

  it('has current player won',function(){
      expect(game.playerWon()).toEqual(false)
  });

  });
