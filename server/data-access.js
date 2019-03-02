const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const user = encodeURIComponent("8bitUser");
const pw = encodeURIComponent("8bitPW");
const url = 'mongodb://' + user + ":" + pw + '@vik.host.cs.st-andrews.ac.uk:27017/?authSource=8bit';
const dbName = "8bit";

console.log(url);

/**
 * Inserts a game to the database
 * NOTE!! Has NO error checking!
 * @param {*} game 
 */
exports.insertGame =  async function insertGame(game) {
    let con;
    try {
        const client = new MongoClient(url);
        con = await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("games");

        res = await collection.insertOne(game);
        console.log(res);
    } catch (err) {
        console.error(err.stack);
    }
    if (con) {
        con.close();
    }
    return game;  
}

/**
 * Replaces a game in the database with the given ids
 * @param {*} game 
 */
exports.replaceGame = async function replaceGame(player1Id, player2Id, game) {
    let con;
    try {
        const client = new MongoClient(url);
        con = await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("games");

        await collection.replaceOne(
            { "player1Id": player1Id, "player2Id": player2Id }, 
            game
        );
    } catch (err) {
        console.error(err.stack);
    }
    if (con) {
        con.close();
    }
    console.log("Replaced");
    return game;
}

/**
 * Gets a game from the database, or null if it doesn't exist
 * @param {*} player1Id the ID of the first player
 * @param {*} player2Id the ID of the second player
 */
exports.getGame = async function getGame(player1Id, player2Id) {
    let game = null;
    let con;
    try {
        const client = new MongoClient(url);
        con = await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("games");

        game = await collection.findOne(
            { "player1Id": player1Id, "player2Id": player2Id }
        );
    } catch (err) {
        console.error(err.stack);
    }
    if (con) {
        con.close();
    }
    console.log(game);
    return game;
}
