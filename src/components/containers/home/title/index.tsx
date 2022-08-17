import React, { useState, useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import './style.scss';

import TypeWriter from '../../../shared/type-writer';

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(null);

  // Remember the latest callback.
  useEffect(() => {
    if (savedCallback) {
      savedCallback.current = callback;
    }
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Title = (): JSX.Element => {
  const titles = [
    "I'm a Software Engineer",
    "I'm closing my stackoverflow tabs.",
    "I'm probably busy playing Animal Crossing.",
    'I code cool websites.',
    "I'm lurking on dribbble.",
    "I'm looking for zoom backgrounds",
    "I'm busy reading Medium.",
    'Javascript is <3.',
    'I love running.',
    'I play tennis.',
    "I'm listening to 2000s emo bands.",
    'I like to doodle.',
    "I'm browsing Reddit.",
    "I'm pouring coffee (that I'll forget to drink)",
  ];

  const [title, setTitle] = useState('');
  const [index, setIndex] = useState(0);
  let intervalIndex = index;

  useInterval(() => {
    changeTitle(titles[index]);
    setIndex(intervalIndex++);

    if (index >= titles.length) {
      changeTitle(titles[0]);
      setIndex(0);
    }
  }, 750);

  const changeTitle = (title: string) => {
    setTitle(title);
  };

  return (
    <div className="writing-heading">
      <Typography variant="h5" className="name-heading">
        Hello, my name is Vu Nguyen
      </Typography>
      <TypeWriter text={`and ${title}`} />
    </div>
  );
};

export default Title;
