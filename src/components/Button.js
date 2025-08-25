import React from "react";
import "../App.css";

const Button = ({ label, onClick }) => {
  return (
    <button className="calc-btn" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
