import React, {PureComponent} from 'react';
// import Radium, {StyleRoot} from 'radium';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
	constructor(props){
		super(props);
		this.state = {
			persons : [
				{id:"hhdbbdbb", name : 'Rahul', age : 22},
				{id:"hlubeaesb", name : 'Neha', age : 24},
				{id:"jsdvjddsdb", name : 'Swathi', age : 21},
			],
			showPersons : false
		};
		console.log('Inside [App.js] constructor', props);
	}

	componentWillMount(){
		console.log('Inside [App.js] componentWillMount()');
	}

	componentDidMount(){
		console.log('Inside [App.js] componentDidMount()');
	}

	componentWillReceiveProps(nextProps){
        console.log('Inside [App.js] componentWillReceiveProps()', nextProps);
    }
    
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('Inside [App.js] shouldComponentUpdate()', nextProps, nextState);
	// 	return this.state.persons !== nextState.persons ||
	// 	this.state.showPersons !== nextState.showPersons;
    // }

    componentDidUpdate(){
        console.log('Inside [App.js] componentDidUpdate()');
    }

	// state = {
	// 	persons : [
	// 		{id:"hhdbbdbb", name : 'Rahul', age : 22},
	// 		{id:"hlubeaesb", name : 'Neha', age : 24},
	// 		{id:"jsdvjddsdb", name : 'Swathi', age : 21},
	// 	],
	// 	showPersons : false
	// }

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
		console.log('Inside [App.js] render()');
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
			<Aux>
				<button onClick={() =>{this.setState({showPersons : true})}}>Show Persons</button>
				<Cockpit 
				title={this.props.title}
				showPersons={this.state.showPersons}
				persons={this.state.persons}
				click={this.togglePersonsHandler}/>
				{persons}
			</Aux>
		);
	}
}

export default withClass(App, styles.App);
