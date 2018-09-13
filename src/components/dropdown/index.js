import styled, { css } from 'styled-components';
import Link from '../link';


export const BaseDropdown = styled.div`
  -webkit-transition: max-height 0.2s ease-out;
  transition: max-height 0.2s ease-out;
  max-height: ${props => props.maxHeight}
  overflow: hidden;
  background-color: #FCFCF5;
  box-sizing: content-box;
  ${props =>
    props.collapse && css
    `
      max-height: 0;
    `}
`;

export const HidableDropdown = styled(BaseDropdown)`
  @media (min-width: ${props => props.hiddenAt}) {
    display: none;
  }
`;


//size and position adjustable dropdown
//pass a {number[] params} to specify, like 
// props.params = [width, top, left]
export const DropdownMenu = styled(BaseDropdown)`
    position: absolute;
    width: ${props => props.params[0]};
    top: ${props => props.params[1]};
    left: ${props => props.params[2]};
    box-shadow: 0 6px 12px rgba(0,0,0,0.175);
`;