const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const user = encodeURIComponent("8bitUser");
const pw = encodeURIComponent("8bitPW");
const url = 'mongodb://' + user + ":" + pw + '@vik.host.cs.st-andrews.ac.uk:27017/?authSource=8bit';
const dbName = "8bit";

console.log(url);
const client = new MongoClient(url);

function insertGame(game) {
    const res;
    client.connect(function (err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);
        const collection = db.collection("games");
        res = collection.insertOne(game);
    
        client.close();
    });
    return res.acknowledged;    
}

const game = require("./examples/game.json");
insertGame(game)