import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

function Board() {
  const [xIsNext, isXNext] = useState(true);
  const [squareValues, populateSquareValues] = useState(Array(9).fill(null));

  function handlePopulateSquareValues(i) {
    // Square values are already filled in, then don't handle 
    // The click
    if (squareValues[i]) {
      return;
    }

    const newSquareValues = [...squareValues];
    if (xIsNext) {
      newSquareValues[i] = 'X';
    } else {
      newSquareValues[i] = 'O';
    }
    isXNext(!xIsNext)
    populateSquareValues(newSquareValues);
  }

  return (
    <div className="board">
      <div classname="board-row">
        <Square value={squareValues[0]} onSquareClick={() => handlePopulateSquareValues(0)} />
        <Square value={squareValues[1]} onSquareClick={() => handlePopulateSquareValues(1)} />
        <Square value={squareValues[2]} onSquareClick={() => handlePopulateSquareValues(2)} />
      </div>
      <div classname="board-row">
        <Square value={squareValues[3]} onSquareClick={() => handlePopulateSquareValues(3)} />
        <Square value={squareValues[4]} onSquareClick={() => handlePopulateSquareValues(4)} />
        <Square value={squareValues[5]} onSquareClick={() => handlePopulateSquareValues(5)} />
      </div>
      <div classname="board-row">
        <Square value={squareValues[6]} onSquareClick={() => handlePopulateSquareValues(6)} />
        <Square value={squareValues[7]} onSquareClick={() => handlePopulateSquareValues(7)} />
        <Square value={squareValues[8]} onSquareClick={() => handlePopulateSquareValues(8)} />
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button classname="square" onClick={onSquareClick}>
      { value }
    </button>
  );
}

export default App;

