import { connect } from 'react-redux';
import ColorShuffleButton from '../components/color_shuffle_button';
import shuffleActions from '../actions/color_shuffle_actions';
import { isFetching } from '../selectors/color_button_list_selectors';
import { isShuffling } from '../selectors/color_shuffle_selectors';

const mapStateToProps = state => {
  const isShufflingFlag = isShuffling(state);
  return {
    isShuffling: isShufflingFlag,
    canShuffle : !isShufflingFlag && !isFetching(state)
  };
};

export default connect(mapStateToProps, shuffleActions)(ColorShuffleButton);
