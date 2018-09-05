import React from 'react';
import { BurgerSlice,
         BurgerWrapper, } from './style';

export const BurgerButton = (props) => (
    <BurgerWrapper width={props.width}
                   hideAt={props.hideAt}
                   onClick={props.clicked}>
        <BurgerSlice />
        <BurgerSlice />
        <BurgerSlice />
    </BurgerWrapper>
 );