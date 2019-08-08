import React from 'react';

import styles from './Cockpit.module.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
    let classes = [];
    let btnClass = styles.Button;

    if(props.showPersons){
        btnClass = [styles.Red, styles.Button].join(' ');
    }

    if(props.persons.length <= 2){
        classes.push(styles.red);
    }
    if(props.persons.length <= 1){
        classes.push(styles.bold);
    }

    return (
        <Aux>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.click}>Toggle persons</button>
        </Aux>
    )
}

export default Cockpit;