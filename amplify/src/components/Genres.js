import React from 'react';

const Genres = () => {
  return (
    <section className='Genres'>
      <h1>Genres You Like</h1>
      <form className='genres-form'>
        <p>Rock</p>
        <input type="checkbox" name="rock" value="Rock"></input>
        <p>Blues</p>
        <input type="checkbox" name="blues" value="Blues"></input>
        <p>Jazz</p>
        <input type="checkbox" name="jazz" value="Jazz"></input>
      </form>
      <button className='SubmitSettings'>Submit</button>
      <button className='CancelSettings'>Cancel</button>
    </section>
  );
}

export default Genres;
