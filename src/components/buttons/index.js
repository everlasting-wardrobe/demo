import React from 'react';
import styled from 'styled-components';
import { BurgerSlice,
         BurgerWrapper, } from './style';
import {
  NavTab,
  EWColors,
  EWTextWithBackground
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
  color: white;
  background-color: ${EWColors.burntSienna};
  transition: ease all 0.4s;
  text-align: center;
  &:hover{
    opacity: 0.7;
    color: white;
  }
`

export const BasicButton = styled.button`
  border: none;
`

export const Button = styled(BasicButton)`
  ${EWTextWithBackground};
  transition: ease all 0.4s;
  text-align: center;
  &:hover{
    opacity: 0.7;
    color: white;
  }
  width: 30%;
  padding: 7.5px;
  margin: 45px auto 45px auto
  @media (max-width: 600px){
    width: 100%;
  }
`
