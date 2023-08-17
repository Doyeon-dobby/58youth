/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AndroidStatusBar = ({ darkMode, className }) => {
  return (
    <div className={`android-status-bar dark-mode-${darkMode} ${className}`}>
      <div className="icons">
        <img className="cellular" alt="Cellular" src={darkMode ? "/img/cellular-2.svg" : "/img/cellular.svg"} />
        <img className="wifi" alt="Wifi" src={darkMode ? "/img/wifi-1.svg" : "/img/wifi-2.svg"} />
        <div className="battery">
          <div className="capacity" />
        </div>
      </div>
      <div className="text-wrapper">12:30</div>
    </div>
  );
};

AndroidStatusBar.propTypes = {
  darkMode: PropTypes.bool,
};
