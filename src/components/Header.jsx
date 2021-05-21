import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Redirec } from 'react-scroll';

import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <header>
      <img src='' alt='' />
      <div className='options'>
        <Link to='/' className='home'>
          <Redirec
            activeClass='active'
            to='homePage'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          >
            Home
          </Redirec>
        </Link>
        <Redirec
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          // eslint-disable-next-line react/jsx-closing-bracket-location
          className='header-about'>
          About me
        </Redirec>
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
