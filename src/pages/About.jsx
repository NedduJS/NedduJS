/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import '../assets/styles/components/About.css';

const About = () => {
  return (
    <section className='about'>
      <div className='aboutBody'>
        <p className='aboutTitle'>About me</p>
        <p className='aboutText'>
          Tech lover, passionate about solving problems with innovation. I like
          working in projects with purpose and I am bias to action.
          <br />
          <br />I have experience building static and dynamic web applications
          with HTML, CSS, JS and React.
          <br />
          <br /> From my background as industrial engineer I am well acquainted
          to team working using agile methodologies (Scrum)
        </p>
      </div>
    </section>
  );
};

export default About;
