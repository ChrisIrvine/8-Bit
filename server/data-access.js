const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const user = encodeURIComponent("8bitUser");
const pw = encodeURIComponent("8bitPW");
const url = 'mongodb://' + user + ":" + pw + '@vik.host.cs.st-andrews.ac.uk:27017/?authSource=8bit';
const dbName = "8bit";

console.log(url);
const client = new MongoClient(url);

/**
 * Inserts a game to the database
 * NOTE!! Has NO error checking!
 * @param {*} game 
 */
exports.insertGame =  async function insertGame(game) {
    client.connect(function (err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);
        const collection = db.collection("games");
        collection.insertOne(game, function(err, res) {
            if (err) throw err;
            console.log("Inserted");
        });
        client.close();
    });  
}

/**
 * Replaces a game in the database with the given ids
 * @param {*} game 
 */
exports.replaceGame = async function replaceGame(game, player1Id, player2Id) {
    client.connect(function (err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);
        const collection = db.collection("games");
        collection.replaceOne(
            { "player1Id": player1Id, "player2Id": player2Id }, 
            game, 
            function(err, res) {
            if (err) throw err;
            console.log("Replaced");
        });
        client.close();
    }); 
}

/**
 * Gets a game from the database, or null if it doesn't exist
 * @param {*} player1Id the ID of the first player
 * @param {*} player2Id the ID of the second player
 */
exports.getGame = async function getGame(player1Id, player2Id) {
    let game = null;
    client.connect(function (err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);
        const collection = db.collection("games");
        collection.findOne(
            { "player1Id": player1Id, "player2Id": player2Id }, 
            function(err, res) {
            if (err) throw err;
            console.log("Lookup done\n" + JSON.stringify(res));
            game = res;
        });
        client.close();
    }); 
    return game;
}
