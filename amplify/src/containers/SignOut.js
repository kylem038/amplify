import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignOut from '../components/Signout';

import * as actions from '../actions/auth';

const mapStateToProps = (state) => {
  return state.auth;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
