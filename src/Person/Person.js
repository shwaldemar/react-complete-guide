import React from 'react';


const person = (props) =>  {
    return (

      <div>
        <p>
        I'm {props.name} and I am {props.age} and: {props.children ? props.children : "No hobbies listed"}
        </p>
      </div>
    );
}

export default person;
