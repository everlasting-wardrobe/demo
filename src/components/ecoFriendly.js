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

const EcoFriendly = () => {
  return (
    <div className={css(styles.benefitWrapper)}>
      <h2>Eco-friendly and Recycling</h2>
      <Grid className={css(styles.grid)}>
        <Row>
          <Col lg={4} md={4} sm={4} xs={4}>
              <h4>Time</h4>
              <p>&nbsp;</p>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
              <h4>Money</h4>
              <p>&nbsp;</p>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
              <h4>Money</h4>
              <p>&nbsp;</p>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default EcoFriendly
