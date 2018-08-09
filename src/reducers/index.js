import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import {
  nextWardrobeReducer,
  sizeUpdaterReducer,
} from './routerReducer';

const appReducer = combineReducers({
  loginReducer,
  nextWardrobeReducer,
  sizeUpdaterReducer,
})

export default appReducer;
