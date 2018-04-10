import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

let store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
