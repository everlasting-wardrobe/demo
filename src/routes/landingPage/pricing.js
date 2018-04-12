import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Grid, Row, Col} from 'react-bootstrap'
import PricingImg from '../../imgs/pricing.jpg'

const styles = StyleSheet.create({
  pricingContainerWrapper : {
    textAlign:'center',
    backgroundImage: `url(${PricingImg})`,
    backgroundSize: 'cover',
    height: '600px',
  },
  head: {
    marginTop: '0px',
    paddingTop: '100px',
    color:  'white',
    fontSize: '60px',
    fontFamily: 'Dosis',
  },
  grid: {
    width: '75%',
    paddingLeft:'0px',
    paddingRight:'0px',
  },
  row: {

  },
  col: {
    marginLeft: '4.15%',
    marginRight: '4.15%',
    paddingLeft: '0px',
    paddingRight:'0px',
    color: 'white',
  },
  pricingButtonWrapper:{
    height: '250px',
    backgroundColor: 'rgba(232, 90, 79, 0.8)',
    borderRadius:'15px',
    opacity:'70%',
    margin:'auto',
    width: '60%',
  },
  pricingHead:{
    paddingTop: '5%',
    color: 'white',
    paddingBottom: '0px',
    marginBottom:'0px',
    fontFamily: 'Open Sans',
  },
  price:{
    fontSize: '40px',
    fontFamily: 'Open Sans',
  }
})

const Pricing = () => {
  return (
    <div className={css(styles.pricingContainerWrapper)}>
      <h1 className={css(styles.head)}>Change The Way You Shop</h1>
      <Grid className={css(styles.grid)}>
        <Row className={css(styles.row)}>
          <Col lg={5} md={5} sm={5} xs={5} className={css(styles.col)}>
            <div className={css(styles.pricingButtonWrapper)}>
              <div>
                <h2 className={css(styles.pricingHead)}>Premium</h2>
                <svg height={20} width={140}>
                  <line x1={10} y1={5} x2={125} y2={5}
                    style={{stroke: 'white', strokeWidth: 1.5}}></line>
                  <line x1={10} y1={15} x2={125} y2={15}
                    style={{stroke: 'white', strokeWidth: 1.5}}></line>
                </svg>
              </div>
              <h3>{`4 outfits for`}</h3>
              <span className={css(styles.price)}>$40</span>
              <span>{`/month`}</span>
            </div>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5} className={css(styles.col)}>
            <div className={css(styles.pricingButtonWrapper)}>
              <div>
                <h2 className={css(styles.pricingHead)}>Deluxe</h2>
                <svg height={20} width={140}>
                  <line x1={10} y1={5} x2={125} y2={5}
                    style={{stroke: 'white', strokeWidth: 1.5}}></line>
                  <line x1={10} y1={15} x2={125} y2={15}
                    style={{stroke: 'white', strokeWidth: 1.5}}></line>
                </svg>
              </div>
              <h3>{`4 outfits for`}</h3>
              <span className={css(styles.price)}>$80</span>
              <span>{`/month`}</span>
              <p style={{width:'80%', margin:'auto'}}>{`*each wardrobe includes brand new clothing`}</p>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Pricing
