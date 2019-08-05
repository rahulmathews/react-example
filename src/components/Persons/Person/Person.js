import React, {Component} from 'react';
// import Radium from 'radium';

import './Person.css';


class Person extends Component{
    constructor(props){
		super(props);
		console.log('Inside [Person.js] constructor', props);
	}

	componentWillMount(){
		console.log('Inside [Person.js] componentWillMount()');
	}

	componentDidMount(){
		console.log('Inside [Person.js] componentDidMount()');
    }
    
    render(){
        console.log('Inside [Person.js] render()');
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