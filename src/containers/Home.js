import React, { Component } from 'react';
import '../assets/home.css';
import '../App.css';
import { Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


class Home extends Component {
    render() {
        return (
            <div className="bg">
                <div className="homepage">
                    <div className="welcome-text">
                        <p>Welcome to Icebreakers, the 'ice breaking' game! Disclaimer: no actual ice will be broken in the game, 
                            there is a significant risk of walking away with a new long-term friend</p>
                    </div>
                    <div className="player-number-bar">
                        <Input className="player1" focus placeholder="Player 1 Number"></Input>
                        <Input className="player2" focus placeholder="Player 2 Number"></Input>
                    </div>
                    <div className="new-continue">
                        <Button>Continue Game</Button>
                        <Button>New Game</Button>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Home;