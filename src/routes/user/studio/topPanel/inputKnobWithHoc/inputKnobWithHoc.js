import React from 'react';
import InputKnobTop from './inputKnobTop';
import inputKnobBack from '../../assets/img/InputKnobBack.png';
import './inputKnobWithHoc.css';

const InputKnobWithHoc = () => (
    <div className={"input-knob-with-hoc-container"}>
        <img className={"input-knob-with-hoc-back"} src={inputKnobBack} alt={""}/>
        <div className={'input-knob-with-hoc-top'}>
            <InputKnobTop initMode={2} modeCount={5} startDeg={-60} endDeg={60} />
        </div>
    </div>
);

export default InputKnobWithHoc;