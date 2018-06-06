import actionTypes from './types/color_button_action_types';

export default {
  doSelectColor
};

function doSelectColor(color) {
  return {
    type: actionTypes.DO_SELECT_COLOR,
    payload: { color } 
  };
}