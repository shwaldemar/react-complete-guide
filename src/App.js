import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {




  render(){

    return (
      <div className="App">
          <h1 >React App 1</h1>
          <h3>Another heading</h3>
          <Person
          name="Simon"
          age="48"/>
          <Person
          name="Tarka"
          age="1.5">
          Hobbies: chewing christmas tree
          </Person>
      </div>

    );
  }
    // return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Hi I\'m a React App!'))
}

export default App;
