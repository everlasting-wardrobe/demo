import React, { Component }from 'react';
import airButton from './OnAirButton.png';
import onButton from './OnButtonGreen.png';
import Knob from '../Knob/Knob';
import InputKnobComp from '../inputKnob/inputKnob';
import inputKnob from './InputKnob.png';
import airButtonRed from './AirButtonRed.png';
import offButton from './OffButton.png';
import './RightButtons.css';

class RightButtons extends Component {
    state = {
        onAirButton: false,
        airButton: false,
        onButton: false
    };
    airButtonToggler = () => {
        let btnState = this.state.airButton;
        btnState = !btnState;
        this.setState({
            airButton: btnState
        });
    }
    onButtonToggler = () => {
        let btnState = this.state.onButton;
        btnState = !btnState;
        this.setState({
            onButton: btnState
        });
    }
    render() {
        return (
            <div className="right-buttons-container">
            <div className="right-buttons-air-button-wrapper">
                <img className="right-buttons-air-button" src={airButton}/>
            </div>
            <div className="right-buttons-low-knob-wrapper">
                <Knob knobName="Low" />
            </div>
            <div className="right-buttons-high-knob-wrapper">
                <Knob knobName="High" />
            </div>
            <div className="right-buttons-air-button-red-wrapper">
                <img className="right-buttons-air-button-red"
                     onClick={this.airButtonToggler}
                     src={this.state.airButton? airButtonRed: offButton} />
            </div>
            <div className="right-buttons-on-button-wrapper">
                <img className="right-buttons-on-button"
                     onClick={this.onButtonToggler}
                     src={this.state.onButton? onButton: offButton} />
            </div>
            <div className="right-buttons-input-knob-wrapper">
                {/* <img className="right-buttons-input-knob" src={inputKnob} /> */}
                <InputKnobComp />
            </div>
        </div>
        );
    }
}



export default RightButtons;
