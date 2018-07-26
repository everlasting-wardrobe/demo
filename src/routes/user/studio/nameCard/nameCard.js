import React from 'react';
import nameWindow from './NameWindow.png';
import './nameCard.css';

const nameCard = ({userName}) => {
    return (
        <div className="name-card-wrapper">
            <div className="name-card-label-wrapper">NAME</div>
            <div className="name-card-window-wrapper">
                <img className="name-card-window" src={nameWindow} />
                　<div className="name-card-value">{userName}</div>
            </div>
        </div>
    );
}

export default nameCard;