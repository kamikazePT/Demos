import { connect } from 'react-redux';
import ColorChooserGroup from '../components/color_chooser_group';
import buttonListActions from '../actions/color_button_list_actions';
import { isFetching, hasColors, getSelectedColor } from '../selectors/color_button_list_selectors';
import { isShuffling } from '../selectors/color_shuffle_selectors';

const mapStateToProps = state => {
  return {
    isFetching : isFetching(state),
    hasColors: hasColors(state),
    isShuffling: isShuffling(state),
    selectedColor : getSelectedColor(state)
  };
};

export default connect(mapStateToProps, buttonListActions)(ColorChooserGroup);
