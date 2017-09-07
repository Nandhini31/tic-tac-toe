(function(exports){

  function Grid(){
    this.new_grid = []
  }
  Grid.prototype.newGrid = function(){
    return this.grid = [[null,null,null],[null,null,null],[null,null,null]]
  }
  
  exports.Grid = Grid;
})(this);
