import React from 'react';
import withSpinningFunction from '../../../../../components/withSpinningFunction';
import headphoneJack from './HeadphonesJack.png';

const Img1 = () => (
    <img style={{width: '100%'}} src={headphoneJack} />
);

export default withSpinningFunction(Img1);