const game = require("./examples/game.json");
const dataAccess = require("./data-access.js");
//Insert
//insertGame(game)

//Get

const foundGame = dataAccess.getGame("1", "2");
console.log("Game:" + foundGame);
