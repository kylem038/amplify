import React from 'react';

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
      <button className='SubmitSettings'>Submit</button>
      <button className='CancelSettings'>Cancel</button>
    </section>
  );
}

export default Genres;
