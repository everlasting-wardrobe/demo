import React, { ReactDOM, Component } from 'react';
import lowKnob from './LowKnob.png';
import midKnob from './MidKnob.png';
import highKnob from './HighKnob.png';
//import knobTop from './KnobTop.png';
import knobTopSpinner from './KnobTopSpinning.png';

import './Knob.css';

class Knob extends Component {
    state = {
        rotating: false,
        initialAngle: 0
    };

    //spinner = React.createRef();

    rotateKnob = () => {
        this.setState({
            rotating: true,
        })
    }

    stopRatating = () => {
        //let transformInfo = window.getComputedStyle(this.spinner).transform;
        //transformInfo = transformInfo.split('(')[1].split(')')[0].split(',');
        //const angle = Math.round(Math.asin(transformInfo[1]) * (180/Math.PI));
        //console.log(angle);
        //this.spinner.style.transform = transformInfo;
        // this.setState({
        //     rotating: false,
        //     //initialAngle: angle
        // });
        this.setState({
            rotating: false,
        })
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

        var self = this;

        return (
            <div className="knob-container">
                <img className="knob-background" src={backgroundImage} />
                {/* <img className="knob-top" src={knobTop} /> */}
                <img className={["knob-top-spinner", this.state.rotating? "rotating" : null].join(" ")}
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