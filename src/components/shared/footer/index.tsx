import React, { Props } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const SharedFooter: React.FunctionComponent<Props<any>> = () => {
  const isDarkMode = useSelector((state: any) => state && state.app && state.app.isDarkMode);

  return (
    <div className={`md-padding find-me layout-row layout-align-center-center ${isDarkMode ? 'dark' : 'light'}`}>
      <div className={`layout-column icon-link`}>
        <div className={`icon-link-logo github ${isDarkMode ? 'light' : 'dark'}`} />
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vnguyener">
          github.com/vnguyener
        </a>
      </div>
      <div className={`layout-column icon-link`}>
        <div className={`icon-link-logo linkedin ${isDarkMode ? 'light' : 'dark'}`} />
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/vungynr">
          linkedin.com/in/vungynr
        </a>
      </div>
    </div>
  );
};

export default SharedFooter;
