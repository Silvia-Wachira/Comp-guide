import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import { render } from '@testing-library/react';

function App() {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stepanhie', age: 26}
    ]
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!!</p>
      <button>Switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

    

    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1'), null, 'Does this work now')
} 

export default App;
