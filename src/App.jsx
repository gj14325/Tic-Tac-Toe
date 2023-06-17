import { useState } from 'react';
import { calculateWinner } from './winner';
import Board from './Components/Board';
import StatusMessage from './Components/StatusMessage';
import './App.scss';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  console.log(winner);

  const handleSquareClick = clickedposition => {
    if (squares[clickedposition] || winner) {
      return;
    }

    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedposition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
export default App;
