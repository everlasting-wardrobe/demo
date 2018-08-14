import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import {
  nextWardrobeReducer,
  sizeUpdaterReducer,
  colorPickerReducer,
  stylePresetsReducer,
} from './routerReducer';

const appReducer = combineReducers({
  loginReducer,
  nextWardrobeReducer,
  sizeUpdaterReducer,
  colorPickerReducer,
  stylePresetsReducer
})

export default appReducer;
