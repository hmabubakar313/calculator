import React, { useState } from "react";
import "./Cal.css";

function Calculator() {
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    setResult((prevResult) => {
      if (prevResult === "0" && value !== ".") {
        console.log("in first condition",value," ",prevResult)
        return value;
      }
      if (prevResult.includes(".") && value === ".") {
        console.log("in 2nd condition",value," ",prevResult)
        return prevResult;
      }
      console.log("prevResult123 ",prevResult)
      console.log("value123",value)
      return prevResult + value;
    });
  };


  const clearResult = () => {
    setResult("0");
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")} className="operator">
          +
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")} className="operator">
          -
        </button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")} className="operator">
          *
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={clearResult} className="clear">
          AC
        </button>
        <button onClick={calculateResult} className="equals">
          =
        </button>
        <button onClick={() => handleClick("/")} className="operator">
          /
        </button>
      </div>
    </div>
  );
}

export default Calculator;
