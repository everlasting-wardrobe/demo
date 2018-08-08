import React from 'react';
import KnobTop from './knobTop';
import lowKnob from './LowKnob.png';
import midKnob from './MidKnob.png';
import highKnob from './HighKnob.png';
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
            <img className={'knob-with-hoc-background'} src={backgroundImage} />
            <div className= {'knob-with-hoc-top'}>
                <KnobTop  />
            </div>
        </div>
    );
    
};

export default KnobWithHoc;