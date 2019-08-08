import React, {Component} from 'react';
// import Radium from 'radium';
import PropTypes from 'prop-types';

import './Person.css';
import withClass from '../../../hoc/withClass';
// import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux'; 


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
        if(this.props.position === 0){
            this.inputElem.focus();
        }
    }
    
    render(){
        console.log('Inside [Person.js] render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input ref={(inp) => {this.inputElem = inp}} type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>
        )
        // return [
        //     <p key="1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.change} value={this.props.name}></input>
        // ]
    }
}

Person.propTypes = {
    change  : PropTypes.func,
    click   : PropTypes.func,
    name    : PropTypes.string,
    age     : PropTypes.number
}

export default withClass(Person, 'Person');