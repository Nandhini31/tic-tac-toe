(function(exports){

  function Game(player1,player2,grid){
    this.player1 = new Player('X')
    this.player2 = new Player('O')
    this.grid = new Grid()
    this.current_player = this.player1

  }

  Game.prototype.playermove = function(x,y){
    this.grid.claimField(x,y,current_player.getsymbol())
  }



  exports.Game = Game;
})(this);
