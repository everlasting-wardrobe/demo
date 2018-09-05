import React, { Component } from 'react';
import styled from 'styled-components';
import { NavTab, NavListWrapper, SocialListWrapper, Dropdown, EWNavLogo, TopBarWrapper, NavBar, ListContainer, RightLinks } from '../../components/globals/index';
import Link from '../../components/link';

import snapchat from '../../imgs/snapchatLogo.svg';
import facebook from '../../imgs/facebookLogo.svg';
import instgram from '../../imgs/instLogo.svg';
import twitter from '../../imgs/twitterLogo.svg';
import pinsterest from '../../imgs/pinterestLogo.svg';
import EWLogo from '../../imgs/EWLogo.svg';

const NavList = (props) => (
    <ListContainer flexInRow={props.inRow}>
        <NavListWrapper floated={props.inRow}>
            <li>
                <NavTab to={""}>How It Works</NavTab>
            </li>
            <li>
                <NavTab to={""}>Sign up</NavTab>
            </li>
            <li>
                <NavTab to={""}>Log in</NavTab>
            </li>
        </NavListWrapper>
        <SocialList />
    </ ListContainer>
);

const SocialList = () => (
    <SocialListWrapper>
        <Link to={""}>
            <img src={snapchat} />
        </Link>
        <Link to={""}>
            <img src={facebook} />
        </Link>
        <Link to={""}>
            <img src={instgram} />
        </Link>
        <Link to={""}>
            <img src={twitter} />
        </Link>
        <Link to={""}>
            <img src={pinsterest} />
        </Link>
    </SocialListWrapper>
);

const BrandCombo = () => (
    <div>
        <EWNavLogo to={""}>
            <img src={EWLogo} />
        </EWNavLogo>
        <EWNavLogo to={""}>
            <h3>
                {"EverlastingWardrobe"}
            </h3>
        </EWNavLogo>
    </div>
);

class Navbar extends Component {
    state = {
        closed: false,
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
                    <NavList inRow/>
                    </RightLinks>
                    {/* <button onClick={this.dropdownToggler}>toggle</button> */}
                </TopBarWrapper>
                <Dropdown collapse={this.state.closed}>
                    <NavList />
                </Dropdown>
                sign up box
            </NavBar>
        );
    }
}

export default Navbar;