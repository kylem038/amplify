const guitar = {
  id: 1,
  name: 'Guitar',
  checked: false,
};

const initialState = [
  guitar,
];

const instruments = ( state = initialState, action ) => {
  switch(action.type) {
    case 'TOGGLE_CHECKED':
      
      console.log('Instrument reducer', state);
      return state.map(instrument => {
        if (instrument.id !== action.id) {
          return instrument;
        }
        return Object.assign({}, instrument, {
          checked: !instrument.checked,
        });
      });
    default:
      return state;
  }
};

export default instruments;
