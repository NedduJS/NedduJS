import React from 'react';

import '../assets/styles/components/Tech.css';

const Tech = ({ techName, techImage }) => {
  return (
    <div className='tech'>
      <img
        className='tech__image'
        src={techImage}
        alt='Technology used in the proyect'
      />
      <p className='tech__name'>{techName}</p>
    </div>
  );
};

export default Tech;
