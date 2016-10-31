import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {
  const { logIn } = this.props;

  return (
    <section className="SignIn">
    <h1>JamFinder</h1>
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

export default SignIn;
