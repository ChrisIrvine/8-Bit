import React, { Component } from 'react';
import '../assets/css/base.css';

function WhichBase (props) {
    if(props.baseLevel === 1) {
        return <div className="bg-base-1"/>
    } else if (props.baseLevel === 2) {
        return <div className="bg-base-2"/>
    } else if (props.baseLevel === 3) {
        return <div className="bg-base-3"/>
    } else {
        return <div className="bg-base-0"/>
    }
}

class Base extends Component {
    render() {
        return (
            <div className="base">
                <WhichBase baseLevel={this.props.game[this.props.currentGame].baseLevel}/>
            </div>
        )
    }
    
}

export default Base;