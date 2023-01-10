import React from 'react';
import classes from './GameInterface.module.css';
import RewardForm from '../RewardForm/RewardForm';
import VariantsForm from '../VariantsForm/VariantsForm';

const GameInterface = ({rewardData, pathToGame}) => (
    <div className={classes.gameInterMain}>
        <div className={classes.gameInterQuestAns}>
            <div className={classes.gameInterQuest}>
                <p>How old your elder brother was 10 years before you was born, mate?</p>
            </div>

            <VariantsForm pathToGame={pathToGame}/>
        </div>

        <div className={classes.gameInterReward}>
            <RewardForm rewardList={rewardData}/>
        </div>
    </div>
);

export default GameInterface;