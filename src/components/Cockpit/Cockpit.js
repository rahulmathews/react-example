import React from 'react';

import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    let classes = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = styles.Red;
    }

    if(props.persons.length <= 2){
        classes.push(styles.red);
    }
    if(props.persons.length <= 1){
        classes.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi, I am a React Developer</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.click}>Toggle persons</button>
        </div>
    )
}

export default Cockpit;