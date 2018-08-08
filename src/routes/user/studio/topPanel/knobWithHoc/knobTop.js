import React from 'react';
import knobTopSpinner from './KnobTopSpinning.png';
import withSpinningFunction from '../../../../../components/withSpinningFunction';

const KnobTop = () => (
    <img style={{width: '100%'}} src={knobTopSpinner} />
);

export default withSpinningFunction(KnobTop);