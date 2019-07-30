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

	switchNameHandler = () => {
		this.setState({
			persons : [
				{name : 'Rahul Mathews', age : 22},
				{name : 'Neha', age : 24},
				{name : 'Swathi', age : 22},
			]
		})
	}

	render(){
		return (
		<div className="App">
			<h1>Hi, I am a React Developer</h1>
			<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
			<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies:Photography</Person>
			<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
			<button onClick={this.switchNameHandler}>Switch Name</button>
		</div>
		);
	}
}

export default App;
