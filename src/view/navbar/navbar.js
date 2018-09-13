import React, { Component } from 'react';
import {connect} from 'react-redux';
// Components for style
import styled from 'styled-components';
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down';

import { EWNavLogo,
         TopBarWrapper,
         NavBarWrapper,
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
import {logout} from '../../actions/authentication';
import {PureTextButton} from '../../components/buttons';
import { SocialInfoList } from '../../components/links/links';
import { BurgerButton } from '../../components/buttons';
import {WORKING_PATH} from '../../api/constants';
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
                        <NavTab to={WORKING_PATH + "how-it-works"}>How It Works</NavTab>
                    </li>
                    <li>
                        <NavTab to={WORKING_PATH + "signup"}>Sign up</NavTab>
                    </li>
                    <li>
                        <HidableNavTab hidden={this.props.loggedIn} to={WORKING_PATH + "login"}>Log in</HidableNavTab>
                        <HidableNavTab hidden={!this.props.loggedIn} to={'/'}>Account <ArrowDown /></HidableNavTab>
                        <PureTextButton style={{display: "inline"}} onClick={this.props.logout}>
                        {"Logout"}
                        </PureTextButton>
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



// const NavList = (props) => (
//     <ListContainer flexInRow={props.inRow}>
//       {props.currentUser? (
//         <NavListWrapper floated={props.inRow}>
//           <li>
//             <NavTab
//               to={WORKING_PATH + "how-it-works"}
//             >
//             {"How It Works"}
//             </NavTab>
//           </li>
//           <li>
//             <NavTab to={'/'}>
//             {`Hello ${props.currentUser}`}
//             </NavTab>
//           </li>
//         </NavListWrapper>
//       ) : (
//       <NavListWrapper floated={props.inRow}>
//         <li>
//           <NavTab
//             to={WORKING_PATH + "how-it-works"}
//           >
//           {"How It Works"}
//           </NavTab>
//         </li>
//         <li>
//           <NavTab
//             to={WORKING_PATH + "signup"}
//           >
//           {"Sign up"}
//           </NavTab>
//         </li>
//         <li>
//           <NavTab
//             to={WORKING_PATH + "login"}
//           >
//           {"Log in"}
//           </NavTab>
//         </li>
//       </NavListWrapper>
//     )}
//         <SocialListWrapper>
//             <SocialInfoList />
//         </SocialListWrapper>
//     </ ListContainer>
// );

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
        console.log(logout);
        return (
            <NavBarWrapper>
                <TopBarWrapper>
                    <BrandCombo />
                    <RightLinks>
                    <NavList inRow currentUser={currentUser} loggedIn={this.state.loggedIn} logout={logout}/>
                    </RightLinks>
                    <BurgerButton width={"40px"}
                                  hideAt={"1200px"}
                                  clicked={this.dropdownToggler}/>
                </TopBarWrapper>
                <NavDropdown maxHeight={'400px'} collapse={this.state.closed}>
                    <NavList loggedIn={this.state.loggedIn}/>
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

const mapDispatchToProps = (dispatch) => (
  {logout: () => {dispatch(logout)}}
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
