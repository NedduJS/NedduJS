import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <header>
      <img src='' alt='' />
      <div className='options'>
        <Link to='/' className='home'>
          Home
        </Link>
        <Link to='/' className='about'>
          About me
        </Link>
        <Link to='.' className='portfolio'>
          Portfolio
        </Link>
        <Link to='.' className='blog'>
          Blog
        </Link>
        <a
          href='https://twitter.com/NedduJS'
          target='_blank'
          rel='noreferrer'
          // eslint-disable-next-line react/jsx-closing-bracket-location
          className='neddu'>
          @NedduJS
        </a>
      </div>
    </header>
  );
};

export default Header;
