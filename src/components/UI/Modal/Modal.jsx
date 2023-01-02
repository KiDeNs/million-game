import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, visible, setEnd}) => {
    const rootClasses = [classes.myModal];

    if (visible === false) {
        rootClasses.push(classes.noActive);
    }

    if(setEnd) {
        rootClasses.push(classes.end);
    }
    
    return (
        <div className={rootClasses.join(' ')} >
            <div className={classes.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default Modal;