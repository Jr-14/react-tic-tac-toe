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
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
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

  const boardRows = [0,1,2].map((row) => {
    const rowOfSquares = [0,1,2].map((squareNumber) => {
      const index = 3 * row + squareNumber;
      return (
        <Square value={squares[index]} onSquareClick={() => handleClick(index)} />
      );
    });
    return (
      <div className="board-row">
        { rowOfSquares }
      </div>
    );
  });

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        { boardRows }
      </div>
    </>
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

