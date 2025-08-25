import React from "react";
import "../App.css";

const Display = ({ value }) => {
  return (
    <div className="calc-display">
      {value || "0"}
    </div>
  );
};

export default Display;
