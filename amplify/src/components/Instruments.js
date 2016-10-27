import React from 'react';

const Instruments = () => {
  return (
    <section className='Instruments'>
      <h1>Instrument(s) You Play</h1>
      <form className='instrument-form'>
        <div className='InstrumentBar'>
          <span className='InstrumentName'>
            <p>Guitar</p>
          </span>
          <span className='CheckboxArea' children={'✔'}>
          </span>
        </div>
        <div className='InstrumentBar'>
          <span className='InstrumentName'>
            <p>Vocals</p>
          </span>
          <span className='CheckboxArea' children={'✔'}>
          </span>
        </div>
        <div className='InstrumentBar'>
          <span className='InstrumentName'>
            <p>Bass</p>
          </span>
          <span className='CheckboxArea' children={'✔'}>
          </span>
        </div>
        <div className='InstrumentBar'>
          <span className='InstrumentName'>
            <p>Drums</p>
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

export default Instruments;
