import styled, { css } from 'styled-components';
import Link from '../../components/link';

export const EWNavLogo = styled(Link)`
  h3 {
    display: inline-block;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 20px;
    margin: 0;
    color: #e75a50;
  }

  @media (min-width: 1200px) {
    h3 {font-size: 27px;}
  }
`;

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 5px;
  font-size: 20px;
  height: 76px;
  border-bottom: 1px solid #e7e7e7;
  button {
    float: right;
  }
  -webkit-transition: height 0.2s ease-out;
  transition: height 0.2s ease-out;
  @media (min-width: 1200px) {
    height: 94px;
  }
`;

export const NavBar = styled.div`
  background-color: #FCFCF5;
`;
export const ListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${props =>
    props.flexInRow && css
    ` 
    align-items: center;
    width: 550px;
    flex-direction: row;
    `}
`;

export const BrandName = styled.h3`
  font-family: 'Lato';
  font-size: 20px;
  margin: 0;
  color: #e75a50;
  display: inline-block;
  span {
    font-weight: 400;
  }

  @media (min-width: 1200px) {
    font-size: 27px;
  }
`;

export const BrandContainer = styled.div`
  width: 250px;
  a {
      height: 100%;
    }
    a img {
      height: 100%;
    }
  
  @media (min-width: 1200px) {
    width: 320px;
  }
`;

export const RightLinks = styled.div`

  @media (max-width: 1200px) {
    display: none;
  }
`;