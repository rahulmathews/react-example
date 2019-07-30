import React, {Component} from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons : [
			{name : 'Rahul', age : 22},
			{name : 'Neha', age : 24},
			{name : 'Swathi', age : 21},
		]
	}

	switchNameHandler = (newName) => {
		this.setState({
			persons : [
				{name : newName, age : 22},
				{name : 'Neha', age : 24},
				{name : 'Swathi', age : 22},
			]
		})
	}

	nameChangeHandler = (event) => {
		this.setState({
			persons : [
				{name : event.target.value, age : 22},
				{name : 'Neha', age : 24},
				{name : 'Swathi', age : 22},
			]
		})
	}

	render(){
		const style = {
			backgroundColor : 'red',
			border : '1px solid blue',
			cursor : 'pointer',
			padding : '16px'
		}

		return (
		<div className="App">
			<h1>Hi, I am a React Developer</h1>
			<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
			<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={() => this.switchNameHandler('rahul mathews')} change={this.nameChangeHandler}>My Hobbies:Photography</Person>
			<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
			<button style={style} onClick={this.switchNameHandler.bind(this, 'Rahul Mathews')}>Switch Name</button>
		</div>
		);
	}
}

export default App;
