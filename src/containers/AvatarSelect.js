import React, { Component } from 'react';
import { Image, ImageGroup, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import FireSprite from '../assets/images/sprite-fire.png';
import EarthSprite from '../assets/images/sprite-earth.png';
import MysticSprite from '../assets/images/sprite-mystic.png';
import IceSprite from '../assets/images/sprite-ice.png';
import '../assets/css/avatar-select.css';

function ReadyToContinue (props) {
    if ((props.player1Avatar !== -1) && (props.player2Avatar !== -1)) {
        console.log("rendering continue button")
        return <Button className="avatar-continue">Continue</Button>
    } else {
        return null
    }
}

class AvatarSelect extends Component {
    state = {
        fsDisabled: false,
        esDisabled: false,
        msDisabled: false,
        isDisabled: false,
        player1Avatar: -1,
        player2Avatar: -1
    }

    handlefsToggleClick = () => {        
        if(this.state.player1Avatar === -1) {
            this.setState(state => ({
                fsDisabled: !state.fsDisabled,
                player1Avatar: 0
            }));
        } else if (this.state.player2Avatar === -1) {
            this.setState(state => ({
                fsDisabled: !state.fsDisabled,
                player2Avatar: 0
            }));
        } else if (this.state.player1Avatar !== -1 && this.state.player2Avatar !== -1){
            console.log("Both players have chosen characters");
        } else {
            console.log("Avatar Taken")
        }
    }

    handleesToggleClick = () => {
        if(this.state.player1Avatar === -1) {
            this.setState(state => ({
                esDisabled: !state.esDisabled,
                player1Avatar: 1
            }));
        } else if (this.state.player2Avatar === -1) {
            this.setState(state => ({
                esDisabled: !state.esDisabled,
                player2Avatar: 1
            }));
        } else if (this.state.player1Avatar !== -1 && this.state.player2Avatar !== -1){
            console.log("Both players have chosen characters");
        } else {
            console.log("Avatar Taken")
        }
    }

    handlemsToggleClick = () => {
        if(this.state.player1Avatar === -1) {
            this.setState(state => ({
                msDisabled: !state.msDisabled,
                player1Avatar: 2
            }));
        } else if (this.state.player2Avatar === -1) {
            this.setState(state => ({
                msDisabled: !state.msDisabled,
                player2Avatar: 2
            }));
        } else if (this.state.player1Avatar !== -1 && this.state.player2Avatar !== -1){
            console.log("Both players have chosen characters");
        } else {
            console.log("Avatar Taken")
        }        
    }

    handleisToggleClick = () => {
        if(this.state.player1Avatar === -1) {
            this.setState(state => ({
                isDisabled: !state.isDisabled,
                player1Avatar: 3
            }));
        } else if (this.state.player2Avatar === -1) {
            this.setState(state => ({
                isDisabled: !state.isDisabled,
                player2Avatar: 3
            }));
        } else if (this.state.player1Avatar !== -1 && this.state.player2Avatar !== -1){
            console.log("Both players have chosen characters");
        } else {
            console.log("Avatar Taken")
        }
    }

    render() {
        return(
            <div className="avatar-bg">
                <div className="avatar-select">
                    <div className="avatar-text">
                        <h2>Choose your avatars for this adventure. Player 1 select first, then player 2 select.</h2>
                    </div>
                    <div className="avatar-preview">
                    <ImageGroup size="small">
                        <Image 
                            src={FireSprite} 
                            onClick={this.handlefsToggleClick} 
                            disabled={this.state.fsDisabled}
                        />
                        <Image 
                            src={EarthSprite} 
                            onClick={this.handleesToggleClick} 
                            disabled={this.state.esDisabled}
                        />
                        <Image 
                            src={MysticSprite} 
                            onClick={this.handlemsToggleClick} 
                            disabled={this.state.msDisabled}
                        />
                        <Image 
                            src={IceSprite} 
                            onClick={this.handleisToggleClick} 
                            disabled={this.state.isDisabled}
                        />
                    </ImageGroup>
                    </div>
                    <ReadyToContinue player1Avatar={this.state.player1Avatar} player2Avatar={this.state.player2Avatar}/>
                </div>
            </div>           
        )
    }
}

export default AvatarSelect;