import React from 'react';
import { useSelector } from 'react-redux';

import About from './about';
import Title from './title';
import Skills from './skills';
import SelfDoodle from '../../shared/doodle';
import './style.scss';

const Home = (): JSX.Element => {
  const isDarkMode = useSelector(state => state.app.isDarkMode);

  return (
    <div className={`page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="root-container">
        <Title />
        <SelfDoodle />
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
