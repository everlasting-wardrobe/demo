import styled, { css } from 'styled-components';
import Link from '../link';

export const EWFF = {
  subtitle: "'Handlee', cursive",
  text : "'Lato', sans-serif"
}

export const EWColors = new function() {
  this.dorado = '#665350';
  this.masala = '#474441';
  this.aquaIsland = '#96d6d7';
  this.apricot = '#e97f74';
  this.burntSienna = '#e75a50';
  this.akaroa = '#d7c2a4';
  this.satinLinen = '#eae7dc';
  this.naturalGray = '#8e8d8a';
  this.background = "#fcfcf5";
  this.border='#e7e7e7';
} ();

export const EWTextWithBackground = css`
  background-color: ${EWColors.burntSienna};
  color: white;
  font-size: 1.25rem;
  font-family: ${EWFF.text};
`

export const EWText = css`
  font-size: 1.25rem;
  font-family: ${EWFF.text};
`

export const EWCickableText = css`
  ${EWText};
  color: #777;
  line-height: 24px;
  position: relative;
  display: block;
  padding: 10px 15px
  cursor: pointer;
  text-decoration: none;
  font-size: 17px;
  font-weight: 100;
  font-family: inherit;
  transition: ease all .4s;
  &:link, &:visited {
    text-decoration: none;
  }
  &:hover {
    color: ${EWColors.burntSienna};
  }
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

// export const FontFamily = new function(){
//   this.text = "'Lato', sans-serif";
// }();

export const H1 = styled.h1`
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  font-family: ${EWFF.text};
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  font-family: ${EWFF.text};
  color: ${EWColors.naturalGray};
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const H4 = styled.h4`
  font-family: ${EWFF.text};
  color: ${EWColors.naturalGray};
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const H5 = styled.h5`
  font-family: ${EWFF.text};
  color: ${EWColors.naturalGray};
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const H6 = styled.h6`
  font-family: ${EWFF.text};
  color: ${EWColors.naturalGray};
  margin: 0;
  padding: 0;
`;

export const Label = styled.label`
  ${EWText};
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  font-family: ${EWFF.text};
  font-size: 1rem;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
`

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background-color: transparent;
`;

export const BaseLinkStyle = css`
  color: #777;
  line-height: 24px;
  position: relative;
  display: block;
  padding: 10px 15px
  cursor: pointer;
  text-decoration: none;
  font-size: 17px;
  font-weight: 100;
  font-family: inherit;
  transition: ease all .4s;
  &:link, &:visited {
    text-decoration: none;
  }
  &:hover {
    color: ${EWColors.burntSienna};
  }
`;

export const NavTab = styled(Link)`
  ${BaseLinkStyle}
`;

export const NavListWrapper = styled.ul`
  list-style: none;
  > li {
    ${props =>
      props.floated && css
      `
        width: auto;
        float: left;
      `}
  }
`;

export const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const SocialListWrapper = styled.div`
  width: 250px;
  padding-left: 10px;
  margin: 5px 0;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  font-family: ${EWFF.text};
`;

export const TextArea = styled.textarea`
  ${EWText};
  flex: 1 0 auto;
  width: 100%;
  font-weight: 400;
  border: 1px solid ${EWColors.naturalGray};
  padding: 0.75rem;
  margin-top: 0.125rem;
  box-shadow: none;
  background: rgba(0,0,0,0);


  &:focus{
    border: none;
    outline: none;
    border: 1.2px solid ${EWColors.naturalGray};
  }
`;

export const LineBreaker = styled.div`
  height: 1px;
  background-color: ${props => props.color};
  width: ${props => props.width};
`;

export const URLBackgroundWrapper = styled.div`
  background-image: url(${props => props.url});
  background-size: 100%;
  background-attachment: initial;
  background-repeat: no-repeat;
`;