import React, { Component } from 'react';
import {connect} from 'react-redux';
// Components for style
import styled from 'styled-components';
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down';

import {
  EWNavLogo,
  TopBarWrapper,
  NavBarWrapper,
  ListContainer,
  RightLinks,
  BrandContainer,
  HidableNavTab,
  NavDropdown,
  AccNavTab,
  NavTabSector,
  AccNavListWrapper,
  NavDropdownToggler,
  AccNavDropdown
} from './style';
import { Dropdown,
         SocialListWrapper,
         NavListWrapper,
         NavTab, } from  '../../components/globals/index';
import Link from '../../components/link';
import { SocialInfoList } from '../../components/links/links';
import {
  BurgerButton,
  PureTextButton
 } from '../../components/buttons';
import {WORKING_PATH} from '../../api/constants';
import EWLogo from '../../imgs/EWLogo.svg';
import {logout} from '../../actions/authentication';
import {withRouter} from 'react-router-dom';
// const WORKING_PATH = process.env.PUBLIC_URL;

class NavList extends Component  {
    constructor(props){
      super(props);
      this.state = {
          accInfoOpen: false,
      };
    }

    accountToggler = () => {
        const oldState = this.state.accInfoOpen;
        this.setState({accInfoOpen: !oldState});
    }

    render() {
      const {inRow, currentUser, logout} = this.props;
      const LogoutButton = withRouter(
        ({history}) => {
          return (
            <PureTextButton
              onClick={() => {
                  if(this.props.logout && typeof this.props.logout === 'function'){
                    logout();
                  }
                  history.push("/");
                }
              }
            >
              {"Logout"}
            </PureTextButton>
          )
        }
      )

      console.log(logout);
        return (
            <ListContainer flexInRow={this.props.inRow}>
                <NavListWrapper floated={this.props.inRow}>
                    <li>
                        <NavTab
                          to={WORKING_PATH + "how-it-works"}>
                          {"How It Works"}
                        </NavTab>
                    </li>
                    <li>
                        <HidableNavTab
                          to={WORKING_PATH + "signup"}
                          hidden={currentUser}
                        >
                         {"Sign up"}
                        </HidableNavTab>
                    </li>
                    <li>
                        <HidableNavTab
                          hidden={currentUser}
                          to={WORKING_PATH + "login"}
                        >
                          {"Log in"}
                        </HidableNavTab>
                        <NavDropdownToggler
                          hidden={!currentUser}
                          onClick={this.accountToggler}
                        >
                          {"Account"}
                          <ArrowDown />
                        </NavDropdownToggler>
                        <NavDropdown
                          maxHeight={'200px'}
                          collapse={!this.state.accInfoOpen}
                        >
                            <AccNavListWrapper>
                                <li>
                                    <AccNavTab to={""}>Dashboard</AccNavTab>
                                </li>
                                <li>
                                    <AccNavTab
                                      to={WORKING_PATH + "redeem-gift-card"}
                                    >
                                      {"Redeem a Gift Card"}
                                    </AccNavTab>
                                </li>
                                <li>
                                    <NavTabSector />
                                </li>
                                <li>
                                    <LogoutButton />
                                </li>
                            </AccNavListWrapper>
                        </NavDropdown>
                    </li>
                </NavListWrapper>
                <SocialListWrapper>
                    <SocialInfoList />
                </SocialListWrapper>
                <AccNavDropdown maxHeight={'200px'} collapse={!this.state.accInfoOpen}>
                    <AccNavListWrapper>
                        <li>
                            <AccNavTab to={""}>Dashboard</AccNavTab>
                        </li>
                        <li>
                            <AccNavTab
                              to={WORKING_PATH + "redeem-gift-card"}
                            >
                              {"Redeem a Gift Card"}
                            </AccNavTab>
                        </li>
                        <li>
                            <NavTabSector />
                        </li>
                        <li>
                            <AccNavTab
                              to={""}
                            >
                              {"Log out"}
                            </AccNavTab>
                        </li>
                    </AccNavListWrapper>
                </AccNavDropdown>
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
        const {currentUser, logout} = this.props;
        console.log(currentUser);
        return (
            <NavBarWrapper>
                <TopBarWrapper>
                    <BrandCombo />
                    <RightLinks>
                    <NavList inRow currentUser={currentUser} logout={logout}/>
                    </RightLinks>
                    <BurgerButton width={"40px"}
                                  hideAt={"1200px"}
                                  clicked={this.dropdownToggler}/>
                </TopBarWrapper>
                <NavDropdown maxHeight={'400px'} collapse={this.state.closed}>
                    <NavList
                      currentUser={currentUser}
                      logout={logout}
                    />
                </NavDropdown>
            </NavBarWrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    currentUser: state.userReducer.currentUser,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
      {logout: ()=> {dispatch(logout)}}
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
