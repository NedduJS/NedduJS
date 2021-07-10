/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Link as Redirec } from 'react-scroll';

import '../assets/styles/Home.css';
import photo from '../assets/static/perfilMin.jpg';
import githubImage from '../assets/static/icon_github.svg';
import linkedinImage from '../assets/static/icon_linkedin.svg';

const Home = () => {
  return (
    <section className='homePage'>
      <p className='name'>Nestor Mamani</p>
      <p className='industrial'>Industrial engineering student</p>
      <p className='frontend'>Frontend developer</p>
      <img className='fotoPerfil' src={photo} alt='' />
      <Redirec
        activeClass='active'
        to='contactme_button'
        className='contact_me'
        spy={true}
        smooth={true}
        offset={-70}
        // eslint-disable-next-line react/jsx-closing-bracket-location
        duration={500}>
        Contact me
      </Redirec>
      <div className='redes'>
        <a href='https://twitter.com/NedduJS' target='_blank' rel='noreferrer'>
          <img
            src='https://img.icons8.com/android/50/ffffff/twitter.png'
            alt='Twitter icon'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/nestor-eduardo-mamani-pantoja/'
          target='_blank'
          rel='noreferrer'>
          <img src={linkedinImage} alt='LinkedIn icon' />
        </a>
        <a href='https://github.com/NedduJS' target='_blank' rel='noreferrer'>
          <img src={githubImage} alt='GitHub icon' />
        </a>
      </div>
    </section>
  );
};

export default Home;
