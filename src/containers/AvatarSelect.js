import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import FireSprite from '../assets/images/sprite-fire.png';
import EarthSprite from '../assets/images/sprite-earth.png';
import MysticSprite from '../assets/images/sprite-mystic.png';
import IceSprite from '../assets/images/sprite-ice.png';

class AvatarSelect extends Component {
    render() {
        return(
            <div className="avatar-select">
                <div className="player-selection">
                </div>
                <div className="avatar-preview">
                    <Image src={FireSprite} size="medium"></Image>
                    <Image src={EarthSprite} size="medium"></Image>
                    <Image src={MysticSprite} size="medium"></Image>
                    <Image src={IceSprite} size="medium"></Image>
                </div>
            </div>
        )
    }
}

export default AvatarSelect;