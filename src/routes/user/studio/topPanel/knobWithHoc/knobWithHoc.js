import React from 'react';
import KnobTop from './knobTop';
import lowKnob from '../../assets/img/LowKnob.png';
import midKnob from '../../assets/img/MidKnob.png';
import highKnob from '../../assets/img/HighKnob.png';
import './knobWithHoc.css';

const KnobWithHoc = (props) => {
    
    let backgroundImage = null;
    switch (props.knobName) {
        case 'Low':
            backgroundImage = lowKnob;
            break;
        case 'Mid':
            backgroundImage = midKnob;
            break;
        case 'High':
            backgroundImage = highKnob;
            break;
        default:
            backgroundImage = lowKnob;
    }   
    
    return (
        <div className={'knob-with-hoc-container'}>
            <img className={'knob-with-hoc-background'} src={backgroundImage} alt={""}/>
            <div className={'knob-with-hoc-top'}>
                <KnobTop  />
            </div>
        </div>
    );
    
};

export default KnobWithHoc;