(function(exports){
  function Player(symbol){
    this.symbol = symbol
  }
  Player.prototype.symbol = function () {
    return this.symbol
  };
  exports.Player = Player;
})(this);
