(function(exports){
  function Player(symbol){
    this.symbol = symbol
  }
  Player.prototype.getsymbol = function () {
    return this.symbol
  };
  exports.Player = Player;
})(this);
