import React, {Component} from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons : [
			{id:"hhdbbdbb", name : 'Rahul', age : 22},
			{id:"hlubeaesb", name : 'Neha', age : 24},
			{id:"jsdvjddsdb", name : 'Swathi', age : 21},
		],
		showPersons : false
	}

	switchNameHandler = (event, id) => {
		const name = event.target.value;
		const findObjIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});
		let persons = [
			...this.state.persons
		];
		persons[findObjIndex].name = name;

		this.setState({
			persons : persons
		})
	}

	togglePersonsHandler = () => {
		const showPerson = this.state.showPersons;
		this.setState({
			showPersons : !showPerson
		});
	}

	deletePersonHandler = (index) => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({
			persons : persons
		});
	}

	render(){
		const style = {
			backgroundColor : 'salmon',
			border : '1px solid blue',
			cursor : 'pointer',
			padding : '16px'
		}

		let persons = null;
		
		if(this.state.showPersons){
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person 
							key={person.id}
							name={person.name} 
							age={person.age} 
							click={() => this.deletePersonHandler(index)}
							change = {(event) => this.switchNameHandler(event, person.id)} />
					})}
				</div>
			);
		}

		return (
		<div className="App">
			<h1>Hi, I am a React Developer</h1>
			<button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
			{persons}
		</div>
		);
	}
}

export default App;
