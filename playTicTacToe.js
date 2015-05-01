var TTT = require("./index");

var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var g = new TTT.Game(reader);

g.run(function () {
  g.board.print();
  if(g.board.isTie()) {
    console.log("Tie!");
  }
  else {
    console.log(g.winner() + " Wins! Game Over!");
  }
  reader.close();
});
