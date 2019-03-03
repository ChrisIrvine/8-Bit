import React, { Component } from 'react';
import '../assets/css/home.css';
import '../App.css';
import { Button, Divider, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

function ToAvatarSelect (props) {
    if ((props.player1Name !== "") && (props.player2Name !== "") && (props.createdGame)) {
        console.log("rendering continue button")
        return <Button 
                    as={ Link }  
                    to="/avatar-select"
                >
                    Select Avatars
                </Button>
    } else {
        return null
    }
}

class Home extends Component {
    state = {
        player1Name: '',
        player2Name: '',
        createdGame: false
    }

    p1Change = (e) => {
        let p1Name = e.target.value;
        
        this.setState((prevState, props) => {
            return {
                player1Name: p1Name
            };
        })
    }

    p2Change = (e) => {
        let p2Name = e.target.value;

        this.setState((prevState, props) => {
            return {
                player2Name: p2Name
            };
        })
    }

    handleClick = () => {
        this.setState({
            createdGame: true
        })
    }

    render() {
        return (
            <div className="bg">
                <div className="homepage">
                    <div className="welcome-text">
                        <h1>Welcome to Icebreakers, the 'ice breaking' game! Disclaimer: no actual ice will be broken in the game, 
                            there is a significant risk of walking away with a new long-term friend</h1>
                    </div>
                    <Divider />
                    <Form onSubmit={() => this.props.createNewGame(this.state.player1Name, this.state.player2Name)}>
                        <Form.Group>
                            <Form.Input
                                type="text"
                                placeholder='Player 1 Name' 
                                name='player 1 name'
                                // value={this.state.player1Name}
                                onChange={this.p1Change}/>
                            <Form.Input 
                                type="text"
                                placeholder='Player 2 Name'
                                name='player 2 name' 
                                // value={this.state.player2Name}
                                onChange={this.p2Change}/>
                            <Form.Button
                                onClick={this.handleClick}
                                content='New Game'
                            />
                        </Form.Group>
                    </Form>
                    <ToAvatarSelect
                        player1Name={this.state.player1Name}
                        player2Name={this.state.player2Name}
                        createdGame={this.state.createdGame}
                    />
                    <Divider />
                    <Button 
                        as={ Link } 
                        to="/base"
                        onClick={this.props.continueGame}
                        className="continue">
                            Continue Game
                    </Button> 
                    {/* <div className="player-number-bar">
                        <Input className="player1" focus placeholder="Player 1 Name" onChange={}></Input>
                        <Input className="player2" focus placeholder="Player 2 Name" onChange={}></Input>
                    </div>
                    <Divider />
                    <Button 
                        as={ Link } to="/base" 
                        className="continue">Continue Game</Button> 
                    <a href="/avatar-select">
                        <Button className="new">New Game</Button>
                    </a> */}
                </div>
            </div> 
        )     
    }
}

export default Home;