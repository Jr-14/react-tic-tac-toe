import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

function Board() {
  return (
    <div className="board">
      <div classname="board-row">
        <Square value="0" />
        <Square value="0" />
        <Square value="0" />
      </div>
      <div classname="board-row">
        <Square value="0" />
        <Square value="0" />
        <Square value="0" />
      </div>
      <div classname="board-row">
        <Square value="0" />
        <Square value="0" />
        <Square value="0" />
      </div>
    </div>
  );
}

function Square({ value }) {
  return (
    <button>{ value }</button>
  )
}

export default App;

