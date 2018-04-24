import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import HiwProcess from './hiwProcess'

const styles = StyleSheet.create({
  hiwTitle:{
    textAlign: 'center',
    margin:'0px, 30px, 0px, 30px',
    paddingTop: '25px',
    color:'#E98074',
    fontFamily:'Sacramento',
    fontSize: '100px',
  },
  hiwWrapper:{
    backgroundColor: '#FFFFFF',
  },
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
