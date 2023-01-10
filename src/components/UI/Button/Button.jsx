import React from 'react';
import classes from './Button.module.css';

const Button = ({children, className, ...props}) => (
    <div {...props} className={classes[className]}>
        {children}
    </div>
);

export default Button;