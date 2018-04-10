import React from 'react';
import ImpressionMap from '../displayPanel/impressionMap';
import BarChart from '../displayPanel/barChart';
import SearchPanel from '../containers/search_panel';
import HeaderMenuContainer from '../containers/headerMenuContainer';
import HiwVideo from '../displayPanel/hiwVideo';
import {
  BrowserRouter as Router,
  Route, Switch} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  background :{
    'background-color': '#FCFCF5',
  },

})

const Service = () => {
    return (
      <div className={css(styles.background)}>
        <HeaderMenuContainer color={'black'} />
        <Router>
          <Switch>
            <Route path='/service/impressionMap' component={ImpressionMap} />
            <Route path='/service/barchart' component={BarChart} />
            <Route path='/service/searchPanel' component={SearchPanel} />
            <Route path='/service/hiwVideo' component={HiwVideo} />
          </Switch>
        </Router>
      </div>
    )
}

export default Service;
