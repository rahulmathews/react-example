import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component{
    constructor(props){
		super(props);
		console.log('Inside [Persons.js] constructor', props);
	}

	componentWillMount(){
		console.log('Inside [Persons.js] componentWillMount()');
	}

	componentDidMount(){
		console.log('Inside [Persons.js] componentDidMount()');
    }

    componentWillReceiveProps(nextProps){
        console.log('Inside [Persons.js] componentWillReceiveProps()', nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('Inside [Persons.js] shouldComponentUpdate()', nextProps, nextState);
        return true;
    }

    componentDidUpdate(){
        console.log('Inside [Persons.js] componentDidUpdate()');
    }

    render(){
        console.log('Inside [Persons.js] render()');
        return this.props.persons.map((person, index) => {
            return <Person 
                key={person.id}
                name={person.name}
                age={person.age} 
                click={() => this.props.click(index)}
                change = {(event) => this.props.change(event, person.id)} />
        })
    }
}

export default Persons