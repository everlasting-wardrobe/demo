import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Grid, Row, Col} from 'react-bootstrap'
import MoneyBag from '../../imgs/Money.png'
import clock from '../../imgs/Clock.png'
import benefitBackimg from '../../imgs/BenefitsBackground.jpg'
const styles = StyleSheet.create({
  benefitWrapper:{
    textAlign:'center',
    paddingTop: '20px',
    paddingBottom:'30px',
    backgroundImage: `url(${benefitBackimg})`,
    backgroundSize: `100% 150%`
  },

  benefithead: {
    fontSize: '90px',
    fontFamily: 'Lato',
    fontStyle: 'thin'
  },

  grid:{
    width: '80%'
  },

  textWrapper: {
    paddingTop: '10px',
    paddingLeft:'5px',
    paddingRight:'5px',
    color:'#000000',
    position: 'relative',
  },

  stepWrapper : {
    backgroundColor: '#FFFFFF',
    height: '300px',
    padding: '20px, 0px, 20px, 20px',
    marginTop: '20px',
    borderRadius: '25px',
  },

  image: {
    height: '160px',
    width: '150px',
  },

  header: {
    fontSize: '45px',
    color : '#e75a50',
    marginTop:'20px',
    fontFamily: 'Lato',
    fontStyle: 'thin',
    marginBot: '20px',
  },

  content: {

    fontFamily: 'Lato',
    lineHeight: '21px',
    fontSize: '17px',
    margin: '25px 60px 50px 60px',
    paddingLeft: '15%',
    paddingRight: '15%',
    // color: '#655757',
    // color : '#8E8D8A',
    // fontStyle: 'italic',
  },

})
const Benefittitle = () => {
  return (
    <h1 className={css(styles.benefithead)}>Everlasting Wardrobe Save</h1>
  )
}
const benefitContent = [
  {
    img: clock,
    head: 'time',
    content: `take the guesswork out of the discovering the new trendy
              and/or organic clothes for your children`
  },

  {
    img: MoneyBag,
    head: 'money',
    content: `Spend 1/3 of your usual clothing cost,
              and the dress your child in original, and high quality apparel.`
  }
]

const BenefitHandle = (contents) => {
  return (
    contents.map((data, i) =>(
      <div  key={data.head}>
        <Col lg = {6} md ={6} sm ={6} xs ={12}>
          <div className = {css(styles.textWrapper)}>
            <h3 hidden>{i}</h3>
            <img className = {css(styles.image)} src = {data.img} />
            <h3 className = {css(styles.header)}>{data.head}</h3>
            <p className = {css(styles.content)}><strong>{data.content}</strong></p>
          </div>
        </Col>
      </div>
      )
    )
  )
}
const Benefit = () => {
  return (
    <div className = {css(styles.benefitWrapper)}>
      <Grid fluid >
        <Row>
        <Benefittitle />
        {BenefitHandle(benefitContent)}
        </Row>
      </Grid>
    </div>
  )
}

export default Benefit
