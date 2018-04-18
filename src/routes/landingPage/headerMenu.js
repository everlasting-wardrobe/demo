import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import PropTypes from 'prop-types'
import ImgExample from '../../imgs/hiw-buy.png';
import {StyleSheet, css} from 'aphrodite';
import {bootstrapUtils} from 'react-bootstrap/lib/utils';
import {Link, Redirect} from 'react-router-dom';

const styles = StyleSheet.create({
  navbar : {
    width: '100%',
    marginRight: '0px',
    marginLeft: '0px',
    '> div': {
      width: '100%'
    },
  },

  white: {
    color: `white`,
  },

  black:{
    color:'black',
  },

  position: {
    marginTop: '0px',
  }

})

const propTypes = {
  login: PropTypes.bool,
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
}

const defaultProps = {
  login: false,
}



bootstrapUtils.addStyle(Navbar, 'custom');
class HeaderMenu extends Component {
  componentWillReceiveProps({login}){
    this.setState({login})
  }


  renderActiveNav(handleLogout, color){
    return (
      <Nav pullRight>
        <NavItem onClick={handleLogout} key='logout'>
          <Link to={'/'}>
            <h4  className={css(styles[color], styles.position)}>Log Out</h4>
          </Link>
        </NavItem>
        <NavItem key='impressionMap'>
          <h4  className={css(styles[color], styles.position)}>
            <Link to={'/service/impressionMap'}>{`Impression Map`}</Link>
          </h4>
        </NavItem>
        <NavItem key='welcome'>
          <h4  className={css(styles[color], styles.position)}>Welcome!</h4>
        </NavItem>
        <NavItem key='photo'>
          <img src={ImgExample}  style={{width: '35px', height: '35px'}} />
        </NavItem>
      </Nav>
    )
  }

  renderDefaultNav(handleLogin, color){
    return(
      <Nav className='nav' pullRight>
        <NavItem key='tools'
          href="https://www.everlastingwardrobe.com/">
          <h4  className={css(styles[color], styles.position)}>Tools</h4>
        </NavItem>
        <NavItem key='how_it_works' >
          <h4  className={css(styles[color], styles.position)}>
            <Link to={'/service/hiwVideo'}>How It Works</Link>
          </h4>
        </NavItem>
        <NavItem key='sign_up'>
          <h4  className={css(styles[color], styles.position)}>
            <Link to={'/user/signup'}>Sign Up</Link>
          </h4>
        </NavItem>
        <NavItem onClick={handleLogin} key='log_in'>
          <h4  className={css(styles[color], styles.position)}>Log In</h4>
        </NavItem>
      </Nav>
    )
  }

  render(){
    const {login, handleLogin, handleLogout, color} = this.props;
    return(
      <Navbar  className={css(styles.navbar)}
        style={{background: 'transparent', border:'none', margin: 'none'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <h3  className={css(styles[color], styles.position)}>Everlasting Wardrobe </h3>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
        {login? this.renderActiveNav(handleLogout, color): this.renderDefaultNav(handleLogin, color)}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

HeaderMenu.propTypes = propTypes;
HeaderMenu.defaultProps = defaultProps;

export default HeaderMenu
