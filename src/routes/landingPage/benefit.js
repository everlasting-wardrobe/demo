import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Grid, Row, Col} from 'react-bootstrap'

const styles = StyleSheet.create({
  benefitWrapper:{
    textAlign:'center'
  },
  grid:{
    width: '80%'
  }
})

const Benefit = () => {
  return (
    <div className={css(styles.benefitWrapper)}>
      <h2>Everlasting Wardrobe Save..</h2>
      <Grid className={css(styles.grid)}>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
              <h4>Time</h4>
              <p>&nbsp;</p>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
              <h4>Money</h4>
              <p>&nbsp;</p>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Benefit
