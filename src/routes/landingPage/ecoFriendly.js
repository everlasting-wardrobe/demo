import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Grid, Row, Col} from 'react-bootstrap'
import EcoFriendlyImg from '../../imgs/Eco_Friendly_Image.jpg'
// const styles = StyleSheet.create({
//   benefitWrapper:{
//     textAlign:'center'
//   },
//   grid:{
//     width: '80%'
//   }
// })


const styles = StyleSheet.create({
  EcoContainerWrapper : {
    textAlign:'center',
    backgroundImage: `url(${EcoFriendlyImg})`,
    backgroundSize: `100% 100%`,
    height: '800px',
  },
  head: {
    marginTop: '0px',
    paddingTop: '20px',
    paddingBottom: '15px',
    color:  'white',
    fontSize: '90px',
    fontFamily: 'Sacramento',
  },
  grid: {
    width: '80%',
    paddingLeft:'0px',
    paddingRight:'0px',
  },
  row: {

  },
  col: {
    marginLeft: '5.15%',
    marginRight: '5.15%',
    paddingLeft: '0px',
    paddingRight:'0px',
    color: 'white',
  },
  pricingButtonWrapper:{
    height: '550px',
    backgroundColor: 'rgba(232, 90, 79, 0.8)',
    borderRadius:'15px',
    opacity:'70%',
    margin:'auto',
    width: '100%',
  },

  content: {
      margin : 'auto',
      paddingLeft: '5%',
      paddingRight: '5%',
  },

  pricingHead:{
    paddingTop: '15%',
    color: 'white',
    paddingBottom: '15px',
    marginBottom:'0px',
    fontFamily: 'Open Sans',
    fontSize: '65px',
  },

  quantity: {
    fontSize: '48px',
  },

  price:{
    fontSize: '80px',
    paddingTop: '25px',
    fontFamily: 'Lato',
    fontStyle: 'italic, thin',
  },

  period:{
    fontSize: '25px',
    fontFamily: 'Lato',
    fontStyle: 'italic',
  },

  detail: {
    fontSize: '28px',
    fontFamily: 'Lato',
    fontStyle: 'italic',
    marginLeft: '5%',
    marginRight: '5%',
  }
})



const EcoFriendly = () => {
  return (
    <div className={css(styles.EcoContainerWrapper)}>
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
