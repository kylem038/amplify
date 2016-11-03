import React from 'react';
import { Link } from 'react-router';

const Genres = () => {
  return (
    <section className='Genres'>
      <h1>Genres You Like</h1>
      <form className='genres-form'>
      <div className='GenreBar'>
        <span className='GenreName'>
          <p>Rock</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      <div className='GenreBar'>
        <span className='GenreName'>
          <p>Blues</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      <div className='GenreBar'>
        <span className='GenreName'>
          <p>Jazz</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      <div className='GenreBar'>
        <span className='GenreName'>
          <p>Indie</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      </form>
      <button className='SubmitSettings'>
        <Link to='/settings' className='SubmitButtonLink'>Submit</Link>
      </button>
      <button className='CancelSettings'>
        <Link to='/settings' className='CancelButtonLink'>Cancel</Link>
      </button>
    </section>
  );
}

export default Genres;
