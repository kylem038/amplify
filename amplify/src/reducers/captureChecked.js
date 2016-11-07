const initialState = {
  data: [],
  id: '',
  instrument: ''
  // need way to associate which instrument was selected
};

const captureCheckedReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case 'CAPTURE_CHECKED':
      return {
        id: Date.now(),
        data: [{instrument: 'Guitar'}]
      };
    default:
      return state;
  }
};

export default captureCheckedReducer;
