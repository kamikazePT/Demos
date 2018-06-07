import actionTypes from './types/color_button_list_action_types';
import { asyncUtils } from 'bsimprimir-core-utils';
import * as TIME from '../domain/times';

export default {
  doFetchColors,
  doSetColors,
  doSelectColor
};

function doFetchColors() {
  return async (dispatch) => {
    dispatch(doFetchColorsStart());

    await asyncUtils.wait(TIME.ONE_SECOND);

    dispatch(doSetColors([
      {
        value : '#FF0000',
        label : 'Red'
      },
      {
        value : '#00FF00',
        label : 'Green'
      },
      {
        value : '#0000FF',
        label : 'Blue'
      },
      {
        value : '#FFFF00',
        label : 'Yellow'
      }
    ]));
  };

  function doFetchColorsStart(){
    return {
      type: actionTypes.DO_FETCH_COLORS_START
    };
  }

}

function doSetColors(colors){
  return {
    type: actionTypes.DO_FETCH_COLORS_SUCCESS,
    payload: { colors }
  };
}

function doSelectColor(index){
  return {
    type: actionTypes.DO_SELECT_COLOR,
    payload: { index }
  };
}