import React from 'react';
import classes from './Button.module.css';

const Button = ({children, className, ...props}) => (
    <button {...props} className={classes[className]}>
        {children}
    </button>
);

export default Button;