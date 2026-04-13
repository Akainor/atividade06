import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div>
      <h2>Calculadora</h2>

      <input onChange={(e) => setNum1(Number(e.target.value))} />
      <input onChange={(e) => setNum2(Number(e.target.value))} />

      <div>
        <button onClick={() => setResult(num1 + num2)}>+</button>
        <button onClick={() => setResult(num1 - num2)}>-</button>
        <button onClick={() => setResult(num1 * num2)}>*</button>
        <button onClick={() => setResult(num1 / num2)}>/</button>
      </div>

      <h3>Resultado: {result}</h3>
    </div>
  );
}