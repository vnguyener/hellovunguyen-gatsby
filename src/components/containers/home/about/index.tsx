import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const About: React.FunctionComponen = () => {
  const isDarkMode = useSelector(state => state.app.isDarkMode);
  const highlightClass = `highlight ${isDarkMode ? 'dark' : 'light'}`;
  const [position] = useState('Senior Software Engineer');

  return (
    <div className="article-page">
      <p>
        I&apos;m a {position} based out of DFW, TX with a passion to create and deliver&nbsp;
        <mark className={`${highlightClass} fade`}>beautiful, thoughtful web experiences</mark>.
      </p>
    </div>
  );
};

export default About;
