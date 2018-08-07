import React from 'react';
import separator from './PanelBoardSeparator.png';
import NameCard from '../nameCard/nameCard';
import LeftTuners from './leftTuners/leftTuners';
import RightButtons from './RightButtons/RightButtons';
import './topPanel.css';


const topPanel = () => {
    return (
        <div className="top-panel-container">
            <div className="top-panel-wrapper">
                <div className="top-panel-left">
                    <LeftTuners width={0.3}/>
                </div>
                <div className="top-panel-mid">
                    <NameCard width={0.3}/>
                </div>
                <div className="top-panel-right">
                    <RightButtons />
                </div>
            </div>
            <img className="top-panel-separator" src={separator} />
        </div>
    );
};

export default topPanel;