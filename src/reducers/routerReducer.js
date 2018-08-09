import {
  FETCH_NEXT_WARDROBE_DATA,
  FETCH_SIZE_UPDATER_DATA,
  UPDATE_SIZE_UPDATER,
  SAVE_SIZE_UPDATER,
} from '../routes/routerAction';

export const nextWardrobeReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_NEXT_WARDROBE_DATA:
      return {
        month: 'SEPTEMBER',
        day:'06',
        countdown: 15,
      }
      break;
    default:
      return state;
  }
}

export const sizeUpdaterReducer = (state={}, action) => {
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
      if(action.actionType === 'add' && state[sizeIndex] < state.sizeTrackerRange.length){
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
    default:
      return {
        sizeTrackerRange : ['6M', '01', '02', '03', '04','05','06','07','08','10','12','14'],
        topSizeIndex: 2,
        bottomSizeIndex: 2,
      }
  }
}
