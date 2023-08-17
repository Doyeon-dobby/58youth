/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const GestureThree = ({ className }) => {
  return (
    <div className={`gesture-three ${className}`}>
      <div className="rectangle" />
      <img className="vector" alt="Vector" src="/img/vector.svg" />
      <img className="union" alt="Union" src="/img/union-1.svg" />
      <div className="div" />
    </div>
  );
};
