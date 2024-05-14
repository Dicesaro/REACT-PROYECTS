import "./App.css";
import confetti from "canvas-confetti";
import { useState } from "react";

const TURN = {
  X: "X",
  O: "O",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(TURN.X);

  const checkWinner = (boardCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ) {
        return boardCheck[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className="game">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            );
          })}
        </section>

        <section className="turn">
          <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
          <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
        </section>

        {winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>{winner === false ? "Empate" : "Gano:"}</h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Jugar de nuevo</button>
              </footer>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
