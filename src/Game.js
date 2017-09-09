(function(exports){

  function Game(player1,player2,grid){
    this.player1 = new Player('X')
    this.player2 = new Player('O')
    this.grid = new Grid()
    this.current_player = this.player1
  }

  Game.prototype.playerMove = function(x,y){
    var symbol = this.current_player.getSymbol()
    this.grid.claimField(x,y,symbol)
    this.SwitchPlayers();
  }

  Game.prototype.SwitchPlayers = function(x,y){
    (this.current_player == this.player1) ? (this.current_player = this.player2) : (this.current_player = this.player1)
  }


  exports.Game = Game;
})(this);
