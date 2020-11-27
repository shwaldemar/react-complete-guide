import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons : [
      {name: "Simon", age: 48},
      {name: "Tarka", age: 1.5},
      {name: "Poacher", age: 45}
    ], otherState: 'some other value'
  }
  switchNameHandler = () => {
    //console.log("This button was clicked")
    this.setState({
      persons: [
        {name: "Simon Hall", age: 48},
        {name: "Tarka", age: 1.5},
        {name: "Poacher", age: " a lovely animal!"}
      ]
    })
  }
  render() {
    return (
      <div className="App">
          <h1 >Hi I'm a React App</h1>
          <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>

          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Hi I\'m a React App!'))
  }
}

export default App;
