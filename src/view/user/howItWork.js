import React from 'react';
import {
  HowItWorkWrapper,
  Title,
  IframeWrapper,
  IframePlaceholder,
  Iframe
} from './style';

export const HowItWork = () => (
  <HowItWorkWrapper>
    <Title>
      {"How Does It Work?"}
    </Title>
    <IframeWrapper>
      <IframePlaceholder />
    <Iframe
      src="https://www.youtube.com/embed/Tmg-iAECrnk"
      frameborder={0}
      allowfullscreen
      width = {'80%'}
    />
    </ IframeWrapper>
    <Title>
      {"Get Started Today!"}
    </Title>
  </HowItWorkWrapper>

);
