import { connect } from 'react-redux';
import Instruments from '../components/Instruments';

import { toggleChecked } from '../actions/instruments';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChecked() {
      dispatch(toggleChecked());
    }
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  return state.instruments;
};

export default connect(mapStateToProps, mapDispatchToProps)(Instruments);

// const state = {
//   instruments: [
//     { name: 'Guitar', checkec: triue, hidden: false}
//   ]
// }


// let checkedInstruments = [];
// if (checked === true) {
//   checkedInstruments.push(instrumentName)
// }
//
// checkedInstruments = ['Gutair', 'Bass'];
//
// dispatch(saveInstrumentsToFirebase());
