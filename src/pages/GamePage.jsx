import React from 'react';
import GameInterface from '../components/GameInterface/GameInterface';

const GamePage = ({dataQuiz, rewardData, pathToGame}) => (
    <div>
      <GameInterface questionText={dataQuiz} reward={rewardData} pathToEnd={pathToGame}/>
    </div>
  );

export default GamePage;