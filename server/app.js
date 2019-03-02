const express = require('express');
const dataAccess = require("./data-access.js");

const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 5582
app.use(express.static("public"));  //Assets folder

app.get("/api/game/", getGame);
app.post("/api/game/", postGame);

async function getGame(req, res) {
    console.log(req.query.player1 + ", " + req.query.player2);

    //Get game id from ids
    let firstId = req.query.player1;
    let secondId = req.query.player2;
    if (parseInt(firstId) > parseInt(secondId)) {
        //Swap around
        const temp = firstId;
        firstId = secondId;
        secondId = temp;
    }

    let game = null;
    //Check if this game exists
    foundGame = await dataAccess.getGame(firstId, secondId);
    if (foundGame == null) {
        //create game
        game = {
            "player1Id": firstId,
            "player2Id": secondId,
            "players": [
                {
                    "name": "",
                    "avatar": -1
                },
                {
                    "name": "",
                    "avatar": -1
                }
            ],
            "baseLevel": 0,
            "xp": 0
        }
        await dataAccess.insertGame(game);
    } else {
        game = foundGame;
    }
    res.send(game);
}

async function postGame(req, res) {
    const game = req.body;

    let firstId = req.query.player1;
    let secondId = req.query.player2;
    if (parseInt(firstId) > parseInt(secondId)) {
        //Swap around
        const temp = firstId;
        firstId = secondId;
        secondId = temp;
    }

    await dataAccess.replaceGame(firstId, secondId, game);
    res.sendStatus(200);
}

app.listen(port, init);

function init() {
    console.log("listening!");
}