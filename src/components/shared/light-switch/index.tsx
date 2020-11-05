import React from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

import useLocalStorageState from "@v/uselocalStorageState";

import "./style.scss";

const StyledSwitch = withStyles({
  switchBase: {
    color: blueGrey[100],
    '&$checked': {
      color: blueGrey[500],
    },
    '&$checked + $track': {
      backgroundColor: blueGrey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const LightSwitch = ({ onSwitch }) => {
  const [isLightOff, setIsLightOff] = useLocalStorageState("theme", false);

  const handleLightSwitch = (event) => {
    setIsLightOff(event.target.checked);
    onSwitch(event.target.checked);
  };

  return (
    <div className="lightswitch-container">
      <StyledSwitch
        checkedIcon={<span className="MuiSwitch-thumb"><i className="material-icons" style={{
          color: "#FFF",
          fontSize: "12px",
          position: "relative",
          top: "-12px",
        }}>brightness_3</i></span>}
        checked={isLightOff}
        onChange={handleLightSwitch}
        color="primary"
        inputProps={{ 'aria-label': 'dark light mode switch'}}
      />
    </div>
  )
};

export default LightSwitch;
