import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  function handleClick(index) {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";

    setBoard(newBoard);
    setXTurn(!xTurn);
  }

  return (
    <div>
      <h2>Jogo da Velha</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)" }}>
        {board.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{ width: 60, height: 60 }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}