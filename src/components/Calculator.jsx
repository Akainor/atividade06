import { useState } from "react";
import "../App.css";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  function handleClick(value) {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  }

  function clearDisplay() {
    setDisplay("0");
  }

  function calculate() {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Erro");
    }
  }

  function toggleSign() {
    if (display !== "0") {
      setDisplay(String(Number(display) * -1));
    }
  }

  function percentage() {
    setDisplay(String(Number(display) / 100));
  }

  return (
    <div className="calc-container">
      <div className="calc-display">{display}</div>

      <div className="calc-grid">
        <button className="btn gray" onClick={clearDisplay}>AC</button>
        <button className="btn gray" onClick={toggleSign}>+/-</button>
        <button className="btn gray" onClick={percentage}>%</button>
        <button className="btn orange" onClick={() => handleClick("/")}>÷</button>

        <button className="btn" onClick={() => handleClick("7")}>7</button>
        <button className="btn" onClick={() => handleClick("8")}>8</button>
        <button className="btn" onClick={() => handleClick("9")}>9</button>
        <button className="btn orange" onClick={() => handleClick("*")}>×</button>

        <button className="btn" onClick={() => handleClick("4")}>4</button>
        <button className="btn" onClick={() => handleClick("5")}>5</button>
        <button className="btn" onClick={() => handleClick("6")}>6</button>
        <button className="btn orange" onClick={() => handleClick("-")}>−</button>

        <button className="btn" onClick={() => handleClick("1")}>1</button>
        <button className="btn" onClick={() => handleClick("2")}>2</button>
        <button className="btn" onClick={() => handleClick("3")}>3</button>
        <button className="btn orange" onClick={() => handleClick("+")}>+</button>

        <button className="btn zero" onClick={() => handleClick("0")}>0</button>
        <button className="btn" onClick={() => handleClick(".")}>.</button>
        <button className="btn orange" onClick={calculate}>=</button>
      </div>
    </div>
  );
}