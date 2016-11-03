import React from 'react';
import { Link } from 'react-router';

const Skill = () => {
  return (
    <section className='Skill'>
      <h1>Your Skill Level</h1>
      <form className='skill-form'>
      <div className='SkillBar'>
        <span className='SkillName'>
          <p>Beginner</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      <div className='SkillBar'>
        <span className='SkillName'>
          <p>Experienced</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      <div className='SkillBar'>
        <span className='SkillName'>
          <p>Master</p>
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

export default Skill;
