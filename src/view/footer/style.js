import styled from 'styled-components';
import {
  H2,
  EWColors,
  EWFF,
  P
} from '../../components/globals'
import {NoneStyleLink} from '../../components/link';
import {Span} from '../../components/globals';

export const FooterWrapper = styled.footer`
  padding-top: 60px;
  display: block;
  background-color: ${EWColors.background};
`
export const ContentWrapper = styled.div`
  margin: 0 auto 0 auto;
  @media (min-width: 1200px){
    width: 1170px;
  }
  @media (min-width: 992px){
    width: 970px;
  }
  @media (min-width: 768px){
      width: 750px;
  }
`

export const FooterTitle = styled(H2)`
  color: ${EWColors.naturalGray};
  text-align: center;
  font-family: ${EWFF.subtitle};
  margin: 30px 0 60px 0;
`

export const SocialInfoWrapper = styled.ul`
  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 480px) {
    width: 60%;
  }
  @media (max-width: 479px){
    width: 80%;
  }
  margin: auto;
`

export const SendGiftTextWrapper = styled.section`
  margin: 30px;
`

export const SendGiftTextP = styled(P)`
  text-align: center;
  :hover{
    text-decoration: none;
  }
`

export const TLink = styled(NoneStyleLink)`
  color: ${EWColors.burntSienna};
  margin: 15px;
  :hover{
    color: ${EWColors.burntSienna};
    opacity: 0.6;
  }
`

export const CopyRightPanel = styled.section`
  display: flex-left;
  margin: auto;
  width: 50%;
  @media (max-width: 600px){
    width: 80%;
  }
`
export const CopyRightP = styled(P)`
  text-align: center;
`

export const CopyRightSpan = styled(Span)`
  padding: 10px;
  display: inline-block;
  color: ${EWColors.naturalGray};
`
