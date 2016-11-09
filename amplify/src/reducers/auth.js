const initialState = {
  auth: {
    status: 'ANONYMOUS',
    username: null,
    uid: null,
    useremail: null,
  }
};

const auth = ( state = initialState.auth, action ) => {
  switch(action.type) {
    case 'ATTEMPTING_SIGN_IN':
      return {
        status: 'AWAITING_AUTH_RESPONSE',
        username: 'guest',
        uid: null,
        useremail: '',
      };
    case 'LOG_OUT':
      return {
        status: 'ANONYMOUS',
        username: 'guest',
        uid: null,
        useremail: '',
      };
    case 'LOG_IN':
      return {
        status: 'SIGNED_IN',
        username: action.username,
        uid: action.uid,
        useremail: action.useremail,
      };
    default:
      return state;
  }
};

export default auth;
