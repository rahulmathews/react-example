import React from 'react';
// import Radium from 'radium';

import './Person.css';

const person = (props) => {
//    const rnd = Math.random();
//    if(rnd > 0.5){
// 		throw new Error('Something went wrong!!!');
//    }
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
}

export default person;