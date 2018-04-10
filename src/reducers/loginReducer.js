import {LOGIN, LOGOUT} from '../actions';

const loginReducer  = (state=false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
  }
  return false;
}

export default loginReducer;
