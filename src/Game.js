(function(exports){

  function Game(player1,player2,grid){
    this.player1 = new Player('X')
    this.player2 = new Player('O')
    this.grid = new Grid()
    this.current_player = this.player1
    this.opponent_player = this.player2
  }

  Game.prototype.playerMove = function(x,y){
    var symbol = this.current_player.getSymbol()
    this.grid.claimField(x,y,symbol)
  }

  exports.Game = Game;
})(this);
