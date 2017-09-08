(function(exports){

  function Grid(){
    this.new_grid = [[null,null,null],
                      [null,null,null],
                      [null,null,null]]
  }
  Grid.prototype.newGrid = function(){
      return this.new_grid
  }
  Grid.prototype.claimField = function(x,y,symbol){
    return this.new_grid[x][y] = symbol
  }

  Grid.prototype.isfieldClaimed = function(x,y){
    return this.new_grid[x][y] !== null
  }

  Grid.prototype.checkFieldLimit  = function(x,y){
    if(x > 2 || y > 2) {
      throw new Error('Chosen Field is outside the Grid');
    }
  }

  exports.Grid = Grid;
})(this);
