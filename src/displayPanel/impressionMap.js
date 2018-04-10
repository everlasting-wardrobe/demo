import React, {Component} from 'react';
import USMap from './d3Map';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  tableContainer:{
    textAlign: 'center',
  }
})


export default class ImpressionMap extends Component{
  constructor(props){
    super(props);
    this.state = {
      stateName: 'US',
      impression: 0,
      popularity: 0,
    }
    this.mapOnclick = this.mapOnclick.bind(this);
  }

  mapOnclick = (stateName, impression, popularity) =>{
    this.setState({stateName, impression, popularity});
  }

  render(){
    return (
      <Grid>
        <Row>
          <Col sm={8} md={8} lg={7} >
            <USMap onClick={this.mapOnclick} />
          </Col>
          <Col sm={3} md={3} lg={4} >
            <Table className = {css(styles.tableContainer)}>
              <thead>
                <tr>
                  <th>State</th>
                  <th>Impression</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.stateName}</td>
                  <td>{this.state.impression}</td>
                  <td>{this.state.popularity}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}
