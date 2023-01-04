import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom'


const GameForm = ({children, img, close, title, buttonText}) => (
    <div className='gameForm-main'>
        <img className='gameForm-img' src={img} alt="form-img"/>

        <div className='gameForm-info'>
            {children}

            <p>{title}</p>
            <Link to={close}>
                <Button className="myBtn">{buttonText}</Button>
            </Link>
        </div>
    </div>
);

export default GameForm;