// @flow
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import type { Element } from 'react';

const TypeWriter = ({ title } : { title: string }): Element<any> => {
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
