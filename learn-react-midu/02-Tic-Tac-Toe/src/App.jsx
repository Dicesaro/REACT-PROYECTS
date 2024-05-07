import "./App.css";
import { useState } from "react";

// const TURN = {
//   X: "X",
//   O: "O",
// };

const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
  const [board, setBoard] = useState([
    "x",
    "o",
    "x",
    "o",
    "x",
    "o",
    "x",
    "o",
    "x",
  ]);

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <section className="game">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index}>
                {board[index]}
              </Square>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
