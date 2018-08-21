import {
  FETCH_NEXT_WARDROBE_DATA,
  FETCH_SIZE_UPDATER_DATA,
  UPDATE_SIZE_UPDATER,
  SAVE_SIZE_UPDATER,
  FETCH_COLORPICKER_USER_DATA,
  FETCH_STYLE_PRESETS_DATA,
  FETCH_STYLE_BALANCER_DATA
} from '../routes/routerAction';


// Next Wardrobe Reducer
export const nextWardrobeReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_NEXT_WARDROBE_DATA:
      return {
        month: 'SEPTEMBER', // should be time stamp
        day:'06',
        countdown: 15,
      }
      break;
    default:
      return state;
  }
}


// Size Updater Reducer
export const sizeUpdaterReducer = (state={
  sizeTrackerRange : ['6M', '01', '02', '03', '04','05','06','07','08','10','12','14'],
  topSizeIndex: 0, // should be a string;
  bottomSizeIndex: 0,
}, action) => {
  switch (action.type) {
    case FETCH_SIZE_UPDATER_DATA:
        return {
          sizeTrackerRange : ['6M', '01', '02', '03', '04','05','06','07','08','10','12','14'],
          topSizeIndex: 0,
          bottomSizeIndex: 0,
        }
      break;
    case UPDATE_SIZE_UPDATER:
      let sizeIndex;
      if(action.target === 'top'){
        sizeIndex = 'topSizeIndex';
      }else{
        sizeIndex = 'bottomSizeIndex';
      }
      if(action.actionType === 'add' && state[sizeIndex] < state.sizeTrackerRange.length - 1){
        return ({
          ...state,
          sizeTrackerRange: [...state.sizeTrackerRange],
          [sizeIndex]: state[sizeIndex] + 1,
        })
      }
      if(action.actionType === 'minus' && state[sizeIndex] > 0){
        return {
          ...state,
          sizeTrackerRange: [...state.sizeTrackerRange],
          [sizeIndex]: state[sizeIndex] - 1,
        }
      }
      return state;
      break;
    case SAVE_SIZE_UPDATER:
      console.log(state);
      return state;
      break;
    default:
      return state;
  }
}


// Color Picker Reducer
export const colorPickerReducer = (state={
  colorSetData:
   [
     {r:'135', g: '255', b:'135', a:'1'},
     {r:'135', g: '135', b:'255', a:'1'},
     {r:'135', g: '255', b:'255', a:'1'},
     {r:'255', g: '255', b:'135', a:'1'}
  ],
  // [{r: g: b: a:}]
}, action) => {
  switch (action.type) {
    case FETCH_COLORPICKER_USER_DATA:
      return {
        colorSetData:[
           {r:'135', g: '255', b:'135', a:'1'},
           {r:'135', g: '135', b:'255', a:'1'},
           {r:'135', g: '255', b:'255', a:'1'},
           {r:'255', g: '255', b:'135', a:'1'}
        ]
      }
      break;
    default:
      return state;
  }
}


// Style Presets Reducer
export const stylePresetsReducer = (state={
  genres : ['jazz', 'pop', 'indie', 'funk', 'jockJams', 'hipHop'],
  // {property: number}
  colors : ['blue', 'yellow', 'orange', 'red', 'green', 'gray'],
  totalPoints: 5,
  pointBoundary: 10,
  jazz: 0,
  pop:  0,
  indie: 5,
  funk:  0,
  jockJams: 0,
  hipHop: 0,
}, action) => {
  switch (action.type) {
    case FETCH_STYLE_PRESETS_DATA:
      return state;
      break;
    default:
      return state;
  }
}


// Style Balancer actions
export const styleBalancerReducer = (state = {
  size: 1,
  style: 3,
  genre: 5
}, action)=>{
  switch (action.type) {
    case FETCH_STYLE_BALANCER_DATA:
      return state;
      break;
    default:
      return state;
  }
}
