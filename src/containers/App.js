import React, {Component} from 'react';
// import Radium, {StyleRoot} from 'radium';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
		let persons = null;
		
		if(this.state.showPersons){
			persons = (
				<div>
					<Persons 
					persons={this.state.persons}
					click={this.deletePersonHandler}
					change={this.switchNameHandler} />
				</div>
			);
		}

		return (
			<div className={styles.App}>
				<Cockpit 
				title={this.props.title}
				showPersons={this.state.showPersons}
				persons={this.state.persons}
				click={this.togglePersonsHandler}/>
				{persons}
			</div>
		);
	}
}

export default App;
