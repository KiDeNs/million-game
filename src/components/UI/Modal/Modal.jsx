import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, className}) => (
        <div className={classes[className]} >
            <div className={classes.myModalContent}>
                {children}
            </div>
        </div>
    );

export default Modal;