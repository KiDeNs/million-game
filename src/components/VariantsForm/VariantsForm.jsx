import React from 'react';
import ButtonAnswer from '../UI/ButtonAnswer/ButtonAnswer';
import classes from './VariantsForm.module.css';

const VariantsForm = ({closeGameClick}) => (
    <div className={classes.varFormMain}>
        <ButtonAnswer onClick={closeGameClick}>
            <p className={classes.varButP}>A</p>

            10 years
        </ButtonAnswer>

        <ButtonAnswer >
            <p className={classes.varButP}>A</p>

            10 years
        </ButtonAnswer>

        <ButtonAnswer>
            <p className={classes.varButP}>A</p>

            10 years
        </ButtonAnswer>

        <ButtonAnswer>
            <p className={classes.varButP}>A</p>
            
            10 years
        </ButtonAnswer>
    </div>
);

export default VariantsForm;