var Board = require("./board");

function Game(reader) {
  this.player1 = "x";
  this.player2 = "o";
  this.board = new Board();
  this.reader = reader;
  this.currPlayer = this.player1;
}

Game.prototype.oppPlayer = function () {
  this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1;
};

Game.prototype.promptMove = function (callback) {
  this.board.print();
  var that = this;

  this.reader.question("Where does " + this.currPlayer + " want to move? Format: x,y",
                       function (answer) {
                         var x = parseInt(answer[0]);
                         var y = parseInt(answer[2]);
                         that.board.move(that.currPlayer, [x,y]);
                         callback();
                       });
};

Game.prototype.run = function (completionCallback) {
  var that = this;
  this.promptMove(function (){
    if (!that.board.isWon() && !that.board.isTie()) {
      that.oppPlayer();
      that.run(completionCallback);
    }
    else {
      completionCallback();
    }
  });
};

Game.prototype.winner = function () {
  if (this.board.isWon()) {
    return this.currPlayer;
  }
};

module.exports = Game;
