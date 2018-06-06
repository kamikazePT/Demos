export function getColors(state){
  return state.buttonList.colors;
}

export function isFetching(state){
  return state.buttonList.isFetching;
}

export function hasColors(state){
  return state.buttonList.colors.length > 0;
}

export function getSelectedColor(state){
  return state.buttonList.selectedColor;
}