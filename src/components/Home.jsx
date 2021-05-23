import React from 'react';
import { Link as Redirec } from 'react-scroll';

import '../assets/styles/Home.css';
import photo from '../assets/static/perfilMin.jpg';

const Home = () => {
  return (
    <section className='homePage'>
      <p className='name'>Nestor Mamani</p>
      <p className='industrial'>Industrial engineering student</p>
      <p className='frontend'>Frontend developer</p>
      <img className='fotoPerfil' src={photo} alt='' />
      <Redirec
        activeClass='active'
        to='contactme'
        className='contact_me'
        spy={true}
        smooth={true}
        offset={-70}
        // eslint-disable-next-line react/jsx-closing-bracket-location
        duration={500}>
        Contact me
      </Redirec>
      <div className='redes'>
        <img
          src='https://img.icons8.com/android/50/ffffff/twitter.png'
          alt='Twitter icon'
        />
        <img
          src='https://img.icons8.com/android/24/ffffff/linkedin.png'
          alt='LinkedIn icon'
        />
        <img
          src='https://img.icons8.com/material-sharp/24/ffffff/github.png'
          alt='GitHub icon'
        />
      </div>
    </section>
  );
};

export default Home;
