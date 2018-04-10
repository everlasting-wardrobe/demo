import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Booth = ({item}) => {
  const {clothImgUrl, discription, detail} = item;
  return(
    <Grid>
      <Row>
        <Col lg={3} md={8} sm={8} xs={8}>
          <img width={300} height={200} src={clothImgUrl} alt="Item Image Review" />
        </Col>
        <Col lg={4} md={8} sm={8} xs={8}>
          <h3><strong>{discription}</strong></h3>
          <p>{detail}</p>
        </Col>
      </Row>
    </Grid>
  )
}

export default Booth;
