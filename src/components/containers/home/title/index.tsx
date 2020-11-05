import React, { useState, useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import "./style.scss";

import TypeWriter from "../../../shared/type-writer";

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
      if (savedCallback && typeof savedCallback.current === "function") {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, savedCallback]);
}

const Title = () => {
  const titles = [
    "I'm closing my stackoverflow tabs.",
    "I'm probably busy playing Animal Crossing.",
    "I code cool websites.",
    "I'm lurking on dribbble.",
    "I enjoy reading.",
    "I'm busy reading Medium.",
    "Javascript is <3.",
    "I trail run.",
    "I play tennis.",
    "I hike.",
    "I like to doodle.",
    "I'm browsing Reddit.",
    "I'm pouring coffee (that I'll forget to drink)",
  ];

  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);

  useInterval(() => {
    let intervalIndex = index;
    changeTitle(titles[index]);
    setIndex(intervalIndex++);

    if (index >= titles.length) {
      changeTitle("I'm a Software Engineer");
      setIndex(0);
    }
  }, 750);

  const changeTitle = title => {
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
