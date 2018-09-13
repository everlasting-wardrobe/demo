import styled, { css } from 'styled-components';
import Link from '../../components/link';
import { BaseDropdown } from '../../components/dropdown';
import {NavTab, NavListWrapper, BaseLinkStyle} from  '../../components/globals/index';
import {
  EWColors,
  H3
} from '../../components/globals';

export const EWNavLogo = styled(Link)`
  h3 {
    display: inline-block;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 20px;
    margin: 0;
    color: ${EWColors.burntSienna};
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
  border-bottom: 1px solid ${EWColors.border};
  button {
    float: right;
  }
  -webkit-transition: height 0.2s ease-out;
  transition: height 0.2s ease-out;
  @media (min-width: 1200px) {
    height: 94px;
  }
`;

export const NavBarWrapper = styled.nav`
  background-color: ${EWColors.background};
  position: relative;
`;

export const HidableNavTab = styled(NavTab)`
  ${props => props.hidden && css`
    display: none;
  `}
`;

export const ListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  ${props =>
    props.flexInRow && css
    `
    align-items: center;
    flex-direction: row;
    `}
`;

export const BrandName = styled(H3)`
  font-size: 20px;
  margin: 0;
  color: ${EWColors.burntSienna};
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

export const NavDropdown = styled(BaseDropdown)`
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const AccNavTab = styled(NavTab)`
  margin-left: 3%;
  line-height: 12px;
`;

export const NavTabSector = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e7e7e7;
`;

export const AccNavListWrapper = styled(NavListWrapper)`
  margin: 1% 0;
`;

export const NavDropdownToggler = styled.div`
  ${BaseLinkStyle};
  ${props => props.hidden && css`
    display: none;
  `}
`;

export const AccNavDropdown = styled(NavDropdown)`
  position: absolute;
  left: 22%;
  top: 103%;
  width: 33%;
  display: none;
  box-shadow: 0 6px 12px rgba(0,0,0,0.175);
  @media (min-width: 1200px) {
    display: block;
  }
`;