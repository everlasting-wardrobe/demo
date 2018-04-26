import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {Grid, Row, Col} from 'react-bootstrap'
import EcoFriendlyImg from '../../imgs/Eco_Friendly_Image.jpg'
import Suncircle from '../../imgs/Sun_Circe.png'
import Arrowcircle from '../../imgs/Arrow_Circle.png'
import Plant from '../../imgs/Plant.png'


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
    backgroundSize: `1920px 1400px`,
     height: '1400px',
  },
  head: {
    marginTop: '0px',
    paddingTop: '20px',
    paddingBottom: '15px',
    color:  'white',
    fontSize: '80px',
    fontFamily: 'Sacramento',
  },
  grid: {
    width: '100%',
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
  image: {
    height: '200px',
    width: '200px',
  },

  content: {
    fontFamily: 'Lato',
    fontStyle: 'italic',
    lineHeight: '40px',
    fontSize: '30px',
    margin: '25px 60px 50px 60px',
    // paddingLeft: '150px',
    // paddingRight: '150px',
    // color: '#white',
    color : '#eae7dc',
    // fontStyle: 'italic',
  },
  textWrapper: {
    paddingTop: '10px',
    // paddingLeft:'5px',
    // paddingRight:'5px',
    color:'white',
    position: 'relative',
  },

})

const EcoFriendlytitle = () => {
  return (
    <h1 className={css(styles.head)}>Do Good, Look Good, Feel Good</h1>
  )
}

const featureContent = [
  {
    img: Plant,
    head: 'plant',
    content: `EW uses Eco-Friendly detergents and packaging
              materials to minimize our enviromental impact`
  },

  {
    img: Arrowcircle,
    head: 'arrow',
    content: `Apparel is Donated in Refurbished Wardrobes
              with Charity Partners after it is taken out of service`
  },
  {
    img: Suncircle,
    head: 'sun',
    content: `Any inventory that's too damaged is sent to Recycling
              Partners for repurposing`
  }
]

const FeatureHandle = (contents) => {
  return (
    contents.map((data, i) =>(
      <div key = {data.head}>
        <Col lg = {4} md = {6} sm ={12} lgOffset={8}>
          <div className = {css(styles.textWrapper)}>
            <h3 hidden>{i}</h3>
            <img className = {css(styles.image)} src = {data.img} />
            <p className = {css(styles.content)}>{data.content}</p>
          </div>
        </Col>
      </div>
      )
    )
  )
}
const EcoFriendly = () => {
  return (
    <div className = {css(styles.EcoContainerWrapper)}>
     <EcoFriendlytitle />
      <Grid fluid >
        <Row>
          {FeatureHandle(featureContent)}
        </Row>
      </Grid>
    </div>
  )
}

// export default Benefit

// const EcoFriendly = () => {
//   return (
//     <div className={css(styles.EcoContainerWrapper)}>
//       <EcoFriendlytitle />
//       <Grid className={css(styles.grid)}>
//         <Row>
//           <Col lg={4} md={4} sm={4} xs={4}>
//               <h4>Time</h4>
//               <p>&nbsp;</p>
//           </Col>
//           <Col lg={4} md={4} sm={4} xs={4}>
//               <h4>Money</h4>
//               <p>&nbsp;</p>
//           </Col>
//           <Col lg={4} md={4} sm={4} xs={4}>
//               <h4>Money</h4>
//               <p>&nbsp;</p>
//           </Col>
//         </Row>
//       </Grid>
//     </div>
//   )
// }

export default EcoFriendly
