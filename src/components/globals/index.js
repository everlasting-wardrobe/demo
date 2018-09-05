import styled, { css } from 'styled-components';
import Link from '../link';



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

export const FontFamily = new function(){
  this.text = "'Lato', sans-serif";
}();

export const H1 = styled.h1`
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.text};
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  font-family: ${FontFamily.text};
  margin: 0;
  padding: 0;
`;

export const H4 = styled.h4`
  font-family: ${FontFamily.text};
  margin: 0;
  padding: 0;
`;

export const H5 = styled.h5`
  font-family: ${FontFamily.text};
  margin: 0;
  padding: 0;
`;

export const H6 = styled.h6`
  font-family: ${FontFamily.text};
  margin: 0;
  padding: 0;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  font-family: ${FontFamily.text};
  font-size: 1rem;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
`

export const EWColors = new function() {
  this.dorado = '#665350';
  this.masala = '#474441';
  this.aquaIsland = '#96d6d7';
  this.apricot = '#e97f74';
  this.burntSienna = '#e75a50';
  this.akaroa = '#d7c2a4';
  this.satinLinen = '#eae7dc';
  this.naturalGray = '#8e8d8a';
} ();

export const EWFF = {
  subtitle: "'Handlee', cursive",
}

export const NavTab = styled(Link)`
  color: #777;
  line-height: 24px;
  position: relative;
  display: block;
  padding: 10px 15px
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: 100;
  font-family: inherit;
  transition: ease all .4s;
  &:link, &:visited {
    text-decoration: none;
  }
  &:hover {
    color: #e75a50;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  list-style: none;
  float: left;
  > li {
    display: block;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const SocialList = styled.div`
  display: flex;
  padding-left: 10px;
  margin-bottom: 10px;
   img {
    max-height: 40px;
    height: 28px;
    width: auto;
    opacity: .6;
    margin-right: 7px;
    transition: opacity .3s ease;
  }
  img:hover {
    opacity: 1;
  }
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  font-family: ${FontFamily.text};
`;

export const Dropdown = styled.div`
  -webkit-transition: max-height 0.2s ease-out;
  transition: max-height 0.2s ease-out;
  max-height: 200px;
  overflow: hidden;
  background-color: #FCFCF5;
  box-sizing: content-box;
  ${props =>
    props.collapse && css
    `
      max-height: 0;
    `}
`;

export const EWNavLogoImg = styled(Link)`
  display: inline-block;
`;

export const NavBrand = styled.div`
  padding: 13px 5px;
  font-size: 20px;
  height: 100%;
  width: auto;
  a {
    height: 100%;
  }
  a img {
    height: 100%;
  }
`;

export const NavBar = styled.div`
  height: 66px;
  background-color: #FCFCF5;
`;
