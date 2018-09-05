import styled from 'styled-components';
import {
  Img
}from '../globals';

export const SocialInfoImg = styled(Img)`
  height: 40px;
  width: auto;
  opacity: 0.6;
  transition: opacity .3s ease;
  :hover {
    opacity: 1;
  }
`

export const SocialInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
