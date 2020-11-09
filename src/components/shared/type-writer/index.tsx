import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { TypeWriterProps } from '../../../types';

const TypeWriter = ({ text }: TypeWriterProps): JSX.Element => {
  return <span className="typewriter">{text}</span>;
};

TypeWriter.propTypes = {
  text: PropTypes.string,
};

export default TypeWriter;
