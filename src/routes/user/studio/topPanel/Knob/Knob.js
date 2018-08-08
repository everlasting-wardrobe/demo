import React, { ReactDOM, Component } from 'react';
import lowKnob from './LowKnob.png';
import midKnob from './MidKnob.png';
import highKnob from './HighKnob.png';
import knobTopSpinner from './KnobTopSpinning.png';

import './knob.css';

class Knob extends Component {
    state = {
        initialAngle: 0
    };

    angleCalculator = (transformInfo) => {
        let values = transformInfo.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');
        const a = values[0];
        const b = values[1];
        const scale = Math.sqrt(a*a + b*b);
        const sin = b/scale;
        let angle = Math.round(Math.asin(sin) * (180/Math.PI));
        if (a < 0) {
            angle = 180 - angle;
        }
        if (a > 0 && b < 0) {
            angle = 360 + angle;
        }
        return angle;
    }

    rotateKnob = () => {
        if (this.state.initialAngle < 355) {
            let targetAngle = 360;
            this.spinner.style.transform = 'rotate(' + targetAngle + 'deg)';
            this.setState({
                rotating: true,
            });
        }
    }

    stopRatating = () => {
        let transformInfo = window.getComputedStyle(this.spinner).transform;
        const angle = this.angleCalculator(transformInfo);
        this.spinner.style.transform = 'rotate(' + angle + 'deg)';
        this.setState({
            rotating: false,
            initialAngle: angle
        })
    }

    backToOrigin = () => {
        if (this.state.initialAngle >= 355) {
            this.spinner.style.transform = 'rotate(' + 0 + 'deg)';
        }
    }

    render () {
        let backgroundImage = null;
        switch (this.props.knobName) {
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

        const self = this;

        return (
            <div className="knob-container">
                <img className="knob-background" src={backgroundImage} />
                <img className={"knob-top-spinner"}
                     onClick={this.backToOrigin}
                     onMouseDown={this.rotateKnob}
                     onMouseUp={this.stopRatating}
                     ref={function(el) {
                         self.spinner = el;
                     }}
                     src={knobTopSpinner} />
            </div>
        );
    }
    
}

export default Knob;