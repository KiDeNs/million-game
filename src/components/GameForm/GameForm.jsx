import React from 'react';
import Button from '../UI/Button/Button';

const GameForm = ({children, img, close, title, buttonText}) => (
    <div className='gameForm-main'>
        <img className='gameForm-img' src={img} alt="form-img"/>

        <div className='gameForm-info'>
            {children}

            <p>{title}</p>

            <Button onClick={close}>{buttonText}</Button>
        </div>
    </div>
);

export default GameForm;