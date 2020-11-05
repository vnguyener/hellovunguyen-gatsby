import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TypeWriter = ({ title }) => {
  return (
    <span className="typewriter">
      {title}
    </span>
  );
};

TypeWriter.propTypes = {
  title: PropTypes.string,
};

export default TypeWriter;
