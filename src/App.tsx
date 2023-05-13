import React from 'react';
import GameBoard from './GameBoard';
import * as S from './styles';


function App() {
  
  return (
    <div className="App">
      <S.Heading>
        <h1>JSnake</h1>
      </S.Heading>
      <GameBoard />
    </div>
  );
}

export default App;
