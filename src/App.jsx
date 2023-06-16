import { useState } from 'react';
import Board from './Components/Board';
import './App.scss';

function App() {
  let counter = 1;

  const onBtnClick = () => {
    console.log('Hello');
    counter = counter + 1;
  };

  return (
    <div className="app">
      <Board />
    </div>
  );
}
export default App;
