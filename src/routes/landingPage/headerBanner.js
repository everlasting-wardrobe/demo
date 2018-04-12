import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Button} from 'react-bootstrap';
import {bootstrapUtils} from 'react-bootstrap/lib/utils';

const styles = StyleSheet.create({
  bannerWrapper: {
  },
  textWrapper: {
    textAlign: 'center', paddingTop: '200px', paddingBottom: '20px',
    color: 'White', fontFamily: 'Dosis',
  },
  button:{
  }
})

bootstrapUtils.addStyle(Button, 'custom');

const CustomButtonStyle = (props) => {
  const buttonStyles={
    "backgroundColor" : "#E85A4F",
    "color"           : "white",
    'borderColor'     : "#E85A4F",
    'width'           : '200px',
    marginTop         : '150px',
    fontFamily       : `'Open Sans', sans-serif`,
  };
  return (
      <div>
        <Button style={buttonStyles} bsStyle='primary'> {props.text}</Button>
      </div>
    )
}

const HeaderBanner = ()=>(
  <div className={css(styles.bannerWrapper)}>
    <div className={css(styles.textWrapper)}>
      <h2><strong>The First Rental Clothing Service for Growing Kids…</strong></h2>
      <h3>and Savvy Parents</h3>
      <CustomButtonStyle text={`Let's Get Started`} />
    </div>
  </div>
)

export default HeaderBanner
