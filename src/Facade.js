import React, { Component } from 'react';
import { Reacteroids } from './Reacteroids';

/**
 * A facade class for a game. At the moment only supports Asteroids.
 */
export class Facade extends Component {
    constructor() {
        super();
        this.state = {
            score: -1,
            gameStarted: false
        }
        this.gameOver = this.gameOver.bind(this);
    }

    gameOver(finalScore) {
        console.log("Game over");
        this.setState({score: finalScore});
    }

    render() {
        console.log(this.state.score + ", " + this.state.gameStarted);
        if (this.state.score === -1 && this.state.gameStarted === false) {
            return (
                <div>
                    <p style={{color:"#000000"}}>Start the game!</p>
                    <button onClick={() => this.setState({gameStarted: true}) }>Play</button>
                </div>
            );
        }
        if (this.state.score === -1 && this.state.gameStarted === true) {
            console.log("Render game");
            //Render the game
            return(
                <Reacteroids gameOver={this.gameOver}/>
            );
        }
        console.log("Render the end");
        //Render post-game
        return (
            <div>
                <p style={{color:"#000000"}}>Your score was: {this.state.score}</p>
            </div>
        );
    }
}