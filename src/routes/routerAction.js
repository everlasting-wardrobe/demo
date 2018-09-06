// MixingBoard Actions:
export const FETCH_MIXING_BOARD_DATA = 'FETCH_MIXING_BOARD_DATA';
export const UPDATE_MIXING_BOARD_DATA = 'UPDATE_MIXING_BOARD_DATA';
export const SAVE_MIXING_BOARD_DATA = 'SAVE_MIXING_BOARD_DATA';

export const fetchMixingBoardData = (data) => {
  return {
    type: FETCH_MIXING_BOARD_DATA,
    data: data
  }
};

export const updataMixingBoardData = (data) => {
  return {
    type: UPDATE_MIXING_BOARD_DATA,
    data: data
  }
}

export const saveMixingBoardData = ()=>{
  return {
    type: SAVE_MIXING_BOARD_DATA
  }
}



// Size tracker Actions:
export const FETCH_SIZE_UPDATER_DATA = 'FETCH_SIZE_UPDATER_DATA';
export const UPDATE_SIZE_UPDATER = 'UPDATE_SIZE_UPDATER';
export const SAVE_SIZE_UPDATER = 'SAVE_SIZE_UPDATER';

export const fetchSizeUpdaterData = {
  type: FETCH_SIZE_UPDATER_DATA,
};

export const updateSizeUpdater =  (actionType, target) => ({
  type: UPDATE_SIZE_UPDATER,
  actionType,
  target,
});

export const saveSizeUpdater = {
  type: SAVE_SIZE_UPDATER,
};
