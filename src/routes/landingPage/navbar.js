import React, { Component } from 'react';
import styled from 'styled-components';
import { NavTab, NavList, SocialList, Dropdown, EWNavLogoImg, NavBrand, NavBar } from '../../components/globals/index';
import Link from '../../components/link';

import snapchat from '../../imgs/snapchatLogo.svg';
import facebook from '../../imgs/facebookLogo.svg';
import instgram from '../../imgs/instLogo.svg';
import twitter from '../../imgs/twitterLogo.svg';
import pinsterest from '../../imgs/pinterestLogo.svg';
import EWLogo from '../../imgs/EWLogo.svg';



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
                <NavBrand>
                    <EWNavLogoImg to={""}>
                        <img src={EWLogo} />
                    </EWNavLogoImg>
                    <button onClick={this.dropdownToggler}>toggle</button>
                </NavBrand>
                <Dropdown collapse={this.state.closed}>
                    <NavList>
                        <li>
                            <NavTab to={""}>How It Works</NavTab>
                        </li>
                        <li>
                            <NavTab to={""}>Sign up</NavTab>
                        </li>
                        <li>
                            <NavTab to={""}>Log in</NavTab>
                        </li>
                    </NavList>
                    <SocialList>
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
                    </SocialList>
                </Dropdown>
                sign up box
            </NavBar>
        );
    }
}

export default Navbar;