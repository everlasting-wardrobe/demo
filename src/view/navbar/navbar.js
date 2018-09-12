import React, { Component } from 'react';
import styled from 'styled-components';
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down';

import { EWNavLogo,
         TopBarWrapper,
         NavBar,
         ListContainer,
         RightLinks,
         BrandContainer,
         HidableNavTab,
         NavDropdown,
         AccNavTab,
         NavTabSector } from './style';
import { Dropdown,
         SocialListWrapper,
         NavListWrapper,
         NavTab, } from  '../../components/globals/index';
import Link from '../../components/link';
import { SocialInfoList } from '../../components/links/links';
import { BurgerButton } from '../../components/buttons';

import EWLogo from '../../imgs/EWLogo.svg';

class NavList extends Component  {
    state = {
        accInfoOpen: false,
    };

    render() {
        return (
            <ListContainer flexInRow={this.props.inRow}>
                <NavListWrapper floated={this.props.inRow}>
                    <li>
                        <NavTab to={""}>How It Works</NavTab>
                    </li>
                    <li>
                        <NavTab to={""}>Sign up</NavTab>
                    </li>
                    <li>
                        <HidableNavTab hidden={this.props.loggedIn} to={""}>Log in</HidableNavTab>
                        <HidableNavTab hidden={!this.props.loggedIn} to={""}>Account <ArrowDown /></HidableNavTab>
                        <NavDropdown maxHeight={'200px'} collapse={false}>
                            <NavListWrapper>
                                <li>
                                    <AccNavTab to={""}>Dashboard</AccNavTab>
                                </li>
                                <li>
                                    <AccNavTab to={""}>Redeem a Gift Card</AccNavTab>
                                </li>
                                <li>
                                    <NavTabSector />
                                </li>
                                <li>
                                    <AccNavTab to={""}>Log out</AccNavTab>
                                </li>
                            </NavListWrapper>
                        </NavDropdown>
                    </li>
                </NavListWrapper>
                <SocialListWrapper>
                    <SocialInfoList />
                </SocialListWrapper>
            </ ListContainer>
        );
    } 
}

const BrandCombo = () => (
    <BrandContainer>
        <EWNavLogo to={""}>
            <img src={EWLogo} />
        </EWNavLogo>
        <EWNavLogo to={""}>
            <h3>
                {"EverlastingWardrobe"}
            </h3>
        </EWNavLogo>
    </BrandContainer>
);

class Navbar extends Component {
    state = {
        closed: true,
        loggedIn: true,
    };

    dropdownToggler = () => {
        const oldState = this.state.closed;
        this.setState({closed: !oldState});
    }
    render() {
        return (
            <NavBar>
                <TopBarWrapper>
                    <BrandCombo />
                    <RightLinks>
                    <NavList inRow loggedIn={this.state.loggedIn}/>
                    </RightLinks>
                    <BurgerButton width={"40px"}
                                  hideAt={"1200px"}
                                  clicked={this.dropdownToggler}/>
                </TopBarWrapper>
                <NavDropdown maxHeight={'400px'} collapse={this.state.closed}>
                    <NavList loggedIn={this.state.loggedIn}/>
                </NavDropdown>
            </NavBar>
        );
    }
}

export default Navbar;
