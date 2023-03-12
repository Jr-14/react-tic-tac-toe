import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello Tic Tac Toe</h1>
      <Game />
    </div>
  );
}

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{ /* TODO */ }</ol>
      </div>
    </div>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return ;
    }

    const newSquareValues = [...squares];

    // Determine the player to draw on the screen
    if (xIsNext) {
      newSquareValues[i] = 'X';
    } else {
      newSquareValues[i] = 'O';
    }
    onPlay(newSquareValues);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="board">
      <div classname="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div classname="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div classname="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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

function calculateWinner(squares) {
  const winningPositions = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningPositions.length; i++) {
    const [positionOne, positionTwo, positionThree] = winningPositions[i];
    if (squares[positionOne] 
      && squares[positionOne] === squares[positionTwo] 
      && squares[positionOne] === squares[positionThree]
    ) {
      return squares[positionOne];
    }
  }
  return null;
}

export default App;

