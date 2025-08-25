import React from "react";
import Button from "./Button";
import "../App.css";

const ButtonPanel = ({ onClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="calc-button-panel">
      {buttons.map((btn, index) => (
        <Button key={index} label={btn} onClick={onClick} />
      ))}
    </div>
  );
};

export default ButtonPanel;
