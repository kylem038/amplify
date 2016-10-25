import React from 'react';

const Instruments = () => {
  return (
    <section className='Instruments'>
      <h1>Instrument(s) You Play</h1>
      <form className='instrument-form'>
        <p>Guitar</p>
        <input type="checkbox" name="guitar" value="Guitar"></input>
        <p>Vocals</p>
        <input type="checkbox" name="vocals" value="Vocals"></input>
        <p>Bass</p>
        <input type="checkbox" name="bass" value="Bass"></input>
        <p>Drums</p>
        <input type="checkbox" name="drums" value="Drums"></input>
      </form>
      <button className='SubmitSettings'>Submit</button>
      <button className='CancelSettings'>Cancel</button>
    </section>
  );
}

export default Instruments;
