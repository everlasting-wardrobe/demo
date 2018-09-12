import React, { Component } from 'react';
import {connect} from 'react-redux';
// Components for style
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
         NavTab, } from  '../../components/globals/index';
import Link from '../../components/link';
import {logout} from '../../actions/authentication';
import {PureTextButton} from '../../components/buttons';
import { SocialInfoList } from '../../components/links/links';
import { BurgerButton } from '../../components/buttons';
import {WORKING_PATH} from '../../api/constants';
import EWLogo from '../../imgs/EWLogo.svg';




const NavList = (props) => (
    <ListContainer flexInRow={props.inRow}>
      {props.currentUser? (
        <NavListWrapper floated={props.inRow}>
          <li>
            <NavTab
              to={WORKING_PATH + "how-it-works"}
            >
            {"How It Works"}
            </NavTab>
          </li>
          <li>
            <NavTab to={'/'}>
            {`Hello ${props.currentUser}`}
            </NavTab>
          </li>
          <li>
            <PureTextButton style={{display: "inline"}} onClick={props.logout}>
            {"Logout"}
            </PureTextButton>
          </li>
        </NavListWrapper>
      ) : (
      <NavListWrapper floated={props.inRow}>
        <li>
          <NavTab
            to={WORKING_PATH + "how-it-works"}
          >
          {"How It Works"}
          </NavTab>
        </li>
        <li>
          <NavTab
            to={WORKING_PATH + "signup"}
          >
          {"Sign up"}
          </NavTab>
        </li>
        <li>
          <NavTab
            to={WORKING_PATH + "login"}
          >
          {"Log in"}
          </NavTab>
        </li>
      </NavListWrapper>
    )}
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
        const {currentUser, logout} = this.props;
        console.log(logout);
        return (
            <NavBar>
                <TopBarWrapper>
                    <BrandCombo />
                    <RightLinks>
                    <NavList inRow currentUser={currentUser} logout={logout}/>
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
