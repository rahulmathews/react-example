import React, {Component} from 'react';
// import Radium from 'radium';

import './Person.css';


class Person extends Component{
    render(){
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </div>
        )
    }
}

export default Person;