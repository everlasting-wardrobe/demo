import React from 'react';
//import sectionBox from './TopLeftSectionBox.png';
import headphoneJack from './HeadphonesJack.png';
import InputKnob from '../inputKnobWithHoc/inputKnobWithHoc';
import {withPanelBackground} from '../../util/util';
import Knob from '../knobWithHoc/knobWithHoc';
import KnobWithHoc from '../knobWithHoc/knobWithHoc';
import Test from './test';
//import './leftTuners.css';

const LeftTuners = (props) => {
    return (
        <div className={"left-tuners-container"}
            // style={{width: `${props.width * 100}vw`, fontSize: `${props.width * 1.875}vw`}}
            >
            <div className={"left-tuners-headphone-jack-wrapper"}>
                <img className={"left-tuners-headphone-jack"} src={headphoneJack} />
            </div>
            <div className={"left-tuners-knob-container"}>
                <KnobWithHoc  knobName="Low" />
                <KnobWithHoc knobName="Mid"/>
                <KnobWithHoc knobName="High"/>
            </div>
            <div className={"left-tuners-inputknob-wrapper"}>
                <InputKnob />
            </div>

        </div>
    );
}

export default withPanelBackground(LeftTuners);
