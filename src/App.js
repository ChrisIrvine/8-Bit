import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import AvatarSelect from './containers/AvatarSelect';
import Base from './containers/Base';
import Facade from "./game/Facade";

const START_STATE = 0;
const CREATE_STATE = 1;
const BASE_STATE = 2;
const GAME_STATE = 3;

class App extends Component {
    constructor(props) {
        super(props)

        //TODO Is this needed
        //this.state = {data: null};
        this.gameOver = this.gameOver.bind(this);
        this.state = {
            selectedId: 0,
            game: null,
            fsmState: START_STATE
        };
    }

    //   componentDidMount() {
    //     this._getData();
    //   }

    getGame = async (firstID, secondID) => {
        try {
            const url = "http://localhost:5582/api/game?player1=" + firstID + "&player2=" + secondID;
            console.log(url);
            const res = await fetch(url);
            console.log(res);
            const game = await res.json();
            if (game.players[0].avatar < 0) {
                //Need to create new game!
                this.setState({
                    game: game,
                    fsmState: CREATE_STATE
                });
            } else {
                this.setState({
                    game: game,
                    fsmState: BASE_STATE
                });
            }
        } catch(err) {
            console.error("Problem with API request" + err);
        }
        // const game = {
        //     _id: "5c7aa652f589b65479cbbd5e",
        //     player1Id: "1",
        //     player2Id: "2",
        //     players: [
        //         { name: "John", "avatar": 1 },
        //         { name: "Ariana", "avatar": 6 }],
        //     baseLevel: 3,
        //     xp: 5000
        // }
        // this.setState({
        //     game: game,
        //     fsmState: BASE_STATE
        // });
    }


    //  _getData = () => {
    //     fetch("http://localhost:5582/api/game")
    //     .then(response => {
    //         if (response.ok) {
    //         return response;
    //       } else {
    //         let errorMessage = "something broke", error = new Error(errorMessage);
    //         throw(error);
    //       }
    //     })
    //     .then(response => response.json())
    //     .then(json =>{
    //         console.log("adding" + json);
    //         this.setState({ data: json})
    //     });
    //   }

    // callBackendAPI = async () => {
    //   try {
    //   const response = await fetch('http://localhost:5582/api/game');
    //   const body = await response.json();
    //   console.log(body);
    //   this.setState({data: body});
    //   } catch (err) {
    //     console.error(err);
    //   }

    // if (response.status !== 200) {
    //   throw Error(body.message) 
    // }
    // return body;
    // }

    // createNewGame = (player1, player2) => {
    //     this.setState({
    //         selectedId: 1,
    //         game: [
    //             ...this.state.game,
    //             {
    //                 id: 1, 
    //                 players: [
    //                     { name: player1, avatar: -1 },
    //                     { name: player2, avatar: -1 }
    //                 ],
    //                 baseLevel: 0, xp: 0
    //             }
    //         ]
    //     });
    // }

    submitGame = async (game) => {
        const firstID = this.state.game.player1Id;
        const secondID = this.state.game.player2Id;
        try {
            const url = "localhost:5582/api/game?player1=" + firstID + "&player2=" + secondID;
            console.log(url);
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(this.state.game)
            });
            console.log(await res.json());
        } catch(err) {
            console.error("Problem with API request" + err);
        }
    }

    registerAvatars = (player1Avatar, player2Avatar) => {;

        //TODO fake
        this.setState({
            fsmState: BASE_STATE
        })
    }

    continueGame = () => {
        this.setState({
            selectedId: 0
        })
    }

    playGame = () => {
        this.setState({
            fsmState: GAME_STATE
        });
    }

    gameOver(finalScore) {
        console.log("Score received: " + finalScore);
        const newXp = this.state.game.xp + finalScore;
        //TODO use score
        this.setState({
            game: {
                xp: newXp
            },
            fsmState: BASE_STATE
        });
        this.submitGame(this.state.game);
    }

    render() {

        switch (this.state.fsmState) {
            case START_STATE:
                return (
                    <Home
                        createNewGame={this.getGame}
                        continueGame={this.getGame}
                        game={this.state.game} />
                );
            case CREATE_STATE:
                return (
                    <AvatarSelect {...this.props}
                        game={this.state.game}
                        currentGame={this.state.selectedId}
                        registerAvatars={this.registerAvatars} />);
            case BASE_STATE:
                return (
                    <Base {...this.props}
                        game={this.state.game}
                        playGame={this.playGame} />
                );
            case GAME_STATE:
                return (
                    <div className="gameContainer">
                        <div className="left column"></div>
                        <div className="centre_game column">
                            <Facade
                                game={this.state.game}
                                gameOver={this.gameOver}
                                currentGame={this.state.selectedId} />
                        </div>
                        <div className="right column"></div>
                    </div>
                );
        }
    }
}

export default App;
