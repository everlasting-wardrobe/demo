import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import {
  mixingBoardReducer
} from './routerReducer';

const appReducer = combineReducers({
  loginReducer,
  mixingBoardReducer
})

export default appReducer;
