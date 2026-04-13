import { useState } from "react";
import "../App.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  function handleClick(index) {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";

    setBoard(newBoard);
    setXTurn(!xTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  }

  function calculateWinner(b) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (let [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);

  return (
    <div className="game-container">
      <h2>Jogo da Velha</h2>

      <h3 className="status">
        {winner
          ? `Vencedor: ${winner}`
          : `Vez de: ${xTurn ? "X" : "O"}`}
      </h3>

      <div className="board">
        {board.map((item, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        ))}
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Reiniciar Jogo
      </button>
    </div>
  );
}