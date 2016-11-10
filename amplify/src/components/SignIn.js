import React from 'react';

const SignIn = (props) => {
  const { logIn } = props;

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

export default SignIn;
