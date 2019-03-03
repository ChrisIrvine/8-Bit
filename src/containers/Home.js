import React from 'react';
import '../assets/css/home.css';
import '../App.css';
import { Input, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

const Home = ( props ) => {
    return (
        <div className="bg">
            <div className="homepage">
                <div className="welcome-text">
                    <h1>Welcome to Icebreakers, the 'ice breaking' game! Disclaimer: no actual ice will be broken in the game, 
                        there is a significant risk of walking away with a new long-term friend</h1>
                </div>
                <div className="player-number-bar">
                    <Input className="player1" focus placeholder="Player 1 Number"></Input>
                    <Input className="player2" focus placeholder="Player 2 Number"></Input>
                </div>
                <Divider /> {/*create custom divider with is a series of 8-bit snow flakes*/}
                <Button as={ Link } to="/base" className="continue">Continue Game</Button> {/*function that access the correct game file*/}
                <a href="/avatar-select">
                    <Button className="new">New Game</Button>
                </a> {/*Moves to page that adds the entry for names*/}
            </div>
        </div> 
    )
}

export default Home;