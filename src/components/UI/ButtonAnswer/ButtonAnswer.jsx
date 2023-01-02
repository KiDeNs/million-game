import React from 'react';
import classes from './ButtonAnswer.module.css';

const ButtonAnswer = ({children, ...props}) => (
    <button {...props} className={classes.myBtn}>
        {children}
    </button>
);

export default ButtonAnswer;