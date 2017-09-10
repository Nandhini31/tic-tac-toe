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

  Grid.prototype.allFieldsClaimed = function(){
    var eachField = this.new_grid.every(function(row){
         return row.every(function(field){
           return field !== null;
         });
       });
       return eachField
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

  Grid.prototype.playerClaimedColumn = function(grid,symbol){
    var columnsArray = this.transposeGrid(grid)
    var columnsClaimed = this.checkEachRow(columnsArray,symbol)
    return columnsClaimed.includes(true)
    }

 Grid.prototype.checkLeftDiagonal = function(grid,symbol){
    var ldiagonal = this.getLeftDiagonal(grid)
    return ldiagonal.every(function(field){
        return field == symbol
    });
 }


 Grid.prototype.checkRightDiagonal = function(grid,symbol){
    var rdiagonal = this.getRightDiagonal(grid)
    return rdiagonal.every(function(field){
        return field == symbol
    });
 }

 Grid.prototype.getLeftDiagonal =function(grid){
   var ldiagonal = [];
    for(var i=0;i<=2;i++){
      ldiagonal.push(grid[i][i])
    }
    return ldiagonal
 }

 Grid.prototype.getRightDiagonal = function(grid){
   var rdiagonal = [];
   for(var i=0;i<=2;i++){
     for(var j=0;j<=2;j++){
       if(i+j === grid.length - 1){
       rdiagonal.push(grid[i][j])
     }
    }
   }
   return rdiagonal
 }

Grid.prototype.transposeGrid = function(grid){
  return Object.keys(grid[0]).map(function (column) {
    return grid.map(function (row) {
      return row[column];
    });
  });
}

  exports.Grid = Grid;
})(this);
