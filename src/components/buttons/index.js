import React from 'react';
import styled from 'styled-components';
import { BurgerSlice,
         BurgerWrapper, } from './style';
import {
  NavTab,
  EWColors
} from '../globals';

export const BurgerButton = (props) => (
    <BurgerWrapper width={props.width}
                   hideAt={props.hideAt}
                   onClick={props.clicked}>
        <BurgerSlice />
        <BurgerSlice />
        <BurgerSlice />
    </BurgerWrapper>
 );


export const NavButton = styled(NavTab)`
  color: White;
  background-color: ${EWColors.burntSienna};
  text-align: center;
  &:hover{
    opacity: 0.7;
    color: white;
  }
`
