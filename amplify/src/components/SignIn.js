import React from 'react';

const SignIn = (props) => {
  const { status, logOut, logIn } = props;

  if (status === 'SIGNED_IN') {
    return (
      <div className='LoggedIn' role='link'>
        <button
          className='SignOut'
          alt='Sign out'
          onClick={e => logOut()}
          >Sign Out</button>
      </div>
    )
  } else {
    return (
      <section className="SignIn">
        <button
          className='FacebookLogin'
          alt="Sign up with Facebook"
          onClick={e => logIn()}
          ></button>
      </section>
    );
  }
}

export default SignIn;
