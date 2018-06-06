import shuffleActionTypes from './types/color_shuffle_action_types';
import buttonListActions from './color_button_list_actions';
import buttonActions from './color_button_actions';
import { getColors } from '../selectors/color_button_list_selectors';
import { asyncUtils } from 'bsimprimir-core-utils';
import * as TIME from '../domain/times';
import shuffle from 'shuffle-array';

export default {
  doShuffleColors
};

function doShuffleColors() {
  return async (dispatch, getState) => {
    const currentColors = getColors(getState());

    dispatch(doShuffleColorsStart());
    dispatch(buttonActions.doSelectColor(null));
    dispatch(buttonListActions.doSetColors([]));

    await asyncUtils.wait(TIME.HALF_SECOND);

    dispatch(doShuffleColorsComplete());

    const newColors = shuffle([...currentColors]);
    dispatch(buttonListActions.doSetColors(newColors));
    dispatch(buttonActions.doSelectColor(newColors[Math.floor(Math.random() * this.state.colors.length)].value));
  };

  function doShuffleColorsStart(){
    return {
      type: shuffleActionTypes.DO_SHUFFLE_COLORS_START
    };
  }

  function doShuffleColorsComplete(){
    return {
      type: shuffleActionTypes.DO_SHUFFLE_COLORS_SUCCESS
    };
  }
}

