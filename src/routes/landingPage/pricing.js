import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Grid, Row, Col} from 'react-bootstrap'
import PricingImg from '../../imgs/pricing.jpg'

const styles = StyleSheet.create({
  pricingContainerWrapper : {
    textAlign:'center',
    backgroundImage: `url(${PricingImg})`,
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

const Princingtitle = () => {
  return (
    <h1 className={css(styles.head)}>Change The Way You Shop</h1>
  )
}

const Premium = () => {
  return (
    <div className={css(styles.content)}>
      <h2 className={css(styles.pricingHead)}>Premium</h2>
      <DoubleLine />
      <h3 className = {css(styles.quantity)}>{`4 outfits for`}</h3>
      <span className={css(styles.price)}>$40</span>
      <span className={css(styles.period)}>{`/month`}</span>
    </div>
  )
}

const DoubleLine = () =>{
  return(
    <div>
      <svg height={20} width={270}>
        <line x1={0} y1={5} x2={270} y2={5}
          style={{stroke: 'white', strokeWidth: 1.5}}></line>
        <line x1={0} y1={15} x2={270} y2={15}
          style={{stroke: 'white', strokeWidth: 1.5}}></line>
      </svg>
    </div>
  )
}

const Delux = () => {
  return (
    <div className={css(styles.content)}>
      <h2 className={css(styles.pricingHead)}>Deluxe</h2>
        <DoubleLine />
        <h3 className = {css(styles.quantity)}>{`4 outfits for`}</h3>
        <span className={css(styles.price)}>$80</span>
        <span className={css(styles.period)}>{`/month`}</span>
        <p className = {css(styles.detail)}>{`*each wardrobe includes brand new clothing`}</p>
    </div>
  )
}

const Pricing = () => {
  return (
    <div className={css(styles.pricingContainerWrapper)}>
      <Princingtitle />
      <Grid fluid>
        <Row className={css(styles.row)}>
          <Col lg={3} md={3} sm={5} xs={5} className={css(styles.col)}>
            <div className={css(styles.pricingButtonWrapper)}>
              <Premium />
            </div>
          </Col>
          <Col lg={3} md={3} sm={5} xs={5} className={css(styles.col)}>
            <div className={css(styles.pricingButtonWrapper)}>
              <Delux />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Pricing
