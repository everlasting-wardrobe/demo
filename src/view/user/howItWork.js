import React from 'react';
import {
  UserPanelWrapper,
  Title,
  IframeWrapper,
  IframePlaceholder,
  Iframe,
  StyledNavButton
} from './style';
import {NavButton} from '../../components/buttons';
import {WORKING_PATH} from '../../api/constants';

export const HowItWork = () => (
  <UserPanelWrapper>
    <Title>
      {"How Does It Work?"}
    </Title>
    <IframeWrapper>
      <IframePlaceholder />
    <Iframe
      src="https://www.youtube.com/embed/Tmg-iAECrnk"
      frameborder={0}
      allowfullscreen
    />
    </ IframeWrapper>
    <Title>
      {"Get Started Today!"}
    </Title>
    <StyledNavButton
      to={WORKING_PATH + "signup"}
    >
      {"Sign Up"}
    </StyledNavButton>
  </UserPanelWrapper>

);
