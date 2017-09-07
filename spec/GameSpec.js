describe("Game", function(){

  var player1, player2, grid

  beforeEach(function(){
    player1 = new Player('X')
    player2 = new Player('O')
    grid = new Grid();
    game = new Game(player1,player2,grid)
  });

  it('is an instance of Game',function() {
    expect(game instanceof Game).toBe(true);
  });



  });
