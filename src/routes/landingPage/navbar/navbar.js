import React, { Component } from 'react';
import styled from 'styled-components';
import { EWNavLogo, 
         TopBarWrapper, 
         NavBar, 
         ListContainer, 
         RightLinks, 
         BrandContainer } from './style';
import { Dropdown, 
         SocialListWrapper, 
         NavListWrapper, 
         NavTab, } from  '../../../components/globals/index';
import Link from '../../../components/link';
import { SocialInfoList } from '../../../components/links/links';
import { BurgerButton } from '../../../components/buttons';

// import snapchat from '../../imgs/snapchatLogo.svg';
// import facebook from '../../imgs/facebookLogo.svg';
// import instgram from '../../imgs/instLogo.svg';
// import twitter from '../../imgs/twitterLogo.svg';
// import pinsterest from '../../imgs/pinterestLogo.svg';
import EWLogo from '../../../imgs/EWLogo.svg';

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
        <SocialListWrapper>
            <SocialInfoList />
        </SocialListWrapper>
    </ ListContainer>
);

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
                    <NavList inRow />
                    </RightLinks>
                    <BurgerButton width={"40px"}
                                  hideAt={"1200px"}
                                  clicked={this.dropdownToggler}/>
                </TopBarWrapper>
                <Dropdown collapse={this.state.closed}>
                    <NavList />
                </Dropdown>
            </NavBar>
        );
    }
}

export default Navbar;