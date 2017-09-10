(function(exports){

  function Game(player1,player2,grid){
    this.player1 = new Player('X')
    this.player2 = new Player('O')
    this.grid = new Grid()
    this.game_grid = this.grid.newGrid()
    this.current_player = this.player1
    console.log("current player is " + this.current_player.symbol)
  }

  Game.prototype.playerMove = function(x,y){
    var symbol = this.current_player.getSymbol();
    if(this.grid.isFieldClaimed(x,y){
      console.log("This field already taken")
    }
    else {
      this.grid.claimField(x,y,symbol);
        if(this.playerWon()){
          console.log(this.current_player + "won, game over!")
          return;
        }
      else {
        this.SwitchPlayers();
        }
      }
    }

  Game.prototype.SwitchPlayers = function(x,y){
    (this.current_player == this.player1) ? (this.current_player = this.player2) : (this.current_player = this.player1)
  }

  Game.prototype.fieldstaken = function(){
    var over = this.grid.allFieldsClaimed();
    return over;
  }

  Game.prototype.playerWon = function(){
    var symbol = this.current_player.getSymbol();
     var win =  this.grid.playerClaimedRow(this.game_grid,symbol)||
                this.grid.playerClaimedColumn(this.game_grid,symbol)||
                this.grid.checkLeftDiagonal(this.game_grid,symbol)||
                this.grid.checkRightDiagonal(this.game_grid,symbol)
    return win
  }

  Game.prototype.fieldAlreadytaken = function(){
    var allTaken = this.grid.isFieldClaimed();
  }

  exports.Game = Game;
})(this);
