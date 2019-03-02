const express = require('express');
const app = express()
const port = 5582

app.use(express.static("public"));  //Assets folder

app.get("/api/game/", getGame)
app.post("/api/game/", postGame)

function getGame(req, res) {
    console.log(req.query.player1 + ", " + req.query.player2);
    res.send("Hello World!");

    //Get game id from ids

    //Check if this game exists
        //If yes, return it

        //If not, create a simple one
        //Commit to db
        //return to client
}

function postGame(req, res) {
    //TODO
}

app.listen(port, init);

function init() {
    console.log("listening!");
}