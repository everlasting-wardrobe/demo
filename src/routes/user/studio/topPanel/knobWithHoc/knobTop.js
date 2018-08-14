import React from 'react';
import knobTopSpinner from '../../assets/img/KnobTopSpinning.png';
import withSpinningFunction from '../../util/withSpinningFunction';

const KnobTop = () => (
    <img style={{width: '100%', display: 'block'}} src={knobTopSpinner} />
);

export default withSpinningFunction(KnobTop);