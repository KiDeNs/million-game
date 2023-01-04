import React from 'react';
import Button from '../UI/Button/Button';
import classes from './VariantsForm.module.css';
import { Link } from 'react-router-dom'

const VariantsForm = ({pathToPage}) => (
    <div className={classes.varFormMain}>
        <Link to={pathToPage} className={classes.varFormLink}>
            <Button className="myAnsBtn">
                <p className={classes.varButP}>A</p>

                10 years
            </Button>
        </Link>

        <Button className="myAnsBtn">
            <p className={classes.varButP}>A</p>

            10 years
        </Button>

        <Button className="myAnsBtn">
            <p className={classes.varButP}>A</p>

            10 years
        </Button>

        <Button className="myAnsBtn">
            <p className={classes.varButP}>A</p>
            
            10 years
        </Button>
    </div>
);

export default VariantsForm;