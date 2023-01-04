import React from 'react';
import './styles/App.css';
import ImgHand from "./assets/images/hand.png";

import { Routes, Route} from 'react-router-dom'

import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import EndPage from './pages/EndPage';

function App() {

  const pathStart = "/";
  const pathGame = "/game";
  const pathEnd = "/end";

  const dataQuiz = [
    {
      id: 1, 
      quizText: "How old your elder brother was 10 years before you was born, mate?", 
      answer: [
      {variant: "A", varText: "10 years"},
      {variant: "B", varText: "11 years"},
      {variant: "C", varText: "12 years"},
      {variant: "D", varText: "14 years"}
    ]},
    {
      id: 1, 
      quizText: "How old your elder brother was 10 years before you was born, mate?", 
      answer: [
      {variant: "A", varText: "10 years"},
      {variant: "B", varText: "11 years"},
      {variant: "C", varText: "12 years"},
      {variant: "D", varText: "14 years"}
    ]},
    {
      id: 1, 
      quizText: "How old your elder brother was 10 years before you was born, mate?", 
      answer: [
      {variant: "A", varText: "10 years"},
      {variant: "B", varText: "11 years"},
      {variant: "C", varText: "12 years"},
      {variant: "D", varText: "14 years"}
    ]},
    {
      id: 1, 
      quizText: "How old your elder brother was 10 years before you was born, mate?", 
      answer: [
      {variant: "A", varText: "10 years"},
      {variant: "B", varText: "11 years"},
      {variant: "C", varText: "12 years"},
      {variant: "D", varText: "14 years"}
    ]}
  ];

  const dataReward = [
    {
      icon: "$",
      reward: 500,
    },
    {
      icon: "$",
      reward: 1000,
    },
    {
      icon: "$",
      reward: 2000,
    },
    {
      icon: "$",
      reward: 4000,
    },
    {
      icon: "$",
      reward: 8000,
    },
    {
      icon: "$",
      reward: 16000,
    },
    {
      icon: "$",
      reward: 32000,
    },
    {
      icon: "$",
      reward: 64000,
    },
    {
      icon: "$",
      reward: 125000,
    },
    {
      icon: "$",
      reward: 250000,
    },
    {
      icon: "$",
      reward: 500000,
    },
    {
      icon: "$",
      reward: 1000000,
    }
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage pathToGame={pathGame} ImgHand={ImgHand} classCSS="myModal" />} />
        <Route path="/game" element={<GamePage pathToGame={pathEnd} dataQuiz={dataQuiz} rewardData={dataReward.reverse()} />} />
        <Route path="/end" element={<EndPage pathToGame={pathStart} ImgHand={ImgHand} classCSS="myModalEnd" />} />
      </Routes>
    </div>
  );
}

export default App;
