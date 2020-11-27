import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'


const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons : [
      {name: "Simon", age: 48},
      {name: "Tarka", age: 1.5},
      {name: "Poacher", age: 45}
    ], otherState: 'some other value'
  });

  const switchNameHandler = () => {
    //console.log("This button was clicked")
    setPersonsState({
      persons: [
        {name: "Simon Hall", age: 48},
        {name: "Tarka", age: 1.5},
        {name: "Poacher", age: " a lovely animal!"}
      ]
    })
  }


    return (
      <div className="App">
          <h1 >Hi I'm a React App</h1>
          <p>This is really working!</p>
          <button onClick={switchNameHandler}>Switch Name</button>

          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Hi I\'m a React App!'))
}

export default app;
// state = {
//   persons : [
//     {name: "Simon", age: 48},
//     {name: "Tarka", age: 1.5},
//     {name: "Poacher", age: 45}
//   ], otherState: 'some other value'
// }
