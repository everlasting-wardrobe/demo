import React, { Component } from 'react';

import inputKnobTop from './InputKnobTop.png';
import inputKnobBack from './InputKnobBack.png';
import './inputKnob.css';

class InputKnob extends Component {
    state = {
        rotating: false,
        mode: 2,
        direction: 1,
    }
    modeSet = [-60, -30, 0, 30, 60];
    changeMode = () => {
        let dir = this.state.direction;
        if (this.state.direction === 1 && this.state.mode === 4) {
            dir = -1;
        } 
        if (this.state.direction === -1 && this.state.mode === 0) {
            dir = 1;
        }
        const modeNum = this.state.mode + dir;
        const degree = this.modeSet[modeNum];
        this.spinner.style.transform = 'rotate(' + degree + 'deg)';
        this.setState({mode: modeNum, direction: dir});
    }
    render() {
        const self = this;

        return (
            <div className={"input-knob-container"}>
                <img className={"input-knob-back"} src={inputKnobBack} />
                <img className={["input-knob-top", this.state.rotating? "rotating" : null].join(" ")}
                     onClick={this.changeMode}
                     src={inputKnobTop} 
                     ref={function(el) {
                        self.spinner = el;
                    }}/>
            </div>
        );
    }
}

export default InputKnob;