import { connect } from 'react-redux';
import ColorChooserGroup from '../components/color_chooser_group';
import buttonListActions from '../actions/color_button_list_actions';
import { isFetching, hasColors, getSelectedColor } from '../selectors/color_button_list_selectors';

const mapStateToProps = state => {
  return {
    isFetching : isFetching(state),
    hasColors: hasColors(state),
    selectedColor : getSelectedColor(state)
  };
};

const mapDispatchToProps = dispatch => {
  return buttonListActions(dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorChooserGroup);
