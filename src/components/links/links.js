import React from 'react';
import styled from 'styled-components';
import {
  SocialInfoWrapper,
  SocialInfoImg
} from './style';
import snapchat from '../../imgs/snapchatLogo.svg';
import facebook from '../../imgs/facebookLogo.svg';
import instgram from '../../imgs/instLogo.svg';
import twitter from '../../imgs/twitterLogo.svg';
import pinsterest from '../../imgs/pinterestLogo.svg';
import EWLogo from '../../imgs/EWLogo.svg';

export const SocialInfoList = () => (
  <SocialInfoWrapper>
    <SocialInfoImg src={snapchat} />
    <a
      href="https://www.facebook.com/EverlastingWardrobe/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialInfoImg src={facebook} />
    </a>
    <a
      href="https://www.instagram.com/everlastingwardrobe/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialInfoImg src={instgram} />
    </a>
    <a
      href="https://twitter.com/EverWardrobe?lang=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialInfoImg src={twitter} />
    </a>
    <a
      href="https://www.pinterest.com/EverWardrobe/?etslf=8072&eq=everlasting%20wardrobe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialInfoImg src={pinsterest} />
    </a>
  </SocialInfoWrapper>
)
