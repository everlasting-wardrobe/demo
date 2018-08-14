import React, { Component } from 'react';

//functional component
import { withPanelBackground } from '../util/util';
import InputKnobWithHoc from './inputKnobWithHoc/inputKnobWithHoc';
import KnobWithHoc from './knobWithHoc/knobWithHoc';
import NameCard from './nameCard/nameCard';

//images
import separator from '../assets/img/PanelBoardSeparator.png';
import airButtonRed from '../assets/img/AirButtonRed.png';
import offButton from '../assets/img/OffButton.png';
import airButton from '../assets/img/OnAirButton.png';
import onButton from '../assets/img/OnButtonGreen.png';
import headphoneJack from '../assets/img/HeadphonesJack.png';

//style
import './topPanel.css';

class Tuners extends Component {
    render() {
        return (
            <div className={"left-tuners-container"}>
                <div className={"left-tuners-headphone-jack-wrapper"}>
                    <img className={"left-tuners-headphone-jack"} src={headphoneJack} />
                </div>
                <div className={"left-tuners-knob-container"}>
                    <KnobWithHoc knobName="Low" />
                    <KnobWithHoc knobName="Mid"/>
                    <KnobWithHoc knobName="High"/>
                </div>
                <div className={"left-tuners-inputknob-wrapper"}>
                    <InputKnobWithHoc />
                </div>
            </div>
        );
    }
};

const LeftTuners = withPanelBackground(Tuners);

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
                <KnobWithHoc knobName="Low" />
            </div>
            <div className="right-buttons-high-knob-wrapper">
                <KnobWithHoc knobName="High" />
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
                <InputKnobWithHoc />
            </div>
        </div>
        );
    }
}

const topPanel = () => {
    return (
        <div className="top-panel-container">
            <div className="top-panel-wrapper">
                <div className="top-panel-left">
                    <LeftTuners />
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