import { connect } from 'react-redux';
import Instruments from '../components/Instruments';

import toggleChecked from '../actions/toggleChecked';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChecked(checked, hidden) {
      dispatch(toggleChecked(checked, hidden));
    }
  };
};

export default connect(null, mapDispatchToProps)(Instruments);
