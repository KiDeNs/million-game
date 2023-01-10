import React from 'react';
import Modal from '../components/UI/Modal/Modal';
import GameForm from '../components/GameForm/GameForm';

const EndPage = ({pathToGame, ImgHand, classCSS}) => (
    <div>
      <Modal className={classCSS}>
        <GameForm pathToGame={pathToGame} ImgHand={ImgHand} title={'$8,000 earned'} buttonText={'Try again'}>
          <div className='modalEnd-title'>Total score:</div>
        </GameForm>
      </Modal>
    </div>
  );

export default EndPage;