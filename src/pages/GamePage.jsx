import React from 'react';
import GameInterface from '../components/GameInterface/GameInterface';

const GamePage = ({dataQuiz, rewardData, pathToGame}) => (
    <div>
      <GameInterface dataQuiz={dataQuiz} rewardData={rewardData} pathToGame={pathToGame}/>
    </div>
  );

export default GamePage;