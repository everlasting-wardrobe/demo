import React from 'react'
import HeaderBanner from './headerBanner'
import {StyleSheet, css} from 'aphrodite';
import BackgroundImg from '../../imgs/headerBannerBackground.jpg';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Navbar from '../../view/navbar/navbar';

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
      <HeaderBanner className = {css(styles.HeaderBannerWrapper)}/>
    </div>
  )
}

export default Header
