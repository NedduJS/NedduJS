import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Link as Redirec } from 'react-scroll';

import useViewport from '../utils/useViewport';

import '../assets/styles/components/Header.css';

const Header = () => {
  const [location, setLocation] = useState('');
  const history = useHistory();
  const width = useViewport();
  const breakpoint = 800;

  useEffect(() => {
    return history.listen((location) => {
      setLocation(location.pathname);
      console.log(location.pathname);
    });
  }, [history]);
  return (
    <header>
      <div className='options'>
        {location === '/' ? (
          <Redirec
            to='homePage'
            className='home'
            spy={true}
            smooth={true}
            offset={-70}
            // eslint-disable-next-line react/jsx-closing-bracket-location
            duration={500}>
            Home
          </Redirec>
        ) : (
          <Link to='/' className='home'>
            Home
          </Link>
        )}
        {width < breakpoint ? (
          location === '/about' ? (
            <Link to='/'>Home</Link>
          ) : (
            <Link to='/about' className='header-about'>
              About
            </Link>
          )
        ) : (
          <Link
            to='/about'
            // eslint-disable-next-line react/jsx-closing-bracket-location
            className='header-about'>
            About me
          </Link>
        )}

        <Link to='/portfolio' className='portfolio'>
          Portfolio
        </Link>
        <a
          href='https://twitter.com/nestoredduardo'
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
