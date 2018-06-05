import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import HeaderBanner from './headerBanner'
import HeaderMenuContainer from '../../containers/headerMenuContainer'
import {StyleSheet, css} from 'aphrodite';
import BackgroundImg from '../../imgs/headerBannerBackground.jpg';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const styles = StyleSheet.create({
  headerWrapperMobile :{
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: `cover`,
    // backgroundSize: 'auto',
    overflow: 'no',
    position: 'relative'
  },

  headerWrapperBrowser : {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: `1920px 1000px`,
    // backgroundSize: 'auto',
    overflow: 'no',
    height: '1000px'
  },

  HeaderBannerWrapper : {

  },
  menuMobile: {
    height: '351px',
    position : 'absolute'
  },
  menuBrowser:{

  }
})



const Header =() => {
  console.log(isMobile);
  return(
    <div className = {css(isMobile? styles.headerWrapperMobile :styles.headerWrapperBrowser)}>
      <HeaderMenuContainer color={'white'} className ={css(isMobile? styles.menuMobile : styles.menuBrowser)}/>
      <HeaderBanner className = {css(styles.HeaderBannerWrapper)}/>
    </div>
  )
}

export default Header
