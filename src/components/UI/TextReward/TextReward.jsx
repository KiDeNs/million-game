import React from 'react';
import classes from './TextReward.module.css';

const TextReward = ({children, ...props}) => (
    <div {...props} className={classes.myText}>
        {children}
    </div>
);

export default TextReward;