import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import { render } from '@testing-library/react';

// function App() {
  class App extends Component {
    return() {
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!! </p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" />
        <Person name="Stephanie" age="26" />

      </div>
    }
  }


  // return React.createElement('div', {className: 'App'}, React.createElement('h1'), null, 'Does this work now')
  

export default App;
