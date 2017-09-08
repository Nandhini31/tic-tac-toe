describe("Grid", function(){

  var grid;

  beforeEach(function(){
    grid = new Grid();
  });

  it('is an instance of Grid',function() {
    expect(grid instanceof Grid).toBe(true);
  });

  it('initialized with an empty 2d array',function() {
    expect(grid.newGrid()).toEqual(jasmine.any(Array));
  });

  it('player is able to claim a field',function() {
    grid.claimField(0,2,'X');
    expect(grid.new_grid[0][2]).toEqual('X');
  });

  it('player is able to claim a field',function() {
    grid.claimField(0,2,'X');
    expect(grid.isfieldClaimed(0,0)).toBe(false);
  });

  it('player is able to claim a field',function() {
    grid.claimField(0,1,'X');
    expect(grid.isfieldClaimed(0,1)).toBe(true);
  });

  it('throws error if a field location > 2',function(){
      expect(function(){grid.checkFieldLimit(0,4)}).toThrow("Chosen Field is outside the Grid");
  });

});
