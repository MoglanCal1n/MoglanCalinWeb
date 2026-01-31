import React from 'react';

const Launcher = ({ onOpen }) => {
  return (
    <>
      <p style={{ textAlign: 'center' }}>Find out more about me!</p>
      <div className="launcher-menu">
        <button onClick={() => onOpen('about')}>About</button>
        <button onClick={() => onOpen('projects')}>Projects</button>
        <button onClick={() => onOpen('volunteering')}>Volunteering</button>
        <button onClick={() => onOpen('eyes')}>Eyes and Ears</button>
        <button onClick={() => onOpen('contact')}>Contact</button>
      </div>
      <div className="status-bar"><p className='status-bar-field'>Status: Ready</p></div>
    </>
  );
};

export default Launcher;