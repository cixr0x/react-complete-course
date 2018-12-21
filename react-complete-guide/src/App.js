import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:26},
    ]
  }

  switchNameHandler = () => {
    console.log("Clicked");
    this.setState({
      persons: [
        {name:'Maximilian', age:28},
        {name:'Manu', age:29},
        {name:'Stephanie', age:26}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working! </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name="Max" age="age1"/>
        <Person name="Name2" age="age2">
          Hobbies racing
        </Person>
        <Person name="Name3" age="age3"/>
      </div>
    );
  }
}

export default App;
