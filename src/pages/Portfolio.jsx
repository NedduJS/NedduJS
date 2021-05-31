/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ProyectItem from '../components/ProyectItem';

import '../assets/styles/Portfolio.css';
import htmlImage from '../assets/static/icon_html.svg';
import cssImage from '../assets/static/icon_css.svg';
import jsImage from '../assets/static/icon_javascript.svg';
import reactImage from '../assets/static/icon_react.svg';
import reduxImage from '../assets/static/icon_redux.svg';
import webpackImage from '../assets/static/icon_webpack.svg';
import gitImage from '../assets/static/icon_git.svg';
import nodeImage from '../assets/static/icon_nodejs.svg';
import expressImage from '../assets/static/icon_express.svg';
import youtubeImage from '../assets/static/icon_youtube.svg';
import responsiveImage from '../assets/static/icon_responsive.svg';

import platziVideoImg from '../assets/static/platziVideo.png';
import badgesImg from '../assets/static/badges.png';
import videoPlayerImg from '../assets/static/videoPlayer.png';
import batataImg from '../assets/static/batatabit.png';

const Portfolio = () => {
  const TechStack = [
    {
      techName: 'HTML',
      techImage: htmlImage,
    },
    {
      techName: 'CSS',
      techImage: cssImage,
    },
    {
      techName: 'JS',
      techImage: jsImage,
    },
    {
      techName: 'React',
      techImage: reactImage,
    },
    {
      techName: 'Redux',
      techImage: reduxImage,
    },
    {
      techName: 'Webpack',
      techImage: webpackImage,
    },
    {
      techName: 'Git',
      techImage: gitImage,
    },
    {
      techName: 'NodeJS',
      techImage: nodeImage,
    },
    {
      techName: 'Express',
      techImage: expressImage,
    },
    {
      techName: 'Youtube API',
      techImage: youtubeImage,
    },
    {
      techName: 'Responsive Design',
      techImage: responsiveImage,
    },
  ];
  const portfolioList = [
    {
      title: 'Badge Management',
      techArray: [TechStack[3], TechStack[7], TechStack[8]],
      websiteImage: badgesImg,
      description:
        'Badge management system where you can add new badges, built with Express in the backend using MongoDB as database and Redux thunk to get and post API data ',
      website: 'https://badgesplatform.netlify.app/',
      code: 'https://github.com/NedduJS/badgesFrotend',
    },
    {
      title: 'PlatziVideo',
      techArray: [TechStack[3], TechStack[4], TechStack[5]],
      websiteImage: platziVideoImg,
      description:
        'Video player application with dynamic favorites section and movie finder developed with React and Redux',
      website: 'https://platzivideo-react.netlify.app/',
      code: 'https://github.com/NedduJS/platziVideoReact',
    },
    {
      title: 'Netzi Video Player',
      techArray: [TechStack[2], TechStack[9], TechStack[10]],
      websiteImage: videoPlayerImg,
      description:
        'Video player built using the Youtube API with time bar, play/pause buttons and volume control implemented with JavaScript',
      website: 'https://neddujs.github.io/videoPlayer/',
      code: 'https://github.com/NedduJS/videoPlayer',
    },
    {
      title: 'Batatabit',
      techArray: [TechStack[0], TechStack[1], TechStack[10]],
      websiteImage: batataImg,
      description:
        'Responsive landing page built with HTML and CSS, using media queries and flexbox',
      website: 'https://neddujs.github.io/Mobile-first/',
      code: 'https://github.com/NedduJS/Mobile-first',
    },
  ];

  return (
    <div className='portfolio'>
      <p className='portfolio__title'>Proyects</p>
      <div className='portfolio__list'>
        {portfolioList.map((item, index) => {
          return <ProyectItem {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
