import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import HiwProcess from './hiwProcess'

const styles = StyleSheet.create({
  hiwTitle:{
    textAlign: 'center', marginTop:'0', paddingTop: '50px',
    color:'#E98074', fontFamily:'Dosis'},
  hiwWrapper:{backgroundColor: '#EAE7DC'},
})

const Hiw = () => (
  <div className={css(styles.hiwWrapper)}>
    <h1 className={css(styles.hiwTitle)}>
      Discover New Brands Each Month
    </h1>
    <HiwProcess />
  </div>
)

export default Hiw
