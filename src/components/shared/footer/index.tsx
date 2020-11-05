import React from "react";
import { useTheme } from "@material-ui/core";
import "./style.scss";

const SharedFooter = () => {
  const theme = useTheme();
  const themeType = theme.palette.type;

  return (
    <div
      className={`md-padding find-me layout-row layout-align-center-center ${themeType}`}
    >
      <div className={`layout-column icon-link`}>
        <div
          className={`icon-link-logo github ${
            themeType === "dark" ? "light" : "dark"
          }`}
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/vnguyener"
        >
          github.com/vnguyener
        </a>
      </div>
      <div className={`layout-column icon-link`}>
        <div
          className={`icon-link-logo linkedin ${
            themeType === "dark" ? "light" : "dark"
          }`}
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/vungynr"
        >
          linkedin.com/in/vungynr
        </a>
      </div>
    </div>
  );
};

export default SharedFooter;
