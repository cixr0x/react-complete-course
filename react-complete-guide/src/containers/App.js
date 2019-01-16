import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import withClass from '../hoc/WithClass';

class App extends Component {

  constructor(props){
    super(props);
    console.log();
  }

  state = {
    persons: [
      {id: 'aa', name:'Max', age:28},
      {id: 'bb',name:'Manu', age:29},
      {id: 'cc',name:'Stephanie', age:26},
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id ===id;
    });

      const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
  
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons =  [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  render() {

    let persons =  null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons} 
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
        </div>
      );

    }

    

    return (
      
      <WithClass classes={classes.App}>
       <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        click = {this.togglePersonsHandler}/>
          {persons}
          
      </WithClass>
      
    );
  }
}

export default App;
