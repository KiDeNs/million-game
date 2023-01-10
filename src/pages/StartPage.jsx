import React from 'react';
import Modal from '../components/UI/Modal/Modal';
import GameForm from '../components/GameForm/GameForm';

const StartPage = ({pathToGame, ImgHand, classCSS}) => (
    <div>
      <Modal className={classCSS}>
        <GameForm pathToGame={pathToGame} ImgHand={ImgHand} title={'Who wants to be a millionaire?'} buttonText={'Start'}/>
      </Modal>
    </div>
  );

export default StartPage;