(function(exports){

  function Game(player1,player2,grid){
    this.player1 = new Player('X')
    this.player2 = new Player('O')
    this.grid = new Grid()
  }
  Grid.prototype.newGrid = function(){
    return this.grid = [[null,null,null],[null,null,null],[null,null,null]]
  }

  exports.Game = Game;
})(this);
