import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Grid, Row, Col} from 'react-bootstrap'
import Computer from '../../imgs/computer.png'
import Pig from '../../imgs/pig.png'
import Mailbox from '../../imgs/mailbox.png'
import Hanger from '../../imgs/hanger.png'

const styles = StyleSheet.create({
  hiwProcessWrapper: {
    textAlign: 'center',
    paddingTop: '80px',
    paddingBottom:'150px',
  },

  grid:{
    width: '80%'
  },

  stepWrapper : {
    backgroundColor: '#E98074',
    height: '300px',
    padding: '20px, 0px, 20px, 20px',
    marginTop: '20px',
    borderRadius: '15px',
  },

  textWrapper: {
    paddingTop: '10px',
    paddingLeft:'5px',
    paddingRight:'5px',
    color:'#EAE7DC',
    position: 'relative',
    fontFamily: `'Open Sans', sans-serif`,
  },

  img: {
    height: '150px',
    width:'150px',
  },

  header:{
    marginTop:'0px',
    fontFamily: `'Open Sans', sans-serif`,
  },

  index: {
    position: 'absolute',
    left: '30px',
    top:'10px',
  }
})

const hiwProcessContents = [
  {
    img: Computer,
    head: 'Build',
    content:`Choose the music-themed outfit styles that best suit your
            child. Our Stylists will do the rest!`},
  {
    img: Hanger,
    head:'Borrow',
    content: `Wear each outfit, or mix-and-match the new looks with your
    'exsisting clothing. Wear as often as you'd like for 30 days!`},
  {
    img: Pig,
    head:'Buy',
    content: `Love something? Discounted pricing for purchases in the Wardrobe
   or through our Brand partners.`},
  {
    img: Mailbox,
    head: 'Give Back',
    content: `At the end of your rental, send us back the non-purchased
       clothing. Free shipping both ways!`
  }
]

const hiwProcessHandle = (contents, wid) =>{
  return(
    contents.map((data, i) =>(
      <Col key={data.head} lg={3} md={3} sm={6} xs={12}>
        <div className={css(styles.stepWrapper)} >
          <div className={css(styles.textWrapper)}>
            <h3 className={css(styles.index)}><strong>{i}</strong></h3>
            <img className={css(styles.img)} src = {data.img} />
            <h3 className={css(styles.header)}><strong>{data.head}</strong></h3>
            <p>{data.content}</p>
          </div>
        </div>
      </Col>
      )
    )
  )
}

const HiwProcess = () => {
  return (
    <div className = {css(styles.hiwProcessWrapper)} ref={(hiwProcessWrapper)=>{this.hiwProcessWrapper = hiwProcessWrapper}}>
      <Grid fluid>
        <Row>
        {hiwProcessHandle(hiwProcessContents, this.hiwProcessWrapper.offsetWidth)}
        </Row>
      </Grid>
    </div>
  )
}

export default HiwProcess
