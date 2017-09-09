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
    this.checkFieldLimit(x,y)
    return this.new_grid[x][y] = symbol
  }

  Grid.prototype.isFieldClaimed = function(x,y){
    return this.new_grid[x][y] !== null
  }

  Grid.prototype.checkFieldLimit  = function(x,y){
    if(x > 2 || y > 2) {
      throw "Chosen Field is outside the Grid";
    }
  }

  Grid.prototype.playerClaimedRow = function(grid,symbol){
    var each_row = this.checkEachRow(grid,symbol)
    return each_row.includes(true);
    };


  Grid.prototype.checkEachRow = function(grid,symbol){
      return grid.map(function(row){
        return row.every(function(field){
            return field === symbol
            });
        });
    };

 Grid.prototype.checkLeftDiagonal = function(grid,symbol){
    var ldiagnol =[grid[0][0],grid[1][1],grid[2][2]]
    return ldiagnol.every(function(field){
        return field == symbol
    });
 }

 Grid.prototype.checkRightDiagonal = function(grid,symbol){
    var rdiagnol =[grid[2][0],grid[1][1],grid[0][2]]
    return rdiagnol.every(function(field){
        return field == symbol
    });
 }

  exports.Grid = Grid;
})(this);
