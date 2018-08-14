import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import {
  nextWardrobeReducer,
  sizeUpdaterReducer,
  colorPickerReducer,
  stylePresetsReducer,
  styleBalancerReducer
} from './routerReducer';

const appReducer = combineReducers({
  loginReducer,
  nextWardrobeReducer,
  sizeUpdaterReducer,
  colorPickerReducer,
  stylePresetsReducer,
  styleBalancerReducer
})

export default appReducer;
