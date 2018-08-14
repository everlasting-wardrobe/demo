import React, { Component } from 'react';
import nameWindow from '../../assets/img/NameWindow.png';
import propTypes from 'prop-types';

import './nameCard.css';

class NameCard extends Component {
    
    render() {
        return (
            <div className="name-card-set" 
                style={{width: `${this.props.width * 100}vw`, fontSize: `${this.props.width * 1.875}vw`}}>
                <div className="name-card-wrapper" >
                    <div className="name-card-label-wrapper">{"NAME"}</div>
                    <div className="name-card-window-wrapper">
                        <img className="name-card-window" src={nameWindow} />
                        <div className="name-card-value">{this.props.userName}</div>
                    </div>
                </div>
            </div>
        );
    }
}

NameCard.defaultProps = {
    userName: "User Name",
}

NameCard.protoType = {
    userName: propTypes.string
}

export default NameCard;