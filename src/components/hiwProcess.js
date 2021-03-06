import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Grid, Row, Col} from 'react-bootstrap'
import Computer from '../imgs/computer.png'

import Pig from '../imgs/pig.png'
import Mailbox from '../imgs/mailbox.png'
import Hanger from '../imgs/hanger.png'

const styles = StyleSheet.create({
  hiwProcessWrapper: {
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom:'30px',
  },

  stepWrapper : {
    backgroundColor: '#FFFFFF',
    height: '300px',
    padding: '20px, 0px, 20px, 20px',
    marginTop: '20px',
    borderRadius: '15px',
  },

  textWrapper: {
    paddingTop: '10px',
    paddingLeft:'5px',
    paddingRight:'5px',
    color:'#000000',
    position: 'relative',

  },

  img: {
    height: '120px',
    width:'150px',
  },

  header:{
    fontSize: '34px',
    color : '#665350',
    marginTop:'20px',
    fontFamily: 'Lato',
    fontStyle: 'thin',
  },

  content:{
    marginTop: '5px',
    fontFamily: 'Lato',
    lineHeight: '21px',
    fontSize: '17px',
    margin: '0px 20px 0px 20px',
    // color: '#655757',
    color : '#8E8D8A',
    fontStyle: 'italic',
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



var GridStyle = {
  margin: '0px,0px, 0px, 0px',
}


const hiwProcessHandle = (contents)=> {
  return(
    contents.map((data, i) =>(
      <Col key={data.head} lg={3} md={3} sm={6} xs={12}>
        <div className={css(styles.stepWrapper)} >
          <div className={css(styles.textWrapper)}>
            <h3 hidden className={css(styles.index)}>{i}</h3>
            <img className={css(styles.img)} src = {data.img} />
            <h3 className={css(styles.header)}>{data.head}</h3>
            <p className={css(styles.content)}>{data.content}</p>
          </div>
        </div>
      </Col>
      )
    )
  )
}

const HiwProcess = () => {
  return (
    <div className = {css(styles.hiwProcessWrapper)}>
      <Grid style = {GridStyle}>
        <Row>
        {hiwProcessHandle(hiwProcessContents)}
        </Row>
      </Grid>
    </div>
  )
}

export default HiwProcess
