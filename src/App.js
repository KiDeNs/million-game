import React, { useState } from 'react';
import './styles/App.css';
import ImgHand from "./assets/images/hand.png";
import Modal from './components/UI/Modal/Modal';
import GameForm from './components/GameForm/GameForm';
import GameInterface from './components/GameInterface/GameInterface';

function App() {

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

  // const dataReward = [500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
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

  const [modalStart, setModalStart] = useState(true);
  const [modalEnd, setModalEnd] = useState(false);

  const closeModalStart = () => {
    setModalStart(false);
  }

  const closeModalEnd = () => {
    setModalEnd(false);
  }

  const openModalEnd = () => {
    setModalEnd(true);
  }

  return (
    <div className="App">
      <Modal visible={modalStart}>
        <GameForm close={closeModalStart} img={ImgHand} title={'Who wants to be a millionaire?'} buttonText={'Start'}/>
      </Modal>

      <GameInterface questionText={dataQuiz} endGame={openModalEnd} reward={dataReward.reverse()}/>

      <Modal visible={modalEnd} setEnd={true} style={{background: 'red'}}>
        <GameForm close={closeModalEnd} setEnd={true} img={ImgHand} title={'$8,000 earned'} buttonText={'Try again'}>
          <div className='modalEnd-title'>Total score:</div>
        </GameForm>
      </Modal>
    </div>
  );
}

export default App;
