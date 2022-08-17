import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const Skills = (): JSX.Element => {
  const isDarkMode = useSelector(state => state.app.isDarkMode);

  const highlightClass = `highlight ${isDarkMode ? 'dark' : 'light'}`;

  return (
    <div className="">
      <h2>What I Work With</h2>
      <div className="article-page skills">
        <ul>
          <li>
            <mark className={highlightClass}>React (w/ hooks)</mark>
          </li>
          <li>
            <mark className={highlightClass}>Redux</mark>
          </li>
          <li>
            <mark className={`${highlightClass} fade`}>Material UI</mark>
          </li>
          <li>
            <mark className={`${highlightClass} fade`}>Node.js</mark>
          </li>
          <li>Styled Components</li>
          <li>Angular</li>
          <li>
            <mark className={`${highlightClass} fade`}>Express.js</mark>
          </li>
          <li>Vue.js</li>
          <li>Coffeescript</li>
          <li>jQuery / jQuery UI</li>
          <li>
            <i> etc.</i>
          </li>
        </ul>
        <ul>
          <li>
            <mark className={highlightClass}>Webpack</mark>
          </li>
          <li>Gulp</li>
          <li>
            <mark className={`${highlightClass}`}>Jenkins</mark>
          </li>
          <li>ESLint</li>
          <li>Flow</li>
          <li>
            <mark className={`${highlightClass} fade`}>Typescript</mark>
          </li>
          <li>&nbsp;</li>
          <li>Microsoft SQL</li>
          <li>
            <mark className={`${highlightClass}`}>MySQ</mark>L
          </li>
          <li>MongoDB</li>
          <li>Sequelize</li>
        </ul>
        <ul>
          <li>Jasmine</li>
          <li>
            <mark className={`${highlightClass} fade`}>Jest</mark>
          </li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Enzyme</li>
          <li>Puppeteer</li>
          <li>&nbsp;</li>
          <li>
            <mark className={highlightClass}>Yarn</mark>
          </li>
          <li>npm</li>
          <li>Bower</li>
          <li>Nuget</li>
        </ul>
        <ul>
          <li>
            <mark className={highlightClass}>C#/.NET</mark>
          </li>
          <li>Python</li>
          <li>HTML 5</li>
          <li>Sass</li>
          <li>Less</li>
          <li>Stylus</li>
          <li>CSS</li>
          <li>&nbsp;</li>
        </ul>
        <ul>
          <li>
            <mark className={highlightClass}>AWS</mark>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
