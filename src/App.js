import React, {Component} from 'react';
// import Radium, {StyleRoot} from 'radium';

import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
		let btnClass = '';
		
		if(this.state.showPersons){
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <ErrorBoundary key={person.id}>
									<Person 
									name={person.name} 
									age={person.age} 
									click={() => this.deletePersonHandler(index)}
									change = {(event) => this.switchNameHandler(event, person.id)} />
								</ErrorBoundary>
					})}
				</div>
			);
			btnClass = styles.Red;
		}

		let classes = [];
		if(this.state.persons.length <= 2){
			classes.push(styles.red);
		}
		if(this.state.persons.length <= 1){
			classes.push(styles.bold);
		}

		return (
			<div className={styles.App}>
				<h1>Hi, I am a React Developer</h1>
				<p className={classes.join(' ')}>This is really working</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>Toggle persons</button>
				{persons}
			</div>
		);
	}
}

export default App;
