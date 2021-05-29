/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Tech from './Tech';

import '../assets/styles/components/ProyectItem.css';

const ProyectItem = ({
  title,
  techArray,
  websiteImage,
  description,
  website,
  code,
}) => {
  return (
    <div className='proyectItem'>
      <div className='proyectItem__head'>
        <p className='proyectItem__title'>{title}</p>
        <div className='proyectItem__tech'>
          {techArray.map((item, index) => {
            return <Tech {...item} key={index} />;
          })}
        </div>
      </div>
      <img
        className='proyectItem__image'
        src={websiteImage}
        alt='Web proyect'
      />
      <p className='proyectItem__description'>{description}</p>
      <div className='proyectItem__buttons'>
        <a
          className='proyectItem__button'
          href={website}
          target='_blank'
          rel='noreferrer'>
          Website
        </a>
        <a
          className='proyectItem__button'
          href={code}
          target='_blank'
          rel='noreferrer'>
          Code
        </a>
      </div>
    </div>
  );
};

export default ProyectItem;
