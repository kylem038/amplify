import React from 'react';
import { Link } from 'react-router';
import firebase, { provider } from '../firebase';

const SignIn = () => {
  return (
    <section className="SignIn">
    <h1>JamFinder</h1>
    <Link to='/settings'>
      <button
        className='FacebookLogin'
        alt="Sign up with Facebook"
        onClick={() => firebase.auth().signInWithPopup(provider).then(function(result) {
          // var token = result.credential.accessToken;
          // var user = result.user;
          // console.log(user);
        }).catch(function(error) {
          console.log(error);
        })}
        ></button>
      </Link>
    </section>
  );
}

export default SignIn;
