import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import HeaderBanner from './headerBanner'
import HeaderMenuContainer from '../../containers/headerMenuContainer'
import {StyleSheet, css} from 'aphrodite';
import BackgroundImg from '../../imgs/headerBannerBackground.jpg';

const styles = StyleSheet.create({

  headerWrapper : {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: `1920px 1000px`,
    overflow: 'no',
    height: '1000px'
  }
})



const Header =() => {
  return(
    <div className = {css(styles.headerWrapper)}>
      <HeaderMenuContainer color={'white'}/>
      <HeaderBanner />
    </div>
  )
}

export default Header
