import React from 'react';
import sectionBox from './TopLeftSectionBox.png';
import headphoneJack from './HeadphonesJack.png';
import InputKnob from '../InputKnob/inputKnob';

import Knob from '../Knob/Knob';
import './leftTuners.css';

const leftTuners = (props) => {
    return (
        <div className={"left-tuners-container"}
            // style={{width: `${props.width * 100}vw`, fontSize: `${props.width * 1.875}vw`}}
            >
            <div className={"left-tuners-headphone-jack-wrapper"}>
                <img className={"left-tuners-headphone-jack"} src={headphoneJack} />
            </div>
            <div className={"left-tuners-knob-container"}>
                <Knob knobName="Low"/>
                <Knob knobName="Mid"/>
                <Knob knobName="High"/>
            </div>
            <div className={"left-tuners-inputknob-wrapper"}>
                <InputKnob />
            </div>
        </div>
    );
}

export default leftTuners;