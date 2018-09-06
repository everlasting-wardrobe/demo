import {
  FETCH_NEXT_WARDROBE_DATA,
  FETCH_SIZE_UPDATER_DATA,
  UPDATE_SIZE_UPDATER,
  SAVE_SIZE_UPDATER,
  FETCH_COLORPICKER_USER_DATA,
  FETCH_STYLE_PRESETS_DATA,
  FETCH_STYLE_BALANCER_DATA,
  FETCH_MIXING_BOARD_DATA,
  SAVE_STYLE_PRESETS_DATA,
  UPDATE_MIXING_BOARD_DATA
} from '../routes/routerAction';


export const mixingBoardReducer = (
  state={
    UserName: 'USER NAME',
    NextWardrobe: "2018-07-26T20:43:25.943Z",
    sizeTrackerRange : ['6M', '1y', '2y', '3y', '4y','5y','6y','7y','8y','10','12','14'],
    top: '4y', // should be a string;
    bottom: '1y',
    color1: {r:'135', g: '255', b:'135', a:'1'},
    color2: {r:'135', g: '135', b:'255', a:'1'},
    color3: {r:'135', g: '255', b:'255', a:'1'},
    color4: {r:'255', g: '255', b:'135', a:'1'},
    genres : ['jazz', 'pop', 'indie', 'funk', 'jockJams', 'hipHop'],
    // {property: number}
    colors : ['blue', 'yellow', 'orange', 'red', 'green', 'gray'],
    totalPoints: 5,
    pointBoundary: 10,
    jazz: 0,
    pop:  0,
    indie: 5,
    funk:  0,
    jockjams: 0,
    hiphop: 0,
    size: 1,
    style: 3,
    genre: 5
  }, action) => {
    switch (action.type) {
      case  FETCH_MIXING_BOARD_DATA:
        const curState = {
          ...state,
          ...action.data,
        }
        return curState;
        break;
      case UPDATE_MIXING_BOARD_DATA:
        return {
          ...state,
          ...action.data
        };
        break;
      case UPDATE_SIZE_UPDATER:
        let sizeIndex;
        let size;
        if(action.target === 'top'){
          sizeIndex = state.sizeTrackerRange.indexOf(state.top);
          size = 'top';
        }else{
          sizeIndex = state.sizeTrackerRange.indexOf(state.bottom);
          size = 'bottom';
        }
        if(action.actionType === 'add' && sizeIndex < state.sizeTrackerRange.length - 1){
          return ({
            ...state,
            [size]: state.sizeTrackerRange[sizeIndex + 1],
          })
        }
        if(action.actionType === 'minus' && sizeIndex > 0){
          return {
            ...state,
            [size]: state.sizeTrackerRange[sizeIndex - 1],
          }
        }
        return state;
        break;
      default:
        return state;

    }

}
