export function getColors(state){
  return state.colors;
}

export function isFetching(state){
  return state.isFetching;
}

export function hasColors(state){
  return state.colors.length > 0;
}

export function getSelectedColor(state){
  return state.colors.find(color => color.isSelected);
}

export function isSelected(state, idx){
  return state.colors[idx].isSelected;
}