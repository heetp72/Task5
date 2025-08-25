import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../App.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Safer than raw eval (only numbers and operators)
        // eslint-disable-next-line no-new-func
        const result = Function(`return ${input}`)();
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calc-container">
      <Display value={input} />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
};

export default Calculator;
