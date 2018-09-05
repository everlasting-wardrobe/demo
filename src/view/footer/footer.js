import React from 'react';
import {
  FooterWrapper,
  ContentWrapper,
  FooterTitle,
  SocialInfoWrapper,
  SendGiftTextWrapper,
  SendGiftTextP,
  TLink,
  CopyRightPanel,
  CopyRightSpan,
  CopyRightP
} from './style';
import {SocialInfoList} from '../../components/links/links';


const Footer = () => (
  <FooterWrapper>
    <ContentWrapper>
      <FooterTitle>
        {"Connect With Us"}
      </FooterTitle>
      <SocialInfoWrapper>
        <SocialInfoList />
      </SocialInfoWrapper>
      <SendGiftTextWrapper>
        <TLink to={""}>
          <SendGiftTextP>
            {"Send the gift of an everlasting wardrobe"}
          </SendGiftTextP>
        </TLink>
        <TLink to={""}>
          <SendGiftTextP>
            {"Redeem a Gift Card"}
          </SendGiftTextP>
        </TLink>
      </SendGiftTextWrapper>
    </ContentWrapper>
    <CopyRightPanel>
      <hr />
      <CopyRightP>
        <CopyRightSpan>© Everlasting Wardrobe</CopyRightSpan>
        <CopyRightSpan>How it Works</CopyRightSpan>
        <CopyRightSpan>{"FAQ's"}</CopyRightSpan>
        <CopyRightSpan>Press</CopyRightSpan>
        <CopyRightSpan>Contact Us</CopyRightSpan>
        <CopyRightSpan>Charitable Programs</CopyRightSpan>
        <CopyRightSpan>Become a Brand Partner</CopyRightSpan>
      </CopyRightP>
    </CopyRightPanel>
  </FooterWrapper>
)

export default Footer;
