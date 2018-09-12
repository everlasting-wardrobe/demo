import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  persistStore,
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
  key:'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, appReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
          <Route path='/' component={App} />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
