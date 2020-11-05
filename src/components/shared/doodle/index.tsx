import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import "./style.scss";

const SelfDoodle = () => {
  // store props
  const isDarkMode = useSelector(state => state.app.isDarkMode);
  
  const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [selfDoodleType, setSelfDoodleType] = useState("open");

  const randomSecond = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) * 1000;
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => setSelfDoodleType(selfDoodleType === "open" ? "blink" : "open"),
      selfDoodleType === "open" ? randomSecond(1, 6) : 700
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [selfDoodleType]);

  return (
    <div className={`self-doodle-container ${matchesSmall ? "vertical" : ""}`}>
      {isDarkMode && (
        <>
          <div className="trapezoid" />
          <div className="circle left" />
          <div className="circle right" />
        </>
      )}
      <div className={`self-doodle ${isDarkMode ? 'dark' : 'light'} ${selfDoodleType}`} />
    </div>
  );
};

export default SelfDoodle;
