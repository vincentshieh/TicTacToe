function Board() {
  this.grid = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
  this.winner = null;
}

Board.WINDIRS = [[[0,0], [0,1], [0,2]], [[1,0], [1,1], [1,2]], [[2,0], [2,1], [2,2]],
                 [[0,0], [1,1], [2,2]], [[0,2], [1,1], [2,0]],
                 [[0,0], [1,0], [2,0]], [[0,2], [1,2], [2,2]], [[0,1], [1,1], [2,1]]];

Board.prototype.isWon = function () {
  for(var i = 0; i < 8; i++) {
    var wx1 = Board.WINDIRS[i][0][0];
    var wy1 = Board.WINDIRS[i][0][1];
    var wx2 = Board.WINDIRS[i][1][0];
    var wy2 = Board.WINDIRS[i][1][1];
    var wx3 = Board.WINDIRS[i][2][0];
    var wy3 = Board.WINDIRS[i][2][1];
    if(this.grid[wx1][wy1] === this.grid[wx2][wy2] &&
       this.grid[wx3][wy3] === this.grid[wx2][wy2] &&
       this.grid[wx1][wy1] !== '-') {
      this.winner = this.grid[wx1][wy1];
      return true;
    }
  }
  return false;
};

Board.prototype.isTie = function () {
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      if(this.grid[i][j] === '-') {
        return false;
      }
    }
  }
  if(!this.isWon()) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.validMove = function (loc) {
  var checkItem = this.grid[loc[0]][loc[1]];
  return (checkItem === '-');
};

Board.prototype.move = function (player, loc) {
  if (this.validMove(loc)) {
    this.grid[loc[0]][loc[1]] = player;
  }
  else {
    console.log("Invalid Move!");
  }
};

Board.prototype.print = function () {
  console.log(this.grid[0]);
  console.log(this.grid[1]);
  console.log(this.grid[2]);
};

module.exports = Board;
