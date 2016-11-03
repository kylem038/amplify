import { connect } from 'react-redux';
import Instruments from '../components/Instruments';

import toggleChecked from '../actions/toggleChecked';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChecked() {
      dispatch(toggleChecked());
    }
  };
};

const mapStateToProps = (state) => {
  return state.toggleCheckedReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(Instruments);
