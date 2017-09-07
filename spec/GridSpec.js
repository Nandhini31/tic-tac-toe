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

});
