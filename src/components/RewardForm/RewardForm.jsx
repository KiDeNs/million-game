import React from 'react';
import TextReward from '../UI/TextReward/TextReward';
import classes from './RewardForm.module.css';

const RewardForm = ({rewardList}) => (
    <div className={classes.revFormMain}>
        {rewardList.map((item) => (
            <TextReward>
                {item.icon}
                
                {item.reward}
            </TextReward>
        ))}
    </div>
);

export default RewardForm;