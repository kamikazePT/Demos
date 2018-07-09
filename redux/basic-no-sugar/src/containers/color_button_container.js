import { connect } from 'react-redux';
import ColorButton from '../components/color_button';
import { isSelected } from '../selectors/color_button_list_selectors';
import buttonActions from '../actions/color_button_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected : isSelected(state, ownProps.index)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doToggleColor : () => dispatch(buttonActions.doToggleColor(ownProps.index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton);