import styled from 'styled-components';
import {
  Select,
  EWColors
} from '../globals';

export const ProfileSelect = styled(Select)`
  background-color: transparent;
  border-bottom: 1px solid ${EWColors.naturalGray};
  padding: 6px 12px;
  color: grey;
  width: 100%;
  z-index: 20;
  position: relative; 
  &:focus {
    outline: none;
    border-bottom: 2px solid ${EWColors.apricot};
  }
`;
export const ProfileOption = styled.option`
  color: grey;
`;

