import React from 'react';
import {Grid, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite';

const styles=StyleSheet.create({
  text:{textAlign:'center'},
  input:{
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    outline: 'none',
    fontSize: '35px',
    width: '400px',
  },
})

const Signup = () => {
  return (
    <Grid>
      <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={8} smOffest={2} xs={12}
        className={css(styles.text)}>
        <h3>Sign Up</h3>
        <div>
          <input key={"userEmail"} className={css(styles.input)}
            type="text"  placeHolder={'email address'}/>
        </div>
        <div>
          <input key={"password"} className={css(styles.input)}
            type="text"  placeHolder={'password'}/>
        </div>
        <div>
          <input key={"password_confirmation"} className={css(styles.input)}
            type="text"  placeHolder={'re-enter password'}/>
        </div>
      </Col>
    </Grid>
  )
}

export default Signup;
