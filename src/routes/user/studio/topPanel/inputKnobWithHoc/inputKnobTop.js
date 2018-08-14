import React from 'react';
import inputKnobTop from '../../assets/img/InputKnobTop.png';
import withModeSelectorFunction from '../../util/withModeSelectorFunction';

const InputKnobTop = () => (
    <img style={{width: '100%', display: 'block'}} src={inputKnobTop} />
);

export default withModeSelectorFunction(InputKnobTop);