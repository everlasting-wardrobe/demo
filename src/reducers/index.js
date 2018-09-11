import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import {
  mixingBoardReducer
} from './routerReducer';
import userReducer from './users';

const appReducer = combineReducers({
  loginReducer,
  mixingBoardReducer,
  userReducer
})

export default appReducer;
