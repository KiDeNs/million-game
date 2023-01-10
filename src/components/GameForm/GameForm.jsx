import React from 'react';
import Button from '../UI/Button/Button';
import classes from './GameForm.module.css';
import { Link } from 'react-router-dom'


const GameForm = ({children, ImgHand, pathToGame, title, buttonText}) => (
    <div className='gameForm-main'>
        <img className='gameForm-img' src={ImgHand} alt="form-img"/>

        <div className='gameForm-info'>
            {children}

            <p>{title}</p>
            <Link to={pathToGame} className={classes.link}>
                <Button className="myBtn">{buttonText}</Button>
            </Link>
        </div>
    </div>
);

export default GameForm;