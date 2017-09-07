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

  exports.Grid = Grid;
})(this);
