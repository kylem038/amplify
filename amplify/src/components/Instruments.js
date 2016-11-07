import React from 'react';
import { Link } from 'react-router';
import ShowHideSpan from './CheckSpan';

// let checkedDiv = div.InstrumentBar;
// let checkedFromList = [];
//
// const findChecked = (checkedDiv) => {
//   for (var i = 0; i <= section.checkedDiv.length; i++) {
//     if (checkedDiv.checked === true) { checkedFromList.push(checkedDiv.value); }
//   }
//   console.log(checkedFromList);
//   return checkedFromList;
// };

const Instruments = (props) => {
  const { toggleChecked, instruments } = props;
  console.log('Component', instruments);
  return (
    <section className='Instruments'>
      <h1>Instrument(s) You Play</h1>
      <form className='instrument-form'>
        <div className='InstrumentBar'  onClick={e => toggleChecked()}>
          <span className='InstrumentName'>
            <p>Guitar</p>
          </span>
          <ShowHideSpan hidden={props.checked}/>
        </div>
        <div className='InstrumentBar' onClick={e => toggleChecked()}>
          <span className='InstrumentName'>
            <p>Vocals</p>
          </span>
          <ShowHideSpan hidden={props.checked}/>
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
      {/* capture anything where checked=true
      push that data over to firebase */}
      <button className='SubmitSettings' >
        <Link to='/settings' className='SubmitButtonLink'>Submit</Link>
      </button>
      <button className='CancelSettings'>
        <Link to='/settings' className='CancelButtonLink'>Cancel</Link>
      </button>
    </section>
  );
}

export default Instruments;
