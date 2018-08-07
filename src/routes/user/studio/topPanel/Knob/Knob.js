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
        //console.log(transformInfo);
        // transformInfo = transformInfo.split('(')[1].split(')')[0].split(',');
        // const angle = Math.round(Math.asin(transformInfo[1]) * (180/Math.PI));
        // console.log(angle);
        
        console.log('Matrix: ' + transformInfo);
        let values = transformInfo.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');
        const a = values[0];
        const b = values[1];
        const c = values[2];
        const d = values[3];

        var scale = Math.sqrt(a*a + b*b);
        var sin = b/scale;
        var angle = Math.round(Math.asin(sin) * (180/Math.PI));
        if (a < 0) {
            angle = 180 - angle;
        }
        if (a > 0 && b < 0) {
            angle = 360 + angle;
        }
        console.log('Rotate: ' + angle + 'deg');
        this.spinner.style.transform = 'rotate(' + angle + 'deg)';
        //this.setState({initialAngle: angle});
        // this.setState({
        //     rotating: false,
        //     //initialAngle: angle
        // });
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
                {/* <img className="knob-top" src={knobTop} /> */}
                <img className={["knob-top-spinner", this.state.rotating? "rotating" : null].join(" ")}
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