import styled from 'styled-components';
import {
  Input,
  EWColors,
  EWText
} from '../globals';

export const UnderlinedInput = styled(Input)`
  ${EWText};
  display: inline-block;
  background-color: transparent;
  border-bottom: 1px solid ${EWColors.naturalGray};
  padding: 6px 12px;
  &:focus {
    border-bottom: 2px solid ${EWColors.apricot};
  }
`
