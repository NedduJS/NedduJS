import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Footer.css';

const Header = () => {
  return (
    <section className='footer'>
      <Link to='/' className='footer__name'>
        Nestor Eduardo Mamani Pantoja @NedduJS 2021
      </Link>
      <div className='footer__right'>
        <a
          href='https://twitter.com/nestoredduardo'
          target='_blank'
          rel='noreferrer'
          // eslint-disable-next-line react/jsx-closing-bracket-location
          className='footer__twitter'>
          Twitter
        </a>
        <a
          href='https://www.linkedin.com/in/nestoredduardo/'
          target='_blank'
          rel='noreferrer'
          // eslint-disable-next-line react/jsx-closing-bracket-location
          className='footer__linkedin'>
          LinkedIn
        </a>
        <a
          href='https://www.instagram.com/nestoredduardo/'
          target='_blank'
          rel='noreferrer'
          // eslint-disable-next-line react/jsx-closing-bracket-location
          className='footer__instagram'>
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Header;
