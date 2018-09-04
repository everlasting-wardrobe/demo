// Wardrobe tracker Actions:
export const FETCH_NEXT_WARDROBE_DATA = 'FETCH_NEXT_WARDROBE_DATA';
export const FETCH_NEXT_WARDROBE_COUNTDOWN = 'FETCH_NEXT_WARDROBE_COUNTDOWN';

export const fetchNextWardrobeInfo = {
  type: FETCH_NEXT_WARDROBE_DATA,
};



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


//color picker Actions
export const FETCH_COLORPICKER_USER_DATA = 'FETCH_COLORPICKER_USER_DATA';
export const SAVE_COLORPICKER_DATA = 'SAVE_COLORPICKER_DATA';

export const fetchColorPickerUserData = {
  type: FETCH_COLORPICKER_USER_DATA,
}


// Style Presets Actions:
export const FETCH_STYLE_PRESETS_DATA = 'FETCH_STYLE_PRESETS_DATA';
export const SAVE_STYLE_PRESETS_DATA = 'SAVE_STYLE_PRESETS_DATA';

export const fetchStylePresetsData = {
  type: FETCH_STYLE_PRESETS_DATA,
}

export const saveStylePresetsData = {
  type: SAVE_STYLE_PRESETS_DATA,
};

// Style balancer actions
export const FETCH_STYLE_BALANCER_DATA = 'FETCH_STYLE_BALANCER_DATA';

export const fetchStyleBalancerData = {
  type: FETCH_STYLE_BALANCER_DATA,
}
