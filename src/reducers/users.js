import {LOGIN, LOGOUT} from '../actions/authentication';

const initialState = {
  currentUser: null,
}

export default function userReducer (state = initialState, action){
  switch (action.type) {
    case LOGIN:
      console.log(action.data);  
      return {
        currentUser: action.data.username
      }
      break;
    case LOGOUT:
        return {
          currentUser: null
        }
    default:
      return state;
  }
}
