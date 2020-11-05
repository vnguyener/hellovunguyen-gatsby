import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import "./style.scss";

const SelfDoodle = () => {
  const theme = useTheme();
  const themeType = theme.palette.type;
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
      {themeType === "dark" && <div className="trapezoid" />}
      {themeType === "dark" && <div className="circle left" />}
      {themeType === "dark" && <div className="circle right" />}
      <div className={`self-doodle ${themeType} ${selfDoodleType}`} />
    </div>
  );
};

export default SelfDoodle;
