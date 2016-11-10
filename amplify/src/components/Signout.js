import React from 'react';

const SignOut = (props) => {
  const { logOut } = props;

    return (
      <div className='LoggedIn' role='link'>
        <button
          className='SignOut'
          alt='Sign out'
          onClick={e => logOut()}
          >Sign Out</button>
      </div>
    )
}

export default SignOut;
