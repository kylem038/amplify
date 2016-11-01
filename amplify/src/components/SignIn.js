import React from 'react';
import { Link } from 'react-router';

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
      <Link to='/settings'>
        <button
          className='FacebookLogin'
          alt="Sign up with Facebook"
          onClick={e => logIn()}
          ></button>
        </Link>
      </section>
    );
  }
}

export default SignIn;
