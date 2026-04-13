import { useState } from "react";
import "../App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Contador de Cliques</h2>

      <div className="counter-box">
        <span className="counter-number">{count}</span>
      </div>

      <div className="counter-buttons">
        <button
          className="counter-btn"
          onClick={() => setCount(count - 1)}
        >
          ➖
        </button>

        <button
          className="counter-reset"
          onClick={() => setCount(0)}
        >
          Resetar
        </button>

        <button
          className="counter-btn"
          onClick={() => setCount(count + 1)}
        >
          ➕
        </button>
      </div>
    </div>
  );
}