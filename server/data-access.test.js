const game = require("./examples/game.json");
const dataAccess = require("./data-access.js");
//Insert
//insertGame(game)

//Get
dataAccess.getGame("1", "2").then((foundGame) => {
    console.log("Game:" + foundGame);
});

// dataAccess.replaceGame("1", "2", game).then(() => {
//     console.log("Replace done");
// });

dataAccess.insertGame()