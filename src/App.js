import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import AvatarSelect from './containers/AvatarSelect';
import Base from './containers/Base';
import Facade from "./game/Facade";

class App extends Component {
    constructor(props) {
        super(props)

        //TODO Is this needed
        //this.state = {data: null};
        this.gameOver = this.gameOver.bind(this);
    }

    //   componentDidMount() {
    //     this._getData();
    //   }


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
    //}

    state = {
        selectedId: 0,
        game: [
            {
                id: 0, players: [
                    { name: "Jack", avatar: 0 },
                    { name: "Jill", avatar: 3 }
                ], baseLevel: 3, xp: 500
            }
        ]
    }

    createNewGame = (player1, player2) => {
        this.setState({
            selectedId: 1,
            game: [
                ...this.state.game,
                {
                    id: 1, 
                    players: [
                        { name: player1, avatar: -1 },
                        { name: player2, avatar: -1 }
                    ],
                    baseLevel: 0, xp: 0
                }
            ]
        });
    }

    registerAvatars = (player1Avatar, player2Avatar) => {
        console.log("Registering Avatars")
        let holder = JSON.parse(JSON.stringify(this.state.game));

        holder[1].players[0].avatar = player1Avatar;
        holder[1].players[1].avatar = player2Avatar;

        this.setState({
            game: holder
        })
    }

    continueGame = () => {
        this.setState({
            selectedId: 0
        })
    }

    gameOver(finalScore) {
        console.log("Score received: " + finalScore);
        //TODO use score
        this.setState()
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div className="content-section">
                        <Route
                            exact path="/"
                            render={() => <Home
                                createNewGame={this.createNewGame}
                                continueGame={this.continueGame}
                                games={this.state.game} />} />
                        <Route
                            path="/avatar-select"
                            render={(props) => <AvatarSelect {...props}
                                game={this.state.game}
                                currentGame={this.state.selectedId}
                                registerAvatars={this.registerAvatars} />} />
                        <Route path="/base"
                            render={(props) => <Base {...props}
                                game={this.state.game}
                                currentGame={this.state.selectedId} />} />
                        <Route path="/game"
                            render={(props) => (
                                <div className="gameContainer">
                                    <div className="left column"></div>
                                    <div className="centre_game column">
                                        <Facade  {...props}
                                            gameOver={this.gameOver}
                                            currentGame={this.state.selectedId} />
                                    </div>
                                    <div className="right column"></div>
                                </div>
                            )} />

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
